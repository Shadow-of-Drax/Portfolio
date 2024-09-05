import React from 'react';
import './BlogPost.css';

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>Written by {post.author}</p>
      <p>{post.body}</p>
    </div>
  );
}

export default BlogPost;