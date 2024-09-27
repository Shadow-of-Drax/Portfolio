import { Router } from 'express';
import { createPost, getPosts, getPost, updatePost, deletePost } from '../controllers/postController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.post('/', authMiddleware, createPost);
router.get('/', getPosts);
router.get('/:id', getPost);
router.put('/:id', authMiddleware, updatePost);
router.delete('/:id', authMiddleware, deletePost);

export default router;