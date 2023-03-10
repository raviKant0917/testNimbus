import mongoose from "mongoose";
import member_model from "../models/members.js";
import team_model from "../models/teams.js";

// import { ObjectId } from 'mongodb';
import { ObjectId } from "bson";

export const getMembers = async (request, response) => {
  try {
    // const{page=1,limit=5}=request.query;

    const members = await member_model.find();
    response.status(200).json(members);
  } catch (error) {
    console.log(error)
    response.status(500).send(error);
   
  }
};

export const getTeams = async (request, response) => {
  try {
    // const{page=1,limit=5}=request.query;
    const teams = await team_model.find();
    response.status(200).json(teams);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const postMembers = async (request, response) => {
  const member = request.body;
  const teamId=member.teamId;
  try {
    const team=await team_model.findById(teamId);
    console.log(team);
    const user = new member_model({
        member_name:member.member_name,
        team_name:team.team_name,
        teamId:teamId,
        position:member.position,
        image:member.image
    });
    
    await user.save((err) => {
      if (err) {
        response.send(err);
      } else {
        response.status(200).send({ message: "member added", user });
      }
    });
  } catch (e) {
    response.status(500).send(e);
  }
};

export const postTeams = async (request, response) => {
  const { team_name, image } = request.body;
  try {
    const team = new team_model({
      team_name: team_name,
      image: image,
    });
    await team.save((err) => {
      if (err) {
        response.send(err);
      } else {
        response.status(200).send({ message: "team added" });
      }
    });
  } catch (e) {
    response.status(500).send(e);
  }
};

export const getTeamMembers = async (req, res) => {
  const id = req.params.id;
//   const objectId = new ObjectId(id);

  try {

    const teamMembers = await member_model
      .find({teamId:id})
    //   .populate('teamId');
    res.status(200).json(teamMembers);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};
