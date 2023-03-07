import mongoose from "mongoose";

const memberSchema= new mongoose.Schema({
    member_name:{
        type:String,
        required:true
        },
    team_name:{
        type:String,
        required:true
    },
    position:{
        type:String
    },
    image:{
        type:String
    }
})

const member_model=new mongoose.model("member",memberSchema);
export default member_model;