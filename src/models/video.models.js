import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema =new Schema({
    videoFile:{
        type:String,//cloudinary video url
        required:[true,'Video file is required']
    },
    MoviePoster:{
        type:String,//cloudinary image url
        required:true
    },
    MovieTitle:{
        type:String,
        required:true
    },
    MovieDescription:{
        type:String,
        required:true
    },
    duration:{
        type:Number,//cloudinary video duration
        required:true
    },
    
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    category:{
        type:string,
        required:true
    },
    releasedYear:{
        type:number,
        required:true

    },
    ratingIMDB:{
        type:number,
        required:true
    },
    ratingRottenTomatoes:{
        type:number,
        required:true
    },
    ratingLetterboxd:{
        type:number,
        required:true
    },
    genre:{
        type:[],
        required:true
    },
    priceBuy:{
        type:number,
        required:true
    },
    priceRent:{
        type:number,
        required:true
    }
}, {timestamps: true});
videoSchema.plugin(mongooseAggregatePaginate);
export const Video=mongoose.model('Video',videoSchema);