
// get all questions
import Result from '../models/resultSchema.js'
import  Questions  from '../models/questionSchema.js'



export async function getQuestions(req,res){
     try {
        const q = await Questions.find();
        res.json(q) 
     } catch (error) {
        res.json(error);
     };
    
}

//insert question
export async function insertQuestions(req,res){
    const newQuestion = new Questions({
        id: req.body.id,
        question: req.body.question,
        options: req.body.options
      });
    
      try {
        const savedQuestion = await newQuestion.save();
        res.json(savedQuestion);
      } catch (err) {
        res.status(400).json({ message: err });
      }
    }


//delete questions

export async function deleteQuestions(req,res){
 try {
    const d = await Questions.deleteMany();
 res.json({msg: "question deleted"});
 } catch (error) {
    re.json(error)
 }

}

//get all result

export async function getResult(req,res){
 
    const r = await Result.find();
    res.json(r);
    
}

//post result
// username: {type: String},
// result: { type:String, default:'how are you'},
// points:{type:Number, default:0},
// achieved: {type:String},
// createdAt: {type: Date,default: Date.now}
export async function postResult(req,res){
    const newQuestion = new Result({
        username: req.body.username,
    result: req.body.result,
    points: req.body.points,

      });
    
      try {
        const savedQuestion = await newQuestion.save();
        res.json(savedQuestion);
      } catch (err) {
        res.status(400).json({ message: err });
      }
    }


//delete result

export async function deleteResult(req,res){
    try {
        const d = await Result.deleteMany();
     res.json({msg: "result deleted"});
     } catch (error) {
        re.json(error)
     }
    
}