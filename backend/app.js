import express from 'express';
export const app = express();
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/Auth.js';
import userRoutes from './routes/User.js';
import postRoutes from './routes/Post.js';
import commentRoutes from './routes/Comment.js';
import { verifyToken } from './utils/VerifyToken.js';


app.use(express.json());
app.use(express.static('uploads'));
app.use(cookieParser());

dotenv.config({
    path: './.env'
});

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["POST", "PUT", "GET", "DELETE"],
    credentials: true
}));
// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', verifyToken, userRoutes);
app.use('/api/v1/post', verifyToken, postRoutes);
app.use('/api/v1/comments', verifyToken, commentRoutes);


app.get('/', (req, res) => {
    res.json({
        messgae: "Jay Shree Ram...!"
    })
})
