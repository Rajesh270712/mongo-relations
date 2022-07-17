const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title:String,
    content:String,
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:true
})

const Post = mongoose.model("Post",postSchema);

module.exports = Post;