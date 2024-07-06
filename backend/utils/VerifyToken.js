import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    // Extract token from request headers
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized User : Token missing' });
    }

    try {
        console.log('jwtscrt', process.env.JWT_SECRET) //works fine
        // Verify token and attach user data to request object
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('User data attached to req:', req.user); //undefined 
        console.log('decoded', decoded)
        req.user = decoded;
        console.log('User data attached to req:', req.user); // correct 
        next();
    } catch (error) {
        next(error)
    }
};
