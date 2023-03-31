/* eslint-disable import/no-unresolved */
const mongoose = require('mongoose');
const validator = require('validator');

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
    minlength: 2,
    maxlength: 30,
  },
  link: { //link to the image
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isURL(v, {
        protocols: ['http', 'https', 'ftp'],
        require_tld: true,
        require_protocol: false,
        require_host: true,
        require_valid_protocol: true,
        allow_underscores: true,
        host_whitelist: false,
        host_blacklist: false,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: false,
        disallow_auth: false,
      }),
      message: 'You must provide a valide URL for the image',
    },
  },
});

module.exports = mongoose.model('card', cardSchema);
