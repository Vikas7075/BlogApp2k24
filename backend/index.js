import express from 'express';
import { connectDB } from './utils/database.js';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/Auth.js';
import userRoutes from './routes/User.js';
import postRoutes from './routes/Post.js';
import commentRoutes from './routes/Comment.js';
import { verifyToken } from './utils/VerifyToken.js';



dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["POST", "PUT", "GET", "DELETE"],
    credentials: true
}));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', verifyToken, userRoutes);
app.use('/api/v1/post', verifyToken, postRoutes);
app.use('/api/v1/comments', verifyToken, commentRoutes);


app.listen(process.env.PORT, () => {
    connectDB();
    console.log('Server is running....');
});
