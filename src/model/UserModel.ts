import mongoose from "mongoose";

interface user {
  name: string;
  email: string;
  password: string;
  phoneNum: number;
  address: string;
}

interface Iuser extends user, mongoose.Document {}

const userSchema = new mongoose.Schema<user>({
  name: {
    type: String,
    required: [true, "please enter your name"],
  },
  email: {
    type: String,
    required: [true, "please enter your email"],
  },
  password: {
    type: String,
    required: [true, "please enter your email"],
  },
  phoneNum: {
    type: Number,
    required: [true, "please enter your number"],
  },
  address: {
    type: String,
  },
});


const UserModel = mongoose.model<Iuser>("AllUsers" , userSchema)

export default UserModel