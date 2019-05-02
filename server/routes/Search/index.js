const express = require('express');
const router = express.Router();
const path = require('path');
const mongoose = require("mongoose");

const Book = require('../../models/Book');
const Author = require('../../models/Author');
const User = require('../../models/User');

router.use(function(req,res,next) {
    next()
})

router.get("/", (req, res) => {
    res.send({message: "hello from search"});
});

router.get("/api/search/:searchitem", async(req, res) => {
    const any = req.params.searchitem;
    if(any) {
        const user = await User.find(
            { $text: { $search: any } },
            { score: { $meta: "textScore" } }
          ).limit(15);

          const book = await Book.find(
            { $text: { $search: any } },
            { score: { $meta: "textScore" } }
          ).limit(15);

          const author = await Author.find(
            { $text: { $search: any } },
            { score: { $meta: "textScore" } }
          ).limit(15);

          const temp = {
              user: user,
              author: author,
              book: book
          };
          res.send(temp);
    }
}); 
module.exports = router;