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
  res.send({hello: "hellow world"})
  });

  router.post("/api/addbook",(req,res) =>{
      const book = new Book({
          bookName: req.body.bookName,
          price: req.body.price,
          picture: req.body.picture,
          authors: req.body.authors,
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

  router.get("/api/books", (req, res) => {
    Book.find({}).populate({
      path: "authors",
      model: "Author"
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

    router.get("/api/book/:bookid", (req, res) => {
      Book.findById({_id: req.params.bookid}).populate({
        path: "authors",
        model: "Author"
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