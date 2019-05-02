const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({ 
    bookName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    picture: [{
        type: String,
        required: true
    }],
    authors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }],
    authorUsername: [{
        type: String,
        require: true
    }]

})
  bookSchema.index({
    "$**": "text"
  });

module.exports = mongoose.model("Book", bookSchema);