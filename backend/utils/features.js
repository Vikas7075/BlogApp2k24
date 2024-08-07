import jwt from 'jsonwebtoken';

export const setCookie = (user, res, message, statusCode = 200) => {
    const token = jwt.sign({ userId: user._id, username: user.username, email: user.email }, process.env.JWT_SECRET);
    console.log('userData', user._id);

    // Set the cookie in the response
    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 55 * 60 * 1000,
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true,

    });

    // Send the JSON response separately
    res.status(statusCode).json({
        success: true,
        message,
        user
    });
};
