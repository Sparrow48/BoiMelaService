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
    console.log("hello from signup");
    const user = new User ({
        username: req.body.username,
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    });

    user.save().then((result) => {
      console.log(result);
    }).catch((err) => {
      
    });
    res.send(user);
});

module.exports = router;