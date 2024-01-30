import jwt from 'jsonwebtoken';

export const setCookie = (user, res, message, statusCode = 200) => {
    const token = jwt.sign({ _id: user._id, username: user.username, email: user.email }, process.env.JWT_SECRET);

    // Set the cookie in the response
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
    });

    // Send the JSON response separately
    res.status(statusCode).json({
        success: true,
        message,
        user
    });
};
