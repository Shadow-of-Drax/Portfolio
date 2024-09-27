import { Request, Response } from 'express';
import { Post } from '../models/Post';

export const createPost = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content, author: req.user.id });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  const posts = await Post.find().populate('author', 'username');
  res.json(posts);
};

export const getPost = async (req: Request, res: Response) => {
  const post = await Post.findById(req.params.id).populate('author', 'username');
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  res.json(post);
};

export const updatePost = async (req: Request, res: Response) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  res.json(post);
};

export const deletePost = async (req: Request, res: Response) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  res.json({ message: 'Post deleted successfully' });
};