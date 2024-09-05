import React, { useState } from 'react';
import BlogList from '../components/BlogList';

const Home = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'My First Blog', author: 'John Doe', body: 'This is my first blog post...' },
    { id: 2, title: 'React Rocks!', author: 'Jane Doe', body: 'React is a powerful library for building UIs...' }
  ]);
  const [newPost, setNewPost] = useState({ title: '', author: '', body: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  // Create new post
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update post
      setPosts(posts.map(post => (post.id === currentPost.id ? currentPost : post)));
      setIsEditing(false);
      setCurrentPost(null);
    } else {
      // Create new post
      setPosts([...posts, { id: posts.length + 1, ...newPost }]);
    }
    setNewPost({ title: '', author: '', body: '' });
  };

  // Delete post
  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  // Edit post
  const handleEdit = (post) => {
    setIsEditing(true);
    setCurrentPost(post);
  };

  return (
    <div className="home">
      <h2>{isEditing ? 'Edit Post' : 'Create New Post'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input 
          type="text" 
          required 
          value={isEditing ? currentPost.title : newPost.title} 
          onChange={(e) => isEditing ? setCurrentPost({ ...currentPost, title: e.target.value }) : setNewPost({ ...newPost, title: e.target.value })}
        />
        <label>Author:</label>
        <input 
          type="text" 
          required 
          value={isEditing ? currentPost.author : newPost.author} 
          onChange={(e) => isEditing ? setCurrentPost({ ...currentPost, author: e.target.value }) : setNewPost({ ...newPost, author: e.target.value })}
        />
        <label>Body:</label>
        <textarea 
          required 
          value={isEditing ? currentPost.body : newPost.body} 
          onChange={(e) => isEditing ? setCurrentPost({ ...currentPost, body: e.target.value }) : setNewPost({ ...newPost, body: e.target.value })}
        ></textarea>
        <button type="submit">{isEditing ? 'Update Post' : 'Add Post'}</button>
      </form>

      <BlogList posts={posts} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  );
};

export default Home;