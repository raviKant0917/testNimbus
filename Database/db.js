import mongoose from "mongoose";

const DB = "mongodb+srv://ravi:nimbus2k23@cluster0.ahvyxrx.mongodb.net/?retryWrites=true&w=majority"
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

export const Connection = async () => {
    try {
        await mongoose.connect(DB,connectionParams);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};
