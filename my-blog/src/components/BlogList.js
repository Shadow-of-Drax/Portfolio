import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ posts, handleDelete, handleEdit }) => {
  return (
    <div className="blog-list">
      {posts.map(post => (
        <div className="blog-preview" key={post.id}>
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
            <p>Written by {post.author}</p>
          </Link>
          <button onClick={() => handleEdit(post)}>Edit</button>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;