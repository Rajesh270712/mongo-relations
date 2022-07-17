const User = require("../Database/user");

async function getAllUser(req,res){
    const user =await User.find();

    res.send({
        data:user
    })
}

async function createUser(req,res){
    const {user} =req.body;

    let userDoc =await User.create(user);

    return res.send({
        data:userDoc
    })
}

module.exports ={
    createUser,
    getAllUser
}