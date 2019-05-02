const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const path = require('path');
const mongoose = require("mongoose");


const User = require('../../models/User');
router.use(function (req, res, next) {
    //console.log('Time:', Date.now())
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

router.post("/signup", (req, res) => {
    const user = new User ({
        username: req.body.username,
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    });

    User.findOne({ username: req.body.username})
    .then((result) => {
      if (result != null && result.username == req.body.username) { 
        res.send({error: "This username already exist"});
      } else {
        user.save().then((result) => {
          res.send({success: "Sign up successful"});
        }).catch((err) => {
          console.log(err);
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/signin", (req, res) => {
  User.findOne({username: req.body.username})
  .then((result) => {
    if (!result) {
      res.send({error: "User not found!"});
    } else {
      bcrypt.compare(req.body.password, result.password, (err, matched) => {
        if (err) return err;
        if (matched) {
          res.send(result);
        } else {
          res.send({error: "Incorrect password"});
        }
      });
    }

  }).catch((err) => {
    
  });
})
module.exports = router;