const express = require("express");
const { getAllPost, getSinglePost, createPost, updatePost, deletePost } = require("../handlers/post");

const postRouter = express.Router();

postRouter.get("/post/all",getAllPost)
postRouter.get("/post/:id",getSinglePost)
postRouter.patch("/post/:id",updatePost)
postRouter.post("/post",createPost)
postRouter.delete("/post/:id",deletePost)




module.exports=postRouter;