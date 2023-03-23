import express from 'express';
import { getUsers,postUsers,patchUser, deleteUser,getUsersByName,getUserByFirebaseId,checkIfUserExist} from '../controllers/User-controller.js';
import { getPost,createPost,updatePost,deletePost,likePost,addComment,deleteComment,getAPost,getPotd,getPostsOfUser } from '../controllers/post.js';
import { getMembers,getTeams,postMembers,postTeams,getTeamMembers ,updateMember,updateTeam} from '../controllers/teams.js';
import { getEvents,postEvents } from '../controllers/eventControllers.js';
import * as controller from '../controllers/quizController.js'
import { getRoomByRoomId, getRooms,joinRoom, leaveRoom} from '../controllers/omegle.js';


const router =express.Router(); 

//users
router.get("/users/:firebaseid",getUserByFirebaseId);
router.get("/users/search/:key",getUsersByName);
router.get('/users',getUsers);
router.get('/users/exist/:email',checkIfUserExist);
router.post("/users",postUsers);
router.patch("/users/:id",patchUser);
router.delete("/users/:id",deleteUser);

//omegle
router.get("/room",getRooms);
router.post("/room/:userId",joinRoom);
router.get("/room/:roomId",getRoomByRoomId);
router.post("/room/leave/:userId",leaveRoom);

//posts
router.post("/posts",createPost);
router.get("/posts",getPost);
router.get("/posts/:postId",getAPost);
router.patch("/posts/:id",updatePost);
router.delete("/posts/:id",deletePost);
router.put("/posts/:id/like",likePost);
router.put("/posts/:id/comment",addComment);
router.put("/posts/:id/comment/:commentId",deleteComment);
router.get("/:userId/posts", getPostsOfUser); 
router.get("/potd",getPotd); //Potd=post of the day

//teams and members
router.get("/teams",getTeams);
router.get("/teams/:id",getTeamMembers);
router.post("/teams",postTeams);
router.patch("/teams/:teamId",updateTeam);

router.get("/members",getMembers);
router.post("/members",postMembers);
router.patch("/members/:id",updateMember);

//events 
router.get("/events",getEvents);
router.post("/events",postEvents);


router.route('/questions')
.get(controller.getQuestions)  //get request
.post(controller.insertQuestions) //post request
.delete(controller.deleteQuestions) //delete requestt

router.route('/result')
   .get(controller.getLeaderboard)
   .post(controller.postResult)
   .delete(controller.deleteResult)

router.route('/result/:id')
   .get(controller.getResultById)
   
export default router;