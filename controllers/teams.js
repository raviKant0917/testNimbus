import mongoose from "mongoose";
import member_model from "../models/members.js";
import team_model from "../models/teams.js";

// import { ObjectId } from 'mongodb';
import { ObjectId } from "bson";
import resultSchema from "../models/resultSchema.js";

export const getMembers = async (request, response) => {
  try {
    // const{page=1,limit=5}=request.query;

    const members = await member_model.find();
    response.status(200).json(members);
  } catch (error) {
    console.log(error);
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
  const teamId = member.teamId;
  try {
    const team = await team_model.findById(teamId);
    console.log(team);
    const user = new member_model({
      member_name: member.member_name,
      team_name: team.team_name,
      teamId: teamId,
      position: member.position,
      year: member.year,
      image: member.image,
      instagram: member.instagram,
      github: member.github,
      linkedin: member.linkedin
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
  // const { team_name, image } = request.body;
  try {
    const team = new team_model(request.body);
    await team.save((err) => {
      if (err) {
        console.log(err);
        response.send(err);
      } else {
        response.status(200).send({ message: "team added" });
      }
    });
  } catch (e) {
    console.log(e);
    response.status(500).send(e);
  }
};

export const getTeamMembers = async (req, res) => {
  const id = req.params.id;
  
  let year = Number(req.query.year)||0;

  //   const objectId = new ObjectId(id);

  try {
    if(year==0){
      const teamMembers = await member_model.find({teamId:id});
      res.status(200).json(teamMembers);
    }else{
      
    const teamMembers = await member_model.find({ teamId: id,year:year });
    res.status(200).json(teamMembers);
    }
    
    
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

export const updateMember = async (req, res) => {
  const change = req.body;
  const id = req.params.id;
  try {
    const updatedMember = await member_model.findByIdAndUpdate(id, change, {
      new: true,
      upsert:true
    });
    res.status(200).json(updatedMember);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

export const updateTeam = async (req, res) => {
  const change = req.body;
  const id = req.params.teamId;
  try {
    const updatedTeam = await team_model.findByIdAndUpdate(id, change, {
      new: true,
      upsert:true
    });
    res.status(200).json({message:"team updated",updatedTeam});
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

export const deleteMember=async(req,res)=>{
  const memberId=req.params.id;
  try{
    const deletedMember=await member_model.findByIdAndDelete(memberId);
    res.status(200).json({message:"member deleted",deletedMember});
  }catch(e){
    console.log(e);
    res.status(500).json(e);
  }
}

export const deleteTeam=async(req,res)=>{
  const teamId=req.params.teamId;
  try{
    const deletedTeam=await team_model.findByIdAndDelete(teamId);
    res.status(200).json({message:"team deleted",deletedTeam});
  }catch(e){
    console.log(e);
    res.status(500).json(e);
  }
}