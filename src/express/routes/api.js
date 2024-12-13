const express = require('express')
const router = express.Router();
const Song = require('../models/song.js')

router.get('/ninjas', function(req,res){
    res.send({type:'GET'});
});
router.post('/ninjas', function(req,res){
    Song.create(req.body).then(function(song){
        res.send(song);
    });
    
});
router.put('/ninjas/:id', function(req,res){
    res.send({type:'PUT'});
});
router.delete('/ninjas/:id', function(req,res){
    res.send({type:'DELETE'});
});

module.exports = router;