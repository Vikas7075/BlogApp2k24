import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token || ''; // Assuming the token is stored in a cookie

    if (!token) {
        // User is not logged in
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user information to the request
        next();
    } catch (error) {
        // Token is invalid
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

