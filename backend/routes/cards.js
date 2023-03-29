const router = require('express').Router();
const { getAlbums, getCards } = require('../controllers/cardControler');

router.get('/', getAlbums);
router.get('/', getCards);

module.exports = router;
