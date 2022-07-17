const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    content:String,
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },

    post:{
        title:String,
        id:mongoose.Types.ObjectId
    }
},{
    timestamps:true
})

const Comment = mongoose.model("Comment",commentSchema);

module.exports = Comment;