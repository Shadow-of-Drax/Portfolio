import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && body) {
      const newPost = {
        id: Date.now(),
        title,
        author,
        body,
      };
      addPost(newPost);
      setTitle('');
      setAuthor('');
      setBody('');
      navigate('/');
    }
  };

  return (
    <div className="create-post">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <label>Content:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default CreatePost;