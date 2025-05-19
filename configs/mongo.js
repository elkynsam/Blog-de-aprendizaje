'use strict'

import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        mongoose.connection.on('error', ()=>{
            console.log("MongoDB | Could not be connected to MongoDB");
            mongoose.disconnect();
        });
        mongoose.connection.on('connecting', ()=>{
            console.log("MongoDB | Try Connection");
        });
        mongoose.connection.on('connected', ()=>{
            console.log("MongoDB | Connected To MongoDB");
        });
        mongoose.connection.on('open', ()=>{
            console.log("MongoDB | Connected To Data Base");
        });
        mongoose.connection.on('reconnected', ()=>{
            console.log("MongoDB | Reconnected To MongoDB");
        });
        mongoose.connection.on('disconnected', ()=>{
            console.log("MongoDB | Disconnected");
        });

        const uri = process.env.MONGO_URI; 
        if (!uri) throw new Error('MONGO_URI is not defined in your .env file');

        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 5000,
            maxPoolSize: 50,
        });
    } catch (error) {
        console.log("Data Base Connection Failed", error);
    }
}