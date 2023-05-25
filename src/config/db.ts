import mongoose from "mongoose";

const DB_URL = "mongodb://0.0.0.0:27017/forEben";


const dbConfig = async (): Promise<void> => {
    try {
      const conn = await mongoose.connect(DB_URL);
      console.log(`connected to database on port ${conn.connection.host}`);
    } catch (error) {
      console.log(`failed to connect to database` , error);
    }
  };
  
  export default dbConfig;
