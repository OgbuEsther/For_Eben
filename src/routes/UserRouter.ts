import express from "express"
import { getAllUsers, getOneUser, newUser, updateUser } from "../controller/UserController"
import { memberImageConfig } from "../config/multer"

const userRouter = express.Router()

userRouter.get("/" , getAllUsers)
userRouter.get("/:userId" , getOneUser)
userRouter.post("/new" ,memberImageConfig , newUser)
userRouter.patch("/update" ,memberImageConfig, updateUser)


export default userRouter