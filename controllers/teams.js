
import member_model from "../models/members.js";
import team_model from "../models/teams.js";


export const getMembers = async (request, response) => {
    try {
        // const{page=1,limit=5}=request.query;

        const members=await member_model.find();
        response.status(200).json(members);
       
    } catch (error) {
        response.status(500).send(error);
    }
}

export const getTeams = async (request, response) => {
    try {
        // const{page=1,limit=5}=request.query;
        const teams=await team_model.find();
        response.status(200).json(teams);
       
    } catch (error) {
        response.status(500).json(error);
    }
}

export const postMembers= async(request,response)=>{
    const {member_name,team_name,position,image}=request.body;
    try{
            const user=new member_model({
            member_name:member_name,
            team_name:team_name,
            position:position,
            image:image
        });
       await user.save(err=>{
            if(err){

                response.send(err)
            }else{
                response.status(200).send({message:"member added"})
            }
        })


    }catch(e){
        response.status(500).send(e);
    }
}

export const postTeams= async(request,response)=>{
    const {team_name,image}=request.body;
    try{
            const team=new team_model({
            team_name:team_name,
            image:image
        });
       await team.save(err=>{
            if(err){

                response.send(err)
            }else{
                response.status(200).send({message:"team added"})
            }
        })


    }catch(e){
        response.status(500).send(e);
    }
}
