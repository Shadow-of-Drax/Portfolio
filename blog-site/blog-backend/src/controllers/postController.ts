import { Request, Response } from 'express';
import Post from '../models/Post';

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const author = (req as any).userId;
    const newPost = new Post({ title, content, author });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ message: 'Error creating post', error });
  }
};

// Add updatePost function
export const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const author = (req as any).userId;
    const updatedPost = await Post.findOneAndUpdate(
      { _id: id, author },
      req.body,
      { new: true }
    );
    if (!updatedPost) return res.status(404).json({ message: 'Post not found or unauthorized' });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: 'Error updating post', error });
  }
};

export const addComment = async (req: Request, res: Response) => {
    try {
      const { content } = req.body;
      const author = (req as any).userId;
      const { id } = req.params; // Post ID
  
      const post = await Post.findById(id);
      if (!post) return res.status(404).json({ message: 'Post not found' });
  
      post.comments.push({ author, content });
      await post.save();
  
      res.status(201).json({ message: 'Comment added' });
    } catch (error) {
      res.status(400).json({ message: 'Error adding comment', error });
    }
  };

  export const getPosts = async (req: Request, res: Response) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = 5; // Number of posts per page
      const skip = (page - 1) * limit;
  
      const posts = await Post.find().skip(skip).limit(limit).sort({ date: -1 });
      const total = await Post.countDocuments();
  
      res.status(200).json({
        posts,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
      });
    } catch (error) {
      res.status(400).json({ message: 'Error fetching posts', error });
    }
  };