import mongoose from "mongoose";

interface user {
  name: string;
  email: string;
  occupation: string;
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
  occupation: {
    type: String,
    required: [true, "please enter your email"],
  },
  phoneNum: {
    type: Number,
    required: [true, "please enter your number"],
  },
  address: {
    type: String,
      required: [true, "please enter your address"],
  },
});


const UserModel = mongoose.model<Iuser>("AllUsers" , userSchema)

export default UserModel