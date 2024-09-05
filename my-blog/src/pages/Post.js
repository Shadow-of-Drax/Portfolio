import React from 'react';
import { useParams } from 'react-router-dom';
import './Post.css';

const Post = ({ posts }) => {
  const { id } = useParams();

  // Ensure posts is not undefined before calling .find()
  const post = posts && posts.find((post) => post.id === parseInt(id));

  return (
    <div className="post-details container">
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p><strong>By {post.author}</strong></p>
          <p>{post.body}</p>
        </>
      ) : (
        <p>Post not found or loading...</p>
      )}
    </div>
  );
};

export default Post;