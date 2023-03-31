const Card = require('../models/cards');
const Album = require('../models/album');
const BadRequestError = require('../errors/BadRequestError');
const badRequest = require('../utils/constants');

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

function createCard(req, res, next) {
  const { title, url } = req.body;

  return Card.create({ title, url })
    .then((article) => {
      if (!article) {
        throw new BadRequestError(badRequest);
      }

      res.status(201).send(article);
    })
    .catch(next);
}

module.exports = {
  getAlbums, getCards
};
