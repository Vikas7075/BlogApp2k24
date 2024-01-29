import express from 'express';
import { connectDB } from './utils/database.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/Auth.js'; // Assuming Auth.js contains your authentication routes
import userRoutes from './routes/User.js'; // Assuming Auth.js contains your authentication routes

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

app.use('/api/v1/auth', authRoutes); // Corrected path and added 'Routes' suffix to auth
app.use('/api/v1/user', userRoutes); // Corrected path and added 'Routes' suffix to auth


app.listen(process.env.PORT, () => {
    connectDB();
    console.log('Server is running....');
});
