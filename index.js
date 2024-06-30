const express= require("express");
const app=express();
const mongoose= require("mongoose");
const Chats = require("./models/chat.js");
const path = require("path");
const methodOverrride=require("method-override");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverrride("_method"));
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

app.get('/chats',async(req,res)=>{
    let chats= await Chats.find();
    console.log(chats);
    res.render("index",{ chats });
});

app.get("/new/chats",(req,res)=>{
    res.render("new.ejs");
});

app.post("/chats",(req,res)=>{
  let{from,to,msg}=req.body;
  let newchat= new Chats({
    from:from,
    to:to,
    msg:msg,
    created_at:new Date()
  });
  newchat.save()
  .then((res)=>{
    console.log("chat was saved");
  }).catch((err)=>{
    console.log(err);
  })
  res.redirect("/chats");
});

 //Edit Router
app.get("/chats/:id/edit",async(req,res)=>{
  let{id}=req.params;
  let chat=await Chats.findById(id);
  res.render("edit.ejs",{chat});
});

// update router
app.put("/chats/:id",async(req,res)=>{
  let{id}=req.params;
  let{msg:newMsg}=req.body;
  let updateChat=await Chats.findByIdAndUpdate(id,
    {msg:newMsg},
    {runValidators:true, new:true}
  );

  res.redirect("/chats");
});

//Destroy.
app.delete("/chats/:id",async(req,res)=>{
  let{id}=req.params;
  let deletechat= await Chats.findByIdAndDelete(id);
  console.log(deletechat);
  res.redirect("/chats");
});


app.get("/",(req,res)=>{
    res.send("Hi,I am root");
});

app.listen(8080,()=>{
    console.log("server is runing on port 8080");
});