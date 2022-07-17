const mongoose = require("mongoose");
const Post = require("../Database/post");

const getAllPost = async (req, res) => {
  const { skip, limit } = req.query;
  const posts = await Post.find().skip(skip).limit(limit).populate("user");

  return res.send({
    data: posts,
  });
};

const getSinglePost = async (req, res) => {
  let { id } = req.params;
  const post = await Post.findById(id);
  res.send({
    data: post,
  });
};

const createPost = async (req, res) => {
  const { post } = req.body;

  const postDoc = await Post.create(post);

  res.send({
    data: postDoc,
  });
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  let postData = await Post.findById(id);

  for (const [key, value] of Object.entries(data)) {
    postData[key] = value;
  }

  await postData.save();

  return res.send({
    data: postData,
  });
};

const deletePost = async (req,res) => {
    const {id} = req.params;

    await Post.findOneAndDelete(id);

    res.send({
        message: "Post deleted"
    })
}
module.exports = {
  getAllPost,
  getSinglePost,
  createPost,
  updatePost,
  deletePost
};
