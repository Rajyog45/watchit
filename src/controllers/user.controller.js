import {asynchandler} from '../utilities/asynchandler.js';
import {Apierror} from '../utilities/apierror.js';
import {User} from '../models/user.models.js'
import {uploadToCloudinary} from '../utilities/cloudinary.js'
import {Apires} from '../utilities/apires.js';
const registerUser = asynchandler(async (req, res) => {
   // code to register user
   //enter details of user from frontend
   //validation of user details-not empty
   //check if user already exists:username,email
   //check for avatar,coverimage:upload image them to cloudinary
   //create user object-create entry in database
   //remove password and refresh token from response
   //check for user creation
   //return response
   //data from form or json is obtained in req.body
   const {Email,FullName,Username,Password}=req.body
   console.log("email:",Email);
   if([FullName,Email,Username,Password].some((field)=>
   field?.trim()==="")){
      throw new Apierror(400,"All fields are required");
   }
  const ExistedUser =await User.findOne({
      $or:[{Email},{Username}]
   })
   if(ExistedUser){
      throw new Apierror(409,"User with email or username with already existed")
   }
  const avatarLocalPath= req.files?.avatar[0]?.path
  const coverImageLocalPath=req.files?.coverImage[0]?.path
   console.log("the file is ",req.files);
   if(!avatarLocalPath){
      throw new Apierror(400,"avatar image is required")
   }
   const avatar=await uploadToCloudinary(avatarLocalPath);
   const coverImage=await uploadToCloudinary(coverImageLocalPath);
   if(!avatar){
      throw new Apierror(400,"avatar image is required")
   }
   const user= await User.create({
      Username:Username.toLowerCase(),
      Email,
      FullName,
      avatar:avatar.url,
      coverImage:coverImage?.url || '',
      Password
   })
   const createdUser= await User.findById(user._id).select
   ( " -Password -refreshToken"
   )
   if(!createdUser){
      throw new Apierror(500,"something went wrong while registering the user");
   }
   return res.status(201).json(
      new Apires(200,createdUser,"User registered successfully")
   )
});
export {registerUser};