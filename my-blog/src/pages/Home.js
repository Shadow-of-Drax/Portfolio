import React, { useState } from 'react';
import BlogList from '../components/BlogList';
import CreatePost from '../pages/CreatePost'; // Import CreatePost component

const Home = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="home">
      <h2>All Posts</h2>
      <BlogList posts={posts} />
      <CreatePost addPost={addPost} /> {/* Pass addPost as a prop */}
    </div>
  );
};

export default Home;