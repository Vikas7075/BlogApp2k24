import express from 'express';
import bcrypt from 'bcrypt'
import User from '../model/user.js';
import Post from '../model/Post.js';
import Comment from '../model/Comment.js';
import { setCookie } from '../utils/features.js';

const router = express.Router()


//Upadate
// Update User Email and Password
router.put('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const { email, password, username } = req.body;

        // You might want to add validation for email and password here

        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update the user in the database
        const updatedUser = await User.findByIdAndUpdate(userId, { email, username, password: hashedPassword }, { new: true });

        // Check if the user was found and updated
        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found or could not be updated.',
            });
        }

        // Use setCookie function to handle setting the cookie and sending the response
        setCookie(updatedUser, res, 'User updated successfully.', 200);
    } catch (error) {
        console.error('Error during user update:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error.',
        });
    }
});


//Delete

router.delete('/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        // Delete the user
        await User.findByIdAndDelete(userId);

        // Delete associated posts and comments
        await Post.deleteMany({ userId });
        await Comment.deleteMany({ userId });

        // Send a response indicating successful deletion
        res.status(200).json({
            success: true,
            message: 'User and associated data deleted successfully.',
        });
    } catch (error) {
        console.error('Error during user deletion:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error.',
        });
    }
});

router.get('/profile', async (req, res) => {
    const user = req.user;
    // console.log(user)
    try {
        const fullUserDetails = await User.findById(user.userId);

        if (!fullUserDetails) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({
            success: true,
            user: fullUserDetails
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/allusers', async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json({
            success: true,
            user: allUsers
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});




//Get

export default router