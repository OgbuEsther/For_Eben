import mongoose from "mongoose";

interface user {
  fullName: string;
  businessName : string;
  businessContact : string
  email: string;
  MembershipNumber: string;
  memberImage : string

}

interface Iuser extends user, mongoose.Document {}

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "please enter your name"],
  },
  memberImage: {
    type: String,
    required: [true, "please enter an image"],
  },
  businessName: {
    type: String,
    required: [true, "please enter your business name"],
  },
  email: {
    type: String,
    required: [true, "please enter your email"],
  },
  businessContact: {
    type: String,
    required: [true, "please enter your business Contact"],
  },
  MembershipNumber: {
    type: Number,
   
  },
 
});


const UserModel = mongoose.model<Iuser>("AllUsers" , userSchema)

export default UserModel