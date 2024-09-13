import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post<{ token: string; userId: string; username: string }>('http://localhost:5000/api/login', { email, password });
      const { token, userId, username } = response.data;
      login(token, userId, username);
      navigate('/');
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;