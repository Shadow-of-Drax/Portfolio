import React, { useState, useEffect } from 'react';
import BlogList from '../components/BlogList';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulating an async fetch operation
    setTimeout(() => {
      setPosts([
        { id: 1, title: 'My First Blog', author: 'James Warren', body: 'This is my first blog post...' },
        { id: 2, title: 'React Rocks!', author: 'James Warren', body: 'React is a powerful library for building UIs...' }
      ]);
    }, 1000); // Mock delay to simulate fetching data
  }, []);

  return (
    <div className="home">
      <h2>All Posts</h2>
      <BlogList posts={posts} />
    </div>
  );
};

export default Home;