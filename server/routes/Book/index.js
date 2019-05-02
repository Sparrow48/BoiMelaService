const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const path = require('path');
const mongoose = require("mongoose");

const Book = require('../../models/Book');
router.use(function(req,res,next) {
    next()
})

router.get("/", (req, res) => {
    res.send([
      {
        id: 0,
        title: 'Lorem ipsum',
        content: 'Dolor sit amet',
        author: 'Marcin'
      },
      {
        id: 1,
        title: 'Vestibulum cursus',
        content: 'Dante ut sapien mattis',
        author: 'Marcin'
      }
    ]);
  });

  router.post("/post", (req, res) => {
    res.send(req.body);
  });

  router.post("/api/addbook",(req,res) =>{
      const book = new Book({
          bookName: req.body.bookName,
          price: req.body.price,
          picture: req.body.picture,
          authors: req.body.author,
          authorUsername: req.body.authorUsername,
          stallnumber: req.body.stallnumber

      });

      Book.findOne({ bookName: req.body.bookName})
    .then((result) => {
      if (result != null && result.bookName == req.body.bookName) { 
        res.send({error: "This book is already exist"});
      } else {
        book.save().then((result) => {
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

  module.exports = router;