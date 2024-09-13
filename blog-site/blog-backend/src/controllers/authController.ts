import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/user';

const JWT_SECRET = 'your_secret_key'; // Use environment variable in production

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already registered' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();

    res.status(201).json({ message: 'User created', userId: savedUser._id });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, userId: user._id, username: user.username });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

export const verifyToken = (req: Request, res: Response, next: Function) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer <token>
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const verified = jwt.verify(token, JWT_SECRET) as { userId: string };
    (req as any).userId = verified.userId;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};