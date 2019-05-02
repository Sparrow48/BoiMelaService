
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const authorSchema = new mongoose.Schema({ 
    username: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    publishedBooks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

});
authorSchema.index({
   "$**": "text"
});

module.exports = mongoose.model("Author", authorSchema);