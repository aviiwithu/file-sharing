const router = require('express').Router();
const File = require('../models/file');

router.get('/:uuid', async(req,res)=>{
    
    try {
        const file = await File.findOne({uuid:req.params.uuid});
        if(!file) res.send("no file is found");

       
        const filepath = `${process.env.APP_BASE_URL}/files/download/${req.params.uuid}`;
        res.json({downloadLink: filepath, name: file.filename, size: file.size})
        
    } catch (error) {
        console.log(error.message)
    }

    

} )


module.exports = router;