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
  const event = req.body;
  const newEvent = new event(event);

  try {
    await newPost.save();
    res.status(201).json(newEvent);
  } catch (error) {
    response.status(500).json(error);
  }
};