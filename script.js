const fs = require('fs');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const File = require('./models/file');
const schedule = require('node-schedule');

dotenv.config();
connectDB();

async function deleteData(){
    const pastDate = new Date(Date.now()-24*60*60*1000);

    const files = await File.find({createdAt : {$lt: pastDate} });
    console.log(files);

    if(files.length){
        for(const file of files){
            try{
                fs.unlinkSync(file.path);
                await file.remove();
                console.log("file deleted from db and system");
            } catch(err){
                console.log("error while deleting data")
            }
        }
    }
    console.log("file deleting loop completed");

}

console.log("delete script started");

///at recurrent interval

schedule.scheduleJob('@daily',()=>{
    deleteData();
    console.log("scheduler run after 10 sec");
})

