import mongoose from "mongoose";
import colors from 'colors';

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDb ${conn.connection.host}`.bgBlack.yellow);
    }catch(error) {
        console.log(`Error in Mongodb ${error}`.bgRed.white)
    }
}

export default connectDB;