const express = require("express");
const { getAllUser, createUser } = require("../handlers/user");

const userRouter = express.Router();

userRouter.get("/users",getAllUser)
userRouter.post("/users",createUser)


module.exports=userRouter;