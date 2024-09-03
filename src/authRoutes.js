import express from 'express';
import { verifyToken , login } from './authController.js';

const router = express.Router();

router.get('/verify', verifyToken);
router.post('/login', login);

export default router;
