import mongoose, { Schema, model } from 'mongoose';

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        desc: {
            type: String,
            required: true,
            trim: true,
        },
        photo: {
            type: String,
            required: false,
        },
        username: {
            type: String,
            required: true,
            trim: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model
            required: true,
        },
        categories: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

const Post = model('Post', postSchema);

export default Post;

