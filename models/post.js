import mongoose from "mongoose";
const Schema = mongoose.Schema
import { User } from "./users.js";
const postSchema=new mongoose.Schema({
    caption:String,
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    photo:String,
    isVideo:{
        type:Boolean,
        default:false
    },
    likeCount:{
        type:Number,
        default:0
    },
    likedbyMe:{
        type:Boolean,
        default: false
    },
    likes:[{type:String,ref:"User"}],
    comments:[{
        text:String,
        postedBy:{ type: Schema.Types.ObjectId, ref: 'User' }
    }],
    commentCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
});



const Postmodel=mongoose.model('PostMessage',postSchema);
export default Postmodel;