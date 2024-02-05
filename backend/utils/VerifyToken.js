import jwt from 'jsonwebtoken';
import User from '../model/user.js';

export const verifyToken = async (req, res, next) => {
    const { token } = req.cookies || ''; // Assuming the token is stored in a cookie

    if (!token) {
        // User is not logged in
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded._id || !decoded.username) {
            // If _id or username is missing, it's unauthorized
            return res.status(401).json({ message: 'Unauthorized: Missing username information' });
        }

        const user = await User.findById(decoded._id);

        if (user && user.username === decoded.username) {
            // User is authenticated, proceed with the next middleware or route handler
            req.user = user; // Optional: Attach the user object to the request for later use
            next();
        } else {
            // User is not authenticated
            return res.status(401).json({ message: 'Unauthorized: Invalid user information' });
        }
    } catch (error) {
        // Token is invalid
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};
