import mongoose from "mongoose";
import { event } from "../models/events.js";
import resultSchema from "../models/resultSchema.js";

export const getEvents = async (request, response) => {
  try {
    const events = await event.find();
    response.status(200).json(events);
  } catch (error) {
    response.status(500).send(error);
  }
};


export const postEvents = async (request, response) => {
  const eventToEnter = request.body;
  const newEvent = new event(eventToEnter);

  try {
    await newEvent.save();
    response.status(201).json({message:"event added",newEvent});
  } catch (error) {
    response.status(500).json(error);
  }
};

//delete events
export const deleteEvents = async (request, response) => {
  const id = request.params.id;
  try{
    const deletedEvent=await event.findByIdAndDelete(id);
    response.status(200).json({message:"event deleted",deletedEvent});

  }catch(e){
    console.log(e);
    response.status(500).json(e);
  }
}

//update events
export const updateEvents = async (request, response) => {
  const id = request.params.id;
  const update=request.body;
  try{
    const updatedEvent = await event.findByIdAndUpdate(id,update);
    response.status(200).json({message:"event updated",updateEvents});

  }catch(e){
    console.log(e);
    response.status(500).json(e);
  }
}