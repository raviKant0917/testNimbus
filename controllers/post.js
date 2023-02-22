import Postmodel from "../models/post.js";
import router from "../routes/route.js";
// import { MongoClient, ObjectId } from "mongodb";

//getting all posts
export const getPost = async (req, res) => {
  try {
    const postMessages = await Postmodel.find().populate('creator').populate({
      path: 'comments',
      populate: {
        path: 'postedBy'
      }
    })
    // console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

//creating a post
export const createPost = async (req, res) => {
  const post = req.body;
  // const isliked=post.likes.includes(post.user)
  // post.likedByMe=isliked;
  const newPost = new Postmodel(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

// updating a post
export const updatePost = async (req, res) => {
  const id = req.params;
  // const post=await Postmodel.findById(id);
  const post = req.body;

  try {
    const updatedPost = await Postmodel.findByIdAndUpdate({ _id: id }, post, {
      new: true,
    });

    res.status(200).json(updatePost);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;

  try {
    await Postmodel.findByIdAndDelete(id);
    res.status(201).json({ message: "post deleted" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

//like and unlike a particular post
export const likePost = async (req, res) => {
  const id = req.params.id;
  const user = req.body.id;

  const post = await Postmodel.findById(id);
  if (!post) {
    res.status(501).json({ message: "post not found" });
  } else {
    // console.log(post);

    try {
      const liked = post.likes.includes(user);

      if (liked) {
        await Postmodel.findByIdAndUpdate(
          id,
          { $pull: { likes: user },likeCount:post.likeCount-1 },
          {
            new: true,
          }
        );
        res.status(200).json({ message: "Post unliked" });
      } else {
        await Postmodel.findByIdAndUpdate(
          id,
          { $push: { likes: req.body.id },likeCount:post.likeCount+1 },
          {
            new: true,
          }
        );
        res.status(200).json({ message: "Post liked" });
      }
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
};

// adding a comment 
export const addComment = async (req, res) => {
  const id = req.params.id;
  const post = await Postmodel.findById(id);
  if(!post){
    res.status(500).json({message:"post not found"})
  }else{
  const comment = {
    text: req.body.text,
    postedBy:req.body.userId

  };
  try {
    await Postmodel.findByIdAndUpdate(
      id,
      {
        $push: {
          comments: comment,
        },
        commentCount:post.commentCount+1
      },
      {
        new: true,
      }
    );

    res.status(201).json({ message: "comment added" });
  } catch (e) {
    console.log(e);
    res.status(501).json(e);
  }
}
};



