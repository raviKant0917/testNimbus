import mongoose from 'mongoose';
const {Schema} = mongoose;

const resultModel = new Schema({
    username: {type: String,required: true},
    result: { type:String, default:'how are you',required: true},
    points:{type:Number, default:0,required: true},
    achieved: {type:String},
    createdAt: {type: Date,default: Date.now}
});

export default mongoose.model('Result', resultModel);