import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema.Types
const postSchema=new mongoose.Schema({
    title:String,
    description:String,
    creator:String,
    photo:String,
    likeCount:{
        type:Number,
        default:0
    },
    likes:[{type:String,ref:"User"}],
    comments:[{
        text:String,
        postedBy:{type:String,ref:"User"}
    }],
    createdAt:{
        type:Date,
        default:new Date()
    }
});



const Postmodel=mongoose.model('PostMessage',postSchema);
export default Postmodel;