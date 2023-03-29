const Card = require('../models/cards');
const Album = require('../models/album');

function getAlbums(req, res, next) {
    return Album.find({})
      .then((albums) => {
        res.status(200).send(albums);
      })
      .catch(next);
}

function getCards(req, res, next) {
    return Card.find({})
      .then((cards) => {
        res.status(200).send(cards);
      })
      .catch(next);
}

module.exports = {
  getAlbums, getCards
};
