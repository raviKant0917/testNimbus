import mongoose from "mongoose";

const teamSchema= new mongoose.Schema({
    team_name:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String
    },
    secretary:{
        type:String
    },
    convenor:{
        type:String
    },
    instagram:{
        type:String
    },
    linkedIn:{
        type:String
    },
    priority:{
        type:Number
    }
})

const team_model=new mongoose.model("team",teamSchema);

export default team_model;
