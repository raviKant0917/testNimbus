import mongoose from "mongoose";

const eventSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date
    },
    venue:{
        type:String
    },
    info:{
        type:String
    },
    image:{
        type:String
    },
    regUrl:{
        type:String
    },
    isWorkshop:{
        type:Boolean,
        default:false
    }
})

export const event=new mongoose.model("event",eventSchema);