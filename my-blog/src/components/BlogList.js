import React from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';

const BlogList = ({ posts }) => {
  return (
    <div className="blog-list">
      {posts.map(post => (
        <div className="blog-preview" key={post.id}>
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
            <p>Written by {post.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;