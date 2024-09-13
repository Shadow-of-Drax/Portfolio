import React from 'react';
import CreatePost from '../components/CreatePost';

const CreatePostPage: React.FC = () => {
    return (
        <div>
            <h1>Create a New Post</h1>
            <CreatePost />
        </div>
    );
};

export default CreatePostPage;