const router = require('express').Router();
const Joi = require('joi').extend(require('@joi/date'));
const { celebrate } = require('celebrate');
const { getAlbums, getCards, createCard } = require('../controllers/cardControler');

router.get('/', getAlbums);
router.get('/', getCards);

// router.post(
//   '/',
//   celebrate({
//     body: Joi.object().keys({
//       title: Joi.string().required(),
//       url: Joi.string().uri().required(),
//     })
//   }),
//   createCard
// );

module.exports = router;
