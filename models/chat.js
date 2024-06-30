const mongoose = require("mongoose");

const chatschema= new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        required:true,
        maxlength:1000
    },
    created_at:{
        type:Date,
        required:true
    }
});

const Chat = mongoose.model("Chat",chatschema);

module.exports=Chat;

