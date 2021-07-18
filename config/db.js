const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:true,
        useCreateIndex:true
        }).then(res=>console.log("DB connected"))
        .catch(err=>console.log("DB connection failed"));

        // const connection = mongoose.connection;

        // connection.once("open", ()=>{
        //     console.log("DB connected")
        // } ).catch(error=>console.log("DB not connected"))
    }

    module.exports = connectDB;