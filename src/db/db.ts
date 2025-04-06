import mongoose from "mongoose";

export const connectDB = async ()=>{
    console.log(process.env.MONGO_DB_URI);
    
    return mongoose.connect(process.env.MONGO_DB_URI as string)
}