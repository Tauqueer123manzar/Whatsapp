const express= require("express");
const app=express();
const mongoose= require("mongoose");
const Chats = require("./models/chat.js");
const path = require("path");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","views");
              //database connection
main()
.then(()=>{
    console.log("!.....Mongodb connection is connected!...");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");
}

let chat1=new Chats({
    from:"Tauqueer",
    to:"Naved",
    msg:"could you please,send me my money",
    created_at:new Date()
});

let chat2=new Chats({
    from:"Tauqueer",
    to:"Uzma",
    msg:"Hello,Uzzu",
    created_at:new Date()
});

chat1.save().then((res)=>{
    console.log(res);
})

chat2.save().then((res)=>{
    console.log(res);
})

app.get("/",(req,res)=>{
    res.send("Hi,I am root");
});

app.listen(8080,()=>{
    console.log("server is runing on port 8080");
});