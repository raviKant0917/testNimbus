
// get all questions
import Result from '../models/resultSchema.js'
import  Questions  from '../models/questionSchema.js'



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
    const newQuestion = new Result({
        username: req.body.username,
        result: req.body.result,
        points: req.body.points,

      });
    
      try {
        const savedQuestion = await newQuestion.save();
        res.status(200).json(savedQuestion);
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
export async function leaderBoard(req,res){
  try {
    const result = await Result.find({}).sort({points: -1});
    res.status(200).json({
      success: "true",
      result: result
    })
  } catch (err) {
    res.status(500).json({
      success: "failed",
      message: "something went wrong!"
    })    
  }
}

export async function getResultById(req,res){
  const id = req.params.id;
  try {
    const result = await Result.find({_id: id});
    res.status(200).json({
      success: "true",
      result: result
    })
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      success: "failed",
      message: "something went wrong!"
    })    
  }
}