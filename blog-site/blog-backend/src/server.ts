import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/postRoutes';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', postRoutes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/blog')
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB', error);
    });