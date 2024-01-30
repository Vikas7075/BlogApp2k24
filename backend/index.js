import express from 'express';
import { connectDB } from './utils/database.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/Auth.js';
import userRoutes from './routes/User.js';
import postRoutes from './routes/Post.js';
import commentRoutes from './routes/Comment.js';


const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Home Page ....',
    });
});

dotenv.config();
app.use(express.json());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/comments', commentRoutes);


app.listen(process.env.PORT, () => {
    connectDB();
    console.log('Server is running....');
});
