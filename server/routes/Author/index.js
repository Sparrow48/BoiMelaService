const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const path = require('path');
const mongoose = require("mongoose");

const Author = require('../../models/Author');
router.use(function(req,res,next) {
    next()
})

router.get("/", (req, res) => {
    
});

  router.post("/post", (req, res) => {
    res.send(req.body);
  });

  router.post("/api/addauthor",(req,res) =>{
      const author = new Author({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        publishedBooks: req.body.publishedBooks,
        createdBy : req.body.createdBy
      });

      Author.findOne({ username: req.body.username})
        .then((result) => {
      if (result != null && result.username == req.body.username) { 
        res.send({error: "This username already exist!"});
      } else {
        author.save().then((result) => {
          res.send({success: "Successfully added"});
        }).catch((err) => {
          console.log(err);
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  });

  
  router.get("/api/authors", (req, res) => {
    Author.find({}).populate({
      path: "createdBy",
      model: "User"
    }).then((result) => {
      if(!result) {
        res.send({error: "Can't resolve"});
      } else {
        res.send(result);
      }
    }).catch((err) => {
      console.log(err);
    });
    });

    router.get("/api/author/:username", (req, res) => {
      Author.findOne({username: req.params.username}).populate({
        path: "createdBy",
        model: "User"
      }).then((result) => {
          if(!result) {
            res.send({error: "Can't found"});
          } else {
            res.send(result);
          }
      
      }).catch((err) => {
        console.log(err);
      });
    })




  module.exports = router;