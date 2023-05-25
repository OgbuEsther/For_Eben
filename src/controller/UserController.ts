import { Request, Response } from "express";
import UserModel from "../model/UserModel";

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
    const { name, email, password, phoneNum, address } = req.body;
    const users = await UserModel.create({
      name,
      email,
      password,
      phoneNum,
      address,
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
