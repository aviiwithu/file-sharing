const dotenv = require('dotenv');
const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const File = require('../models/file');
const sendEmail = require('../services/emailService');
const {v4:uuid4} = require('uuid')
dotenv.config();

let storage = multer.diskStorage({
    destination: (req,file,cb)=> cb(null, 'uploads'),
    filename: (req,file,cb)=>{
        const uniqueName = `${Date.now()}-${Math.round(Math.random()*1E9)}${path.extname(file.originalname)}`;
        cb(null,uniqueName);
    }
})

const upload = multer({
    storage:storage,
    limits: {fileSize: 100*1000000}
}).single('myFile');



router.post('/', (req,res)=>{
    
    //store file
    upload(req,res,async(err)=>{
        //validate file
        
        if(!req.file) return res.json({error:"no file included"});

         if(err){
             return res.sendStatus(500).send({error: err.message})
         }
         //store in DB
    
        const file = new File({
            filename: req.file.filename,
            uuid: uuid4(),
            path: req.file.path,
            size: req.file.size
        })

        const response = await file.save();
        return res.json({ file: `${process.env.APP_BASE_URL}/download/${response.uuid}`})

     })


     //send file link in response

} )

router.post('/send', async(req,res)=>{

    const{uuid, emailTo, emailFrom} = req.body;
    if(!uuid || !emailTo || !emailFrom) return res.json({error: "All fields required"});
    
        try {
            const file = await File.findOne({uuid})
            if(!file) return res.json({error: "no such file found"});
            // if(file.sender) return res.json({error: " email already sent"});

            file.sender = emailFrom;
            file.receiver = emailTo;

            const response = await file.save();

            sendEmail({
                from: emailFrom,
                to: emailTo,
                subject: "File sharing",
                text: `${emailFrom} shared a file with you`,
                html: `html template`
            })

            res.send("email sent")
            
        } catch (error) {
            console.log("send route",error.message);
        }
} )


module.exports = router;