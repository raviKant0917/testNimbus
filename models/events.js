import mongoose from "mongoose";

const eventSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    startDate:Date,
    endDate:Date,
    venue:String,
    info:{
        type:String
    },
    image:{
        String
    },
    regUrl:{
        String
    }
})

export const event=new mongoose.model("event",eventSchema);