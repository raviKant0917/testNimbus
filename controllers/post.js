import Postmodel from "../models/post.js";
import router from "../routes/route.js";


export const getPost=async (req,res)=>{
    try{
        const postMessages=await Postmodel.find()
        // console.log(postMessages);
        res.status(200).json(postMessages);


    }catch(e){
        res.status(404).json({message:e.message})
    }
}

export const createPost=async(req,res)=>{
    const post=req.body;
    const newPost =new Postmodel(post);
    try{
          await newPost.save();
          res.status(201).json(newPost);

    }catch(e){
        res.status(500).json({message:e.message})

    }

}

export const updatePost=async(req,res)=>{
    const id=req.params
    // const post=await Postmodel.findById(id);
    const post=req.body;
    
    try{

       const updatedPost=await Postmodel.findByIdAndUpdate(
            {_id:id},
            post,
            {new:true}
        )

        
      res.status(200).json(updatePost);

    }catch(e){
        res.status(404).json({message:e.message})

    }

}

export const deletePost=async(req,res)=>{
    const id=req.params.id;
    
    try{
          await Postmodel.findByIdAndDelete(id);
          res.status(201).json({message:'post deleted'});

    }catch(e){
        res.status(500).json({message:e.message})

    }

}

export const likePost=async(req,res)=>{
    const id=req.params.id;
    const post=Postmodel.findById(id);
    
    try{
          const updatedPost=Postmodel.findByIdAndUpdate(
            {_id:id},
            {likeCount:post.likeCount+1}
          )
          res.status(201).json(newPost);

    }catch(e){
        res.status(500).json({message:e.message})

    }

}


