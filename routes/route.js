import express from 'express';
import { getUsers,postUsers,patchUser, deleteUser,getUsersByName,getUserById} from '../controllers/User-controller.js';
import { getPost,createPost,updatePost,deletePost,likePost } from '../controllers/post.js';
import * as controller from '../controllers/quizController.js'


const router =express.Router(); 

router.get("/users/:id",getUserById);
router.get("/users/search/:key",getUsersByName);
router.get('/users',getUsers);

router.post("/users",postUsers);

router.patch("/users/:id",patchUser);
router.delete("/users/:id",deleteUser);

router.post("/posts",createPost);
router.get("/posts",getPost);
router.patch("/posts/:id",updatePost);
router.delete("posts/:id",deletePost);
router.patch("/posts/:id/like",likePost);

router.route('/questions')
.get(controller.getQuestions)  //get request
.post(controller.insertQuestions) //post request
.delete(controller.deleteQuestions) //delete request

router.route('/result')
   .get(controller.getResult)
   .post(controller.postResult)
   .delete(controller.deleteResult)

export default router;