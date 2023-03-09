import mongoose from "mongoose";

const teamSchema= new mongoose.Schema({
    team_name:{
        type:String,
        required:true,
        unique:true
    },
    image:String
})

const team_model=new mongoose.model("team",teamSchema);

export default team_model;