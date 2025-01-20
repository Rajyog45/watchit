import {v2 as cloudinary} from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config({
    path:'./env'
});
import fs from 'fs';
cloudinary.config({
    cloud_name:process.env.cloud_name,
    api_key:process.env.api_key,
    api_secret:process.env.api_secret});
const uploadToCloudinary=async(filepath)=>{
    try {
        if(!filepath) return null;
        //upload file to cloudinary
       const response=await cloudinary.uploader.upload(filepath,{resource_type:'auto'});
       //successfully uploaded file to cloudinary
       console.log('File uploaded successfully to',response.url);
       return response.url;
    } catch (error) {
        fs.unlinkSync(filepath);//remove the locally stored file if upload to cloudinary fails
        return null;
    }
};
export {uploadToCloudinary};

