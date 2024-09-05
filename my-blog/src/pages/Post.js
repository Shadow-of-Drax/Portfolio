import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Mock fetch API
    const fetchedPosts = [
      { id: 1, title: 'My First Blog', author: 'John Doe', body: 'This is my first blog post...' },
      { id: 2, title: 'React Rocks!', author: 'Jane Doe', body: 'React is a powerful library for building UIs...' }
    ];

    const fetchedPost = fetchedPosts.find(p => p.id === parseInt(id));
    setPost(fetchedPost);
  }, [id]);

  return (
    <div className="post">
      {post ? <BlogPost post={post} /> : <h2>Loading...</h2>}
    </div>
  );
}

export default Post;