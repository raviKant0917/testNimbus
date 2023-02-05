import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import Connection from './database/db.js';
import Router from './routes/route.js';

mongoose.set('strictQuery', false);

const app=express();
const port=process.env.PORT||8080;

app.use(express.json())
app.use(cors())
app.use('/', Router);

Connection();
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})