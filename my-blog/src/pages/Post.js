import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../components/Comments';
import './Post.css';

const Post = ({ posts }) => {
  const { id } = useParams();
  const post = posts && posts.find((post) => post.id === parseInt(id));

  const [comments, setComments] = useState([
    // Some sample comments for demonstration
    { id: 1, postId: 1, name: 'John', body: 'Great post!' },
    { id: 2, postId: 1, name: 'Jane', body: 'I learned a lot, thanks!' }
  ]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="post-details container">
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p><strong>By {post.author}</strong></p>
          <p>{post.body}</p>

          {/* Comments Section */}
          <Comments postId={post.id} commentsData={comments} addComment={addComment} />
        </>
      ) : (
        <p>Post not found.</p>
      )}
    </div>
  );
};

export default Post;