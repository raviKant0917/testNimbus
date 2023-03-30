import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  user1Id: {
    type: String,
    required: true
  },
  user2Id: {
    type: String,
  },
  status: { //true = room empty , false = room filled by one or two users
    type: String,
    enum: ['filled','oneUser']
  }
},{timestamps: true});

export const Room = mongoose.model('Room',roomSchema);