import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        const connectionInstances = await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`)
        console.log(`✅ MongoDB connected Succesfully !! DB host: ${connectionInstances.connection.host}`); 
    } catch (error) {
        console.log("❌ Mongo DB Connection Error",error);
        process.exit(1)
    }
}

export default connectDB;