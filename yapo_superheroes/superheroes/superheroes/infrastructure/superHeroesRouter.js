var express = require('express');
var router = express.Router();
var superHeroesController = require('../application/superHeroesController');

router.get('/', superHeroesController.bringBatman);

router.get('/heroes', superHeroesController.heroesList);

router.get('/:heroName', superHeroesController.getHero);

module.exports = router;