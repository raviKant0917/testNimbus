import mongoose, { mongo } from 'mongoose';
const { Schema } = mongoose;
//  import { max,min } from 'mongoose-validator';


 const QuestionModel = new Schema({
    id: {
        type: Number,
        required: true
      },
      question: {
        type: String,
        required: true,
        default:'what is your name'
      },
      set:{
        type:Number,
        required: true
      },
      options: [{
        type: String,
        required: true
      }],
      answer: {
        type: Number,
        required: true
      }
 });

export default mongoose.model('Question', QuestionModel);