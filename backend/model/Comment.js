import { Schema, model } from 'mongoose';

export const commentSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model for the author of the comment
            required: true,
        },
        post: {
            type: Schema.Types.ObjectId,
            ref: 'Post', // Reference to the Post model for which the comment is made
            required: true,
        },
        likes: {
            type: Number,
            default: 0,
        },
        replies: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment', // Reference to other comments for threaded replies
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Comment = model('Comment', commentSchema);

export default Comment;
