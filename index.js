const express = require("express");
const cors = require("cors");
const databaseConnect = require("./Database");
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
const app = express();

app.use(cors())
app.use(express.json())
function logger(req,res,next){
    console.log(req.path,req.method);
    next();
}
app.use(logger)
app.use(userRouter)
app.use(postRouter)
databaseConnect().then(()=>{
    app.listen("3000",()=>{
        console.log("connected")
    })
})