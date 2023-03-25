import Postmodel from "../models/post.js";
import router from "../routes/route.js";
// import { MongoClient, ObjectId } from "mongodb";

//getting all posts
export const getPost = async (req, res) => {
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 5;
  const total = await Postmodel.find().count();
  // console.log(total)
  let totalPages;
  if (total % limit == 0) {
    totalPages = total / limit;
  } else {
    totalPages = Math.floor(total / limit) + 1;
  }
  if (page > totalPages) {
    page = totalPages;
  }
  let skip = (page - 1) * limit;

  try {
    const postMessages = await Postmodel.find()
      .sort({ createdAt: -1 })
      .populate("creator")
      .populate({
        path: "comments",
        populate: {
          path: "postedBy",
        },
      })
      .skip(skip)
      .limit(limit);

    // res.status(200).json({postMessages,totalpages:totalPages,page:page});
    res
      .status(200)
      .json({ totalPages: totalPages, currentPage: page, postMessages });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

//getting a specific post by id
export const getAPost = async (req, res) => {
  const id = req.params.postId;
  try {
    const postMessages = await Postmodel.findById(id)
      .populate("creator")
      .populate({
        path: "comments",
        populate: {
          path: "postedBy",
        },
      });
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
  const id = req.params.id;
  // const post=await Postmodel.findById(id);
  const post = req.body;

  try {
    const updatedPost = await Postmodel.findByIdAndUpdate(id, post, {
      new: true,
    });

    res.status(200).json({ message: "post updated", updatedPost });
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
          { $pull: { likes: user }, likeCount: post.likeCount - 1 },
          {
            new: true,
          }
        );
        res.status(200).json({ message: "Post unliked" });
      } else {
        await Postmodel.findByIdAndUpdate(
          id,
          { $push: { likes: req.body.id }, likeCount: post.likeCount + 1 },
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
  if (!post) {
    res.status(500).json({ message: "post not found" });
  } else {
    const comment = {
      text: req.body.text,
      postedBy: req.body.userId,
    };
    try {
      await Postmodel.findByIdAndUpdate(
        id,
        {
          $push: {
            comments: comment,
          },
          commentCount: post.commentCount + 1,
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

//deleting a comment

export const deleteComment = async (req, res) => {
  const id = req.params.id;
  const post = await Postmodel.findById(id);
  const comment = req.params.commentId;
  if (!post) {
    res.status(500).json({ message: "post not found" });
  } else {
    try {
      await Postmodel.findByIdAndUpdate(
        id,
        {
          $pull: {
            comments: { _id: comment },
          },
          commentCount: post.commentCount - 1,
        },
        {
          new: true,
        }
      );

      res.status(201).json({ message: "comment deleted" });
    } catch (e) {
      console.log(e);
      res.status(501).json(e);
    }
  }
};

export const getPotd = async (req, res) => {
  // console.log("potd working")
  // res.json({message:"potd"})
  const now = new Date(); // get the current date and time
  const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000); // calculate the date and time 24 hours ago
  const posts = await Postmodel.find({
    createdAt: { $gte: twentyFourHoursAgo, $lte: now },
  });
  console.log(posts);
  if (!posts) {
    res.status(200).json({ message: "no potd" });
  }
  var finalValue = 0;
  var potd = {};
  posts.map((post) => {
    const val = post.likeCount + post.commentCount;
    if (val >= finalValue) {
      finalValue = val;
      potd = post;
    }
  });
  res.status(200).json(potd);
};

//get all Posts of a particular user
export const getPostsOfUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const posts = await Postmodel.find({ creator: userId })
      .populate("creator")
      .populate({
        path: "comments",
        populate: {
          path: "postedBy",
        },
      })
      .sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

// getting leaderboard of all posts

export const getLeaderboardofPosts = async (req, res) => {
  const now = new Date();
  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  try {
    const posts = await Postmodel.aggregate([
      { $match: { createdAt: { $gte: yesterday, $lte: now } } },
      {
        $addFields: {
          total_likes_and_comments: { $add: ["$likeCount", "$commentCount"] },
        },
      },
      { $sort: { total_likes_and_comments: -1 } },
      { $limit: 10 },
      {
        $lookup: {
          from: "users",
          localField: "creator",
          foreignField: "_id",
          as: "creator",
        },
      },
      {
        $unwind: "$creator",
      },
      {
        $lookup: {
          from: "users",
          localField: "comments.postedBy",
          foreignField: "_id",
          as: "comments.postedBy",
        },
      },
      {
        $unwind: "$comments.postedBy",
      },
      {
        $project: {
          _id: 1,
          caption: 1,
          photo: 1,
          isVideo: 1,
          likeCount: 1,
          likedbyMe: 1,
          likes: 1,
          comments: {
            _id: 1,
            text: 1,
            postedBy: {
              _id: "$comments.postedBy._id",
              fullName: "$comments.postedBy.fullName",
              profileImage: "$comments.postedBy.profileImage",
            },
          },
          commentCount: 1,
          createdAt: 1,
          creator: {
            _id: "$comments.postedBy._id",
            fullName: "$comments.postedBy.fullName",
            profileImage: "$comments.postedBy.profileImage",
          },
          total_likes_and_comments: 1,
        },
      },
    ]);

    if (!posts) {
      res.status(200).json({ message: "no posts found" });
    } else {
      console.log(posts);
      res.status(200).json(posts);
    }
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

////////////

// const Post = mongoose.model('Post', new mongoose.Schema({
//   caption: String,
//   creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   photo: String,
//   isVideo: {
//     type: Boolean,
//     default: false
//   },
//   likeCount: {
//     type: Number,
//     default: 0
//   },
//   likedbyMe: {
//     type: Boolean,
//     default: false
//   },
//   likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
//   comments: [{
//     text: String,
//     postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
//   }],
//   commentCount: {
//     type: Number,
//     default: 0
//   },
//   createdAt: {
//     type: Date,
//     default: new Date()
//   }
// }));

// const User = mongoose.model('User', new mongoose.Schema({
//   name: String,
//   email: String
// }));

// const now = new Date();
// const yesterday = new Date(now.getTime() - (24 * 60 * 60 * 1000));

// Post.aggregate([
//   { $match: { createdAt: { $gte: yesterday, $lte: now } } },
//   {
//     $addFields: {
//       total_likes_and_comments: { $add: ["$likeCount", "$commentCount"] }
//     }
//   },
//   { $sort: { total_likes_and_comments: -1 } },
//   { $limit: 10 },
//   {
//     $lookup: {
//       from: 'users',
//       localField: 'creator',
//       foreignField: '_id',
//       as: 'creator'
//     }
//   },
//   {
//     $unwind: '$creator'
//   },
//   {
//     $lookup: {
//       from: 'users',
//       localField: 'comments.postedBy',
//       foreignField: '_id',
//       as: 'comments.postedBy'
//     }
//   },
//   {
//     $unwind: '$comments.postedBy'
//   },
//   {
//     $project: {
//       _id: 1,
//       caption: 1,
//       photo: 1,
//       isVideo: 1,
//       likeCount: 1,
//       likedbyMe: 1,
//       likes: 1,
//       comments: {
//         _id: 1,
//         text: 1,
//         postedBy: { _id: '$comments.postedBy._id',fullName: '$comments.postedBy.fullName',profileImage:'$comments.postedBy.profileImage'  }
//       },
//       commentCount: 1,
//       createdAt: 1,
//       creator:  { _id: '$comments.postedBy._id',fullName: '$comments.postedBy.fullName',profileImage:'$comments.postedBy.profileImage'  },
//       total_likes_and_comments: 1
//     }
//   }
// ])
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.error(error);
//   });
