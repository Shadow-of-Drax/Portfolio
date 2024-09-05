import React, { useState, useEffect } from 'react';
import BlogList from '../components/BlogList';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Mock fetch from API or local storage
    setPosts([
      { id: 1, title: 'My First Blog', author: 'John Doe', body: 'This is my first blog post...' },
      { id: 2, title: 'React Rocks!', author: 'Jane Doe', body: 'React is a powerful library for building UIs...' }
    ]);
  }, []);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="home">
      <h2>All Posts</h2>
      <Link to="/create">
        <button>Create New Post</button>
      </Link>
      <BlogList posts={posts} deletePost={deletePost} />
    </div>
  );
};

export default Home;