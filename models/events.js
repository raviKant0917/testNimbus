import mongoose from "mongoose";

const eventSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    startDate:{
        type:Date
    },
    endDate:{
        type:Date
    },
    venue:{String},
    info:{
        type:String
    },
    image:{
        String
    },
    regUrl:{
        String
    },
    isWorkshop:{
        type:Boolean,
        default:false
    }
})

export const event=new mongoose.model("event",eventSchema);