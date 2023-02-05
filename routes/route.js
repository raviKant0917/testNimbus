import express from 'express';
import { getUsers,postUsers,patchUser, deleteUser,getUsersByName,getUserById} from '../controllers/User-controller.js';
import { getPost,createPost,updatePost,deletePost,likePost } from '../controllers/post.js';

const router =express.Router(); 

router.get("/users/:id",getUserById);
router.get("/users/search/:key",getUsersByName);

router.post("/users",postUsers);

router.patch("/users/:id",patchUser);
router.delete("/users/:id",deleteUser);

router.post("/posts",createPost);
router.get("/posts",getPost);
router.patch("/posts/:id",updatePost);
router.delete("posts/:id",deletePost);
router.patch("/posts/:id/like",likePost);

export default router;