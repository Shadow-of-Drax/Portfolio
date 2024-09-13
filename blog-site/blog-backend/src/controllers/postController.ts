import { Request, Response } from 'express';
import Post from '../models/Post';

// Create a new post
export const createPost = async (req: Request, res: Response) => {
    try {
        const { title, content, author } = req.body;
        const newPost = new Post({ title, content, author });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ message: 'Error creating post', error });
    }
};

// Get all posts
export const getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching posts', error });
    }
};

// Delete a post by ID
export const deletePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedPost = await Post.findByIdAndDelete(id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting post', error });
    }
};