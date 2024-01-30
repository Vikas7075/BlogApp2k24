import express from 'express';
import Comment from '../model/Comment.js';
import { setCookie } from '../utils/features.js';
import Post from '../model/Post.js';
import { verifyToken } from '../utils/VerifyToken.js';

const router = express.Router();

// Create
router.post('/create', verifyToken, async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        const savedComment = await newComment.save();

        setCookie(savedComment, res, "Comment Create Successfully...", 200);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error.',
        });
    }

})


//Update
router.put('/:id', verifyToken, async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        setCookie(comment, res, "comment updates successfully...", 200);
    } catch (error) {

        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error.',
        });
    }
})

//delete
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        setCookie(comment, res, "Comment deleted...!", 200);
    } catch (error) {

        console.error('Error during user update:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error.',
        });
    }
})

//Get Post Comment 
router.get('/post/:postId', async (req, res) => {
    try {
        const post = await Post.find({ postId: req.params.postId });
        setCookie(post, res, "Get Post Comment..", 200);
    } catch (error) {

        console.error('Error during user update:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error.',
        });
    }
})

export default router;