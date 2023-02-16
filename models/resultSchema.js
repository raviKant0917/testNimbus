import mongoose from 'mongoose';
const {Schema} = mongoose;

const resultModel = new Schema({
    username: {type: String},
    result: { type:String, default:'how are you'},
    points:{type:Number, default:0},
    achieved: {type:String},
    createdAt: {type: Date,default: Date.now}
});

export default mongoose.model('Result', resultModel);