const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({ 
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
    dateOfSignup: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    status: {
      type: String,
      default: "public"
    }

});

userSchema.pre("save", function(next) {
    if (!this.isModified("password")) {
      return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err);
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
      });
    });
  });
  
  userSchema.index({
    "$**": "text"
  });

module.exports = mongoose.model("User", userSchema);