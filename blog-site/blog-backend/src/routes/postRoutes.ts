import { Router } from 'express';
import { createPost, getPosts, deletePost } from '../controllers/postController';

const router = Router();

router.post('/posts', createPost);
router.get('/posts', getPosts);
router.delete('/posts/:id', deletePost);

export default router;