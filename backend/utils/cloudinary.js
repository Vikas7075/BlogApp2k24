import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            console.error('Local file path is missing.');
            return null;
        }

        // Upload file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            folder: "Blog2k24Post",
            resource_type: "auto"
        });

        // File uploaded successfully
        console.log("File is uploaded successfully...!", response.url);
        return response;
    } catch (error) {
        // Handle Cloudinary upload error
        console.error("Error during Cloudinary upload:", error);

        // Remove the locally saved temporary file as the upload operation failed
        fs.unlinkSync(localFilePath);

        return null;
    }
};
