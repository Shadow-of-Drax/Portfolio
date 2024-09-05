import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = ({ posts, updatePost }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Ensure posts is defined before calling .find()
  const postToEdit = posts && posts.find((post) => post.id === parseInt(id));

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (postToEdit) {
      setTitle(postToEdit.title);
      setAuthor(postToEdit.author);
      setBody(postToEdit.body);
    }
  }, [postToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      id: postToEdit.id,
      title,
      author,
      body
    };
    updatePost(updatedPost);
    navigate('/');
  };

  return (
    <div className="edit">
      {postToEdit ? (
        <>
          <h2>Edit Blog Post</h2>
          <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Author:</label>
            <input
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <label>Content:</label>
            <textarea
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <button type="submit">Update Post</button>
          </form>
        </>
      ) : (
        <p>Loading post or post not found...</p>
      )}
    </div>
  );
};

export default EditPost;