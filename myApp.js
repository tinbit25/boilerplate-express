let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello World")
// app.get("/",function(req,res){
//     res.send("Hello Express")
// })
app.use("/public",express.static(__dirname+"/public"))   

app.get("/",function(req,res){
    absolutePath=__dirname+"/views/index.html"
    res.sendFile(absolutePath)
})

app.get("/json",function(req,res){
    const messagestyle=process.env.MESSAGE_STYLE 
    const message="Hello json"
    if(messagestyle=="uppercase"){
        res.json({"message": message.toUpperCase()})
    }
    else{
        res.json({"message":message})
    }
    
})
module.exports = app