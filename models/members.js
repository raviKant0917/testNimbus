import mongoose from "mongoose";
import { model,Schema } from 'mongoose';

// import { ObjectId } from "mongoose";
// import {team_model} from "./teams.js";



const memberSchema = new mongoose.Schema({
  member_name: {
    type: String,
    required: true,
  },
  team_name: {
    type: String,
  },
  teamId: {
    type:String
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'team_model'
  },
  position: {
    type: String,
  },
  year:{
    type:Number
  },
  image: {
    type: String,
  },
  instagram:{
    type:String
  },
  github:{
    type:String
  },
  linkedin:{
    type:String
    
  }
});

const member_model = new mongoose.model("member", memberSchema);

export default member_model;
