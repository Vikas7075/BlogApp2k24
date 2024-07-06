import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true, // Trim leading and trailing whitespaces
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true, // Ensure email is stored in lowercase for consistency
        },
        password: {
            type: String,
            required: true,
            // Add a minimum length requirement for passwords
        },
    },
    { timestamps: true }
);
const User = mongoose.model('User', userSchema);
export default User;