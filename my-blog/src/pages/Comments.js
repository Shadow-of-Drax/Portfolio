import React, { useState } from 'react';
import './Comments.css';

const Comments = ({ postId, commentsData, addComment }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      const newComment = {
        id: Date.now(), // Use a timestamp as a temporary ID
        postId: postId,
        name: name,
        body: comment
      };
      addComment(newComment);
      setName('');
      setComment('');
    }
  };

  return (
    <div className="comments-section">
      <h3>Comments</h3>

      {/* Comments List */}
      <ul className="comments-list">
        {commentsData
          .filter((c) => c.postId === postId)
          .map((comment) => (
            <li key={comment.id} className="comment">
              <h4>{comment.name}</h4>
              <p>{comment.body}</p>
            </li>
          ))}
      </ul>

      {/* Add Comment Form */}
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
};

export default Comments;