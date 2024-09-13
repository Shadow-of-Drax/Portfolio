import React, { useState } from 'react';
import axios from 'axios';

const CreatePost: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newPost = { title, content, author };
        await axios.post('http://localhost:5000/api/posts', newPost);
        setTitle('');
        setContent('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <button type="submit">Create Post</button>
        </form>
    );
};

export default CreatePost;