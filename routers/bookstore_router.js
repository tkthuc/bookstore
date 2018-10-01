var router = require('express').Router();
var path = require('path');

router.use('/', function(req,res,next) {
    res.sendFile(path.resolve(__dirname,'../public/index.html'))
});

module.exports = router;