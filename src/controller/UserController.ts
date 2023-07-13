import { Request, Response } from "express";
import UserModel from "../model/UserModel";
import cloudinary from "../config/cloudinary";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();

    return res.status(200).json({
      message: "gotten all users",
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed to get all users",
      data: error,
    });
  }
};

//get one user
export const getOneUser = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.findById(req.params.userId);

    return res.status(200).json({
      message: "gotten one user",
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed to get all users",
      data: error,
    });
  }
};

//create a user
export const newUser = async (req: Request, res: Response) => {
  try {
    const {
      fullName,
      email,
      password,
      businessName,
      businessContact,
      MembershipNumber,
      memberImage,
    } = req.body;

    const imageUploader = await cloudinary.uploader?.upload(req?.file!.path);

    const users = await UserModel.create({
      fullName,
      email,
      password,
      businessName,
      businessContact,
      MembershipNumber : getAllUsers?.length + 1,
      memberImage : imageUploader?.secure_url,
    });

    return res.status(200).json({
      message: "created a user",
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed to get all users",
      data: error,
    });
  }
};

// update user

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { fullName, businessName, businessContact, memberImage } = req.body;
    const getUser = await UserModel.findById(req.params.userId);

    const users = await UserModel.findByIdAndUpdate(
      getUser?._id,
      { fullName, businessName, businessContact, memberImage},
      { new: true }
    );

    return res.status(200).json({
      message: "updated a user",
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed to get all users",
      data: error,
    });
  }
};
