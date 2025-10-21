import { v2 as cloudinary } from "cloudinary";
import fs from "fs"
import dotenv from "dotenv";

dotenv.config();

//configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        const response = await cloudinary.uploader.upload(
            localFilePath,
            {
                resource_type: "auto",
                folder: "VideoTube/users"
            },
        )
        console.log("File uploaded on cloudinary. File src: " + response.url);
        fs.unlinkSync(localFilePath);
        return response
    } catch (error) {
        console.log("Error:",error);
        fs.unlinkSync(localFilePath)
        return null
    }
}

const deleteFromCloudinary = async (publicId) => {
    try {
       const result =  cloudinary.uploader.destroy(publicId)
    } catch (error) {
        console.log("Error deleting from clodinary",error);
        return null
    }
}

export { uploadOnCloudinary, deleteFromCloudinary }