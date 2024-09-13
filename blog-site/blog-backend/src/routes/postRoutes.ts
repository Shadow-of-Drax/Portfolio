import { Router } from 'express';
import { createPost, getPosts, deletePost, updatePost } from '../controllers/postController';
import { verifyToken } from '../controllers/authController';

const router = Router();

router.post('/posts', verifyToken, createPost);
router.get('/posts', getPosts);
router.put('/posts/:id', verifyToken, updatePost);
router.delete('/posts/:id', verifyToken, deletePost);
router.post('/posts/:id/comments', verifyToken, addComment);

export default router;