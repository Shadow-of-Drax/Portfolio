import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
    _id: string;
    title: string;
    content: string;
    author: string;
    date: string;
}

const PostList: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('http://localhost:5000/api/posts');
            setPosts(response.data);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <p>By: {post.author}</p>
                    <p>Date: {new Date(post.date).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;