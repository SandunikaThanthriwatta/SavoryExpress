import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const dbConnection=()=>{
    console.log('Mongo URI:', process.env.MONGO_URI);
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('connected to MongoDB!');
    })
    .catch((err)=>{
        console.log(err);
    });

};