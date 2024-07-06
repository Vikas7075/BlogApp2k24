import express from 'express';
import Post from '../model/Post.js';
import { setCookie } from '../utils/features.js';
import { set } from 'mongoose';
import { verifyToken } from '../utils/VerifyToken.js';
import { upload } from '../utils/multer.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';


const router = express.Router();


// create

router.post('/create', verifyToken, upload.single('photo'), async (req, res) => {
    console.log('Request Body:', req.body);
    console.log('Request File:', req.file);

    try {
        // Assuming 'photo' is the field name in your form for file upload
        const newPostData = {
            title: req.body.title,
            desc: req.body.desc,
            username: req.body.username,
            userId: req.body.userId,
            categories: JSON.parse(req.body.categories),
            imagePath: req.file ? req.file.path : undefined,
        };

        const cloudinaryResponse = await uploadOnCloudinary(req.file.path);
        console.log(cloudinaryResponse);

        const newPost = new Post(newPostData);
        const savedPost = await newPost.save();



        setCookie(savedPost, res, "Post Created Successfully...", 200);
    } catch (error) {
        console.error('Error during post creation:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error.',
        });
    }
});



//Upadate

router.put('/:id', verifyToken, async (req, res) => {

    try {
        const updatePost = await Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

        setCookie(updatePost, res, "Post Update Successfully...", 200);

    } catch (error) {

        console.error('Error during user update:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error.',
        })
    }

});

//delete

router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const deletePost = await Post.findByIdAndDelete(req.params.id);

        setCookie(deletePost, res, "Post deleted Successfully...!", 200);

    } catch (error) {

        console.error('Error during post deleted:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error.',
        });
    }

});

// get post details

router.get('/:id', verifyToken, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        setCookie(post, res, "Get Post details ..", 200);

    } catch (error) {

        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error.',
        });
    }

});

//get all post 

router.get('/', async (req, res) => {
    const query = req.query;
    try {
        const searchFilter = {
            title: { $regex: query.search, $options: "i" }
        }
        const posts = await Post.find(query.search ? searchFilter : {})

        setCookie(posts, res, "Get All Posts", 200);

    } catch (error) {

        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error.',
        });
    }

})

// get user post 

router.get('/users/:userId', async (req, res) => {
    try {
        const posts = await Post.find({ userId: req.params.userId });

        setCookie(posts, res, "Get user Post by userId", 200);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error.',
        });
    }
})

export default router;