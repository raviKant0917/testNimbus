import mongoose from "mongoose";
import { event } from "../models/events.js";

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