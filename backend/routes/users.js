const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getOneUser, getUsers, getCurrentUser } = require('../controllers/userController');

router.get('/', getUsers);

// returns information about the logged-in user (email and name)
router.get('/me', getCurrentUser);

router.get(
  '/:id',
  celebrate({
    params: Joi.object().keys({
      id: Joi.string().hex().length(24)
    }).unknown(true)
  }),
  getOneUser
);

module.exports = router;
