import mongoose from "mongoose";



const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

const Connection = async (username,password) => {

    const DB = `mongodb+srv://${username}:${password}@cluster0.ahvyxrx.mongodb.net/?retryWrites=true&w=majority`
    
    try {
        await mongoose.connect(DB,connectionParams);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
