import React, { useState, useEffect } from 'react';
import BlogList from '../components/BlogList';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Mock fetch API
    setPosts([
      { id: 1, title: 'My First Blog', author: 'James Warren', body: 'This is my first blog post...' },
      { id: 2, title: 'From the beginning', author: 'Jane Doe', body: 'Started my careere in the Army...' }
    ]);
  }, []);

  return (
    <div className="home">
      <BlogList posts={posts} />
    </div>
  );
}

export default Home;