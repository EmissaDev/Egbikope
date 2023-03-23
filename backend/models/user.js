const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

// describes the user schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => validator.isEmail(v, {
        require_tld: true,
        allow_utf8_local_part: false
      }),
      message: 'Entrez un email valid!'
    }
  },
  password: {
    type: String,
    required: true,
    select: false, //this stop API from returning the hash
    minlength: 8
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    default: 'Damien'
  }
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('Email ou mot de passe incorrect'));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Error('Email ou mot de passe incorrect'));
          }

          return user;
        });
    });
};

// creates the model and export it
module.exports = mongoose.model('user', userSchema);
