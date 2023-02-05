import mongoose from "mongoose";

const DB='mongodb://0.0.0.0:27017/nimbus-backend';

const Connection = async () => {
    
    try {
        await mongoose.connect(DB);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
