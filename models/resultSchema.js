import mongoose from 'mongoose';
const {Schema} = mongoose;

const resultModel = new Schema({
    userId: {type: String,required: true},
    username:{type : String},
    result: { type:String, default:'how are you',required: true},
    points:{type:Number, default:0,required: true},
    time: {type:String},
    profileImage: { type: String},
    username:{type:String},
    createdAt: {type: Date,default: Date.now}
});

export default mongoose.model('Result', resultModel);