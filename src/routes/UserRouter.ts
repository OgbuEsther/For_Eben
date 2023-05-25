import express from "express"
import { getAllUsers, getOneUser, newUser, updateUser } from "../controller/UserController"

const userRouter = express.Router()

userRouter.get("/" , getAllUsers)
userRouter.get("/:userId" , getOneUser)
userRouter.post("/new" , newUser)
userRouter.patch("/update" , updateUser)


export default userRouter