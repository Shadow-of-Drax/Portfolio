import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Mock fetch API
    const fetchedPosts = [
      { id: 1, title: 'My First Blog', author: 'James Warren', body: 'This is my first blog post...' },
      { id: 2, title: 'From the eginning', author: 'James Warren', body: 'Started my careere in the Army in Febuary of 2003. Knowing exactyly what I was getting into since 9/11 was so recent. I enlisted into the Field Artillery as a Forward Observer. My first set of duties were as a driver of our vehical. I would learn the basics of my job and learn how to maintain and drive the vehical.' }
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