const express = require("express")
const router = express.Router();

const Url = require("../models/Url")

//@route   GET  /:code
//Redirect to original URL
router.get('/:code', async(req, res) => {
    try{
        const url = await Url.findOne({ urlCode: req.params.code });

        if(url){
            return res.redirect(url.longUrl);
        }else{
            return res.status(404).json('No URl found');
        }
    }catch(e){
        console.error(e)
        res.status(500).json('Server Error')
    }
})

module.exports = router;