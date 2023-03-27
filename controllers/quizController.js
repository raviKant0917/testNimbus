
// get all questions
import Result from '../models/resultSchema.js'
import  Questions  from '../models/questionSchema.js'
import resultSchema from '../models/resultSchema.js';
import { User } from '../models/users.js';

export async function getQuestions(req,res){
     try {
        const q = await Questions.find();
        res.status(202).json(q) 
     } catch (error) {
        res.status(500).json({
          status: 'failed',
          message: error.message
        })
     };
    
}

//insert question
export async function insertQuestions(req,res){
    const newQuestion = new Questions({
        id: req.body.id,
        question: req.body.question,
        options: req.body.options,
        answer: req.body.answer
      });
    
      try {
        const savedQuestion = await newQuestion.save();
        res.status(200).json({
          success: true,
          result: savedQuestion
        });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }


//delete questions

export async function deleteQuestions(req,res){
 try {
    const d = await Questions.deleteMany();
 res.status(200).json({msg: "question deleted"});
 } catch (error) {
    res.json(error)
 }

}

//get all result

export async function getResult(req,res){
 
    try {
      const r = await Result.find();
    res.json(r);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      })
    }
    
}

//post user result
export async function postResult(req,res){
  
  try {
        const user =await User.findOne({_id:req.body.userId});
        const newQuestion = new Result({
            userId: req.body.userId,
            result: req.body.result,
            points: req.body.points,
            profileImage:user.profileImage,
            username:user.userName
      
          });
        const savedQuestion = await newQuestion.save();
        res.status(200).json(savedQuestion);
        console.log(savedQuestion);
      } catch (err) {
        res.status(400).json({ message: err });
      }
    }


//delete result

export async function deleteResult(req,res){
    try {
        const d = await Result.deleteMany();
     res.status(200).json({msg: "result deleted"});
     } catch (error) {
        res.status(400).json(error)
     }
}

export async function getLeaderboard(req,res){
  try {
    const leaderboard = await Result.find({}).sort({points: -1});
    console.log(leaderboard);
    res.status(200).json({
      body:leaderboard
    })
  } catch (err) {
    res.status(500).json({
      success: 'failed',
      message: "Something went wrong!"
    })    
  }
}

export async function getResultById(req,res){
  const userId = req.params.id
}