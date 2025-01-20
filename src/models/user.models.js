import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new Schema({
    Username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
        lowercase: true,
        index: true
    },
    Email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true
    },
    FullName: {
        type: String,
        required: [true, 'Full name is required'],
        trim: true,
        index: true
    },
    avatar: { 
        type: String,//cloudinary image url
        required:[true,'Avatar is required']
    },
    coverImage: { 
        type: String//cloudinary image url
        
    },
    watchHistory:[ {
        type: Schema.Types.ObjectId,
        ref: 'video'
    }],
    Password: {
        type: String,
        required: [true, 'Password is required'],
    },
    refreshToken: {
        type: String
    }
},{timestamps:true});
userSchema.pre("save",async function(next){
    if(!this.isModified('Password')) return next();
        this.password=await bcrypt.hash(this.password,10);
        next();  
})
userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password);
}
userSchema.methods.generateAccessToken=function(){
    return jwt.sign({
        id:this._id,
        Email:this.Email,
        Username:this.Username},
        process.env.JWT_SECRET,
        {expiresIn:process.env.JWT_EXPIRATION});
}
userSchema.methods.generateRefreshToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_REFRESH_SECRET,{expiresIn:process.env.JWT_REFRESH_EXPIRATION});
}
export const User=mongoose.model('User',userSchema);
