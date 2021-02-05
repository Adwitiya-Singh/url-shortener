const express = require("express");
const router = express.Router();
const validUrl = require('valid-url');
const shortID = require('shortid');
const config = require('config');

const Url = require('../models/Url')

//@route POST /api/url/shorten
// Creates a short url form any given url

router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;
    const baseUrl = config.get('baseUrl');

    if(!validUrl.is_uri(baseUrl)){
        return res.status(401).json("Invalid base url");
    }

    const urlCode = shortID.generate();

    if (validUrl.is_uri(longUrl)) {
        try {
            let url = await Url.findOne({ longUrl });

            if(url){
                res.json(url);
            }else{
                const shortUrl = baseUrl + '/' + urlCode;

                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });

                await url.save();

                res.json(url);
            }
        }catch (e) {
            console.error(e);
            res.status(500).json('json error');
        }
    }else {
        res.status(401).json('invalid long URL')
    }
});

module.exports = router;