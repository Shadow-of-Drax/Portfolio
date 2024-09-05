import React from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';

const BlogList = ({ posts, deletePost }) => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <div className="blog-card" key={post.id}>
          <h2>{post.title}</h2>
          <p>By {post.author}</p>
          <p>{post.body.substring(0, 100)}...</p>
          <div className="blog-actions">
            <Link to={`/post/${post.id}`}>Read More</Link>
            <Link to={`/edit/${post.id}`}>Edit</Link>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;