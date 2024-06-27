const mongoose= require("mongoose");
const Chats = require("./models/chat.js");

main()
.then(()=>{
    console.log("!.....Mongodb connection is connected!...");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");
}

let allchats=[
    {
        from:"Tauqueer manzar",
        to:"Sarfraz",
        msg:"Hello sarfraz how are you",
        created_at:new Date()
    },
    {
        from:"Uzma Tahseen",
        to:"Tauqueer",
        msg:"why are you busy",
        created_at:new Date()
    },
    {
        from:"Tauqueer",
        to:"Zubair",
        msg:"Hello zubair how are you",
        created_at:new Date()
    },
    {
        from:"Yaseen",
        to:"Sarfraz",
        msg:"Hello sarfraz how are you",
        created_at:new Date()
    },
    {
        from:"Tauqueer manzar",
        to:"Naved malik",
        msg:"Hello naved how are you",
        created_at:new Date()
    }
];

Chats.insertMany(allchats);