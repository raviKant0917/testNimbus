import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    photo:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
});

const commentSchema=new mongoose.Schema({
    
})

const Postmodel=mongoose.model('PostMessage',postSchema);
export default Postmodel;