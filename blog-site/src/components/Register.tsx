import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', { username, email, password });
      navigate('/login');
    } catch (error) {
      console.error('Error registering', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="text" required placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;