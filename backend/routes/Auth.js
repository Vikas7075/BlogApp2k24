import express from 'express';
import User from '../model/user.js';
import bcrypt from 'bcrypt';
import { setCookie } from '../utils/features.js';
import { verifyToken } from '../utils/VerifyToken.js';
const router = express.Router();


router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists.',
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await User.create({ username, email, password: hashPassword });
        setCookie(user, res, "Registered Successfully..", 201);

    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error.',
        });
    }
});
//Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Invalid email Or Password',
            });
        }

        const isMatch = await bcrypt.compare(password.trim(), user.password);
        //const isMatch = password === user.password;



        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid Or password..',
            });
        }

        setCookie(user, res, `Welcome back ${user.username}`, 200);

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error.',
        });
    }
});

//LogOut
router.post('/logout', async (req, res) => {
    try {
        // Clear the JWT cookie
        res.clearCookie('token');

        res.status(200).json({
            success: true,
            message: 'Logout successful.',
        });
    } catch (error) {
        console.error('Error during logout:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error.',
        });
    }
});



export default router