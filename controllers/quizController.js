
// get all questions
import Result from '../models/resultSchema.js'
import  Questions  from '../models/questionSchema.js'
import resultSchema from '../models/resultSchema.js';
import { User } from '../models/users.js';

export async function getQuestions(req, res) {
  const setNumbers = [1, 2, 3, 4]; // Available set numbers
  const randomSet = setNumbers[Math.floor(Math.random() * setNumbers.length)]; // Randomly select a set number
  try {
    const questions = await Questions.find({ set: randomSet });
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.message
    });
  }
}


//insert question
export async function insertQuestions(req,res){
    const newQuestion = new Questions({
        id: req.body.id,
        question: req.body.question,
        options: req.body.options,
        answer: req.body.answer,
        set: req.body.set 
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
//delete all quesitons
export async function deleteQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.status(200).json({ msg: "All questions deleted" });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.message
    });
  };
}

//delete questionsbyId
export async function deleteQuestionsbyId(req, res) {
  const id = req.params.id;
  try {
    const d = await Questions.deleteOne({ _id: id });
    res.status(200).json({ msg: "Question deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
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


//sets of question

// const QuestionModel = require('./questionModel');

// const numberOfQuestions = 10;

// Questions.aggregate([{$sample: {size: numberOfQuestions}}], (err, questions) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(questions);
//   }
// });

//post user result
export async function postResult(req,res){
  
  try {
        const user =await User.findOne({_id:req.body.userId});
        const newResult = new Result({
            userId: req.body.userId,
            result: req.body.result,
            points: req.body.points,
            profileImage:user.profileImage,
            username: user.userName
      
          });
        const savedResult = await newResult.save();
        res.status(200).json(savedResult);
        console.log(savedResult);
      } catch (err) {
        res.status(400).json({ message: err });
      }
    }


//delete  all result result
export async function deleteResult(req,res){
    try {
        const d = await Result.deleteMany();
     res.status(200).json({msg: " all result deleted"});
     } catch (error) {
        res.status(400).json(error)
     }
}

//delete result by id 
export async function deleteResultById(req, res) {
  const id = req.params.id;
  try {
    const d = await Result.deleteOne({ _id: id });
    res.status(200).json({ msg: "Result deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

//get leaderboard
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
  const id = req.params.id;
  try {
    const result = await Result.findOne({ _id: id });
    if (!result) {
      return res.status(404).json({ message: "Result not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}