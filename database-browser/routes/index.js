var express = require('express');
var router = express.Router();
var _ = require('lodash');

var gameDatabase = require('../../videogame-database.json');

var platforms = _.sortBy(_.uniq(_.flatten(_.map(gameDatabase, 'platforms'))), function (g) {
  return g.toLowerCase();
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    _: _,
    title: 'Videgame Database',
    size: gameDatabase.length,
    games: gameDatabase,
    platforms: platforms
  });
});

module.exports = router;