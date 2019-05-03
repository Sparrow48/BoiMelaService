const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  picture: [
    {
      type: String,
      required: true
    }
  ],
  authors: [
    {
      type: String,
      required: true
    }
  ],
  authorUsername: [
    {
      type: String,
      require: true
    }
  ],
  stallnumber: {
    type: Number,
    required: true
  }
});
bookSchema.index({
  '$**': 'text'
});

module.exports = mongoose.model('Book', bookSchema);
