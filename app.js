import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import Connection from './Database/db.js';
import Router from './routes/route.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
const options = {
    definition:{
        openai: "3.0.0",
        info:{
            title: "Nimbus Backend",
            version: "1.0.0",
            description: "Nimbus backend api"
        },
        servers: [
            {
                url: "http://localhost:8080",
                
            },
        ],
    },
    apis: ["./controllers/*.js"],
}

const specs = swaggerJSDoc(options)


mongoose.set('strictQuery', false);

const app=express();
const port=process.env.PORT||8080;

app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(specs));
app.use(express.json())
app.use(cors())
app.use('/', Router);

app.all("*",(req,res,next)=>{
    res.status(404).json({
        status: "failed",
        message: `Can't find this ${req.originalUrl} on this server!`
    })
})

// app.use((err, req, res, next)=>{
//     err.statusCode = err.statusCode || 500;
//     res.status = err.status || 'error!';
    
// })

Connection();
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})