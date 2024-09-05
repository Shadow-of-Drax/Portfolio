import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ posts, deletePost }) => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <div className="blog-preview" key={post.id}>
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
            <p>Written by {post.author}</p>
          </Link>
          <Link to={`/edit/${post.id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;