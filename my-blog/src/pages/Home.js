import React, { useState, useEffect } from 'react';
import BlogList from '../components/BlogList';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Mock fetch API
    setPosts([
      { id: 1, title: 'My First Blog', author: 'John Doe', body: 'This is my first blog post...' },
      { id: 2, title: 'React Rocks!', author: 'Jane Doe', body: 'React is a powerful library for building UIs...' }
    ]);
  }, []);

  return (
    <div className="home">
      <BlogList posts={posts} />
    </div>
  );
}

export default Home;