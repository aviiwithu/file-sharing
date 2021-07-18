const router = require('express').Router();
const File = require('../models/file');

router.get('/:uuid', async(req,res)=>{

    try {
        const file = await File.findOne({uuid: req.params.uuid});
        if(!file) return res.send("item not available")
        const filepath = `${__dirname}/../${file.path}`;

        res.download(filepath);

    } catch (error) {
        console.log(error.message)
    }

} )

// router.delete('/deleteall', async(req,res)=>{

//     const deleteAll = await File.deleteMany();

//     res.send("All files deleted");
// } )


module.exports = router;