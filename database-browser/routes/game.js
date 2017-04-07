var express = require('express');
var router = express.Router();
var _ = require('lodash');

var gameDatabase = require('../../videogame-database.json');



/* GET */
router.get('/:id', function (req, res, next) {
    var game = _.find(gameDatabase, function (o) {
        return o.id === req.params.id
    });

    var keys = _.sortBy(_.filter(Object.keys(game), function (key) {
        return key != "images" && key != "id" && key != "title";
    }), function (key) {
        return key.toLowerCase();
    });

    res.render('game', {
        id: game.id,
        title: game.title,
        images: game.images,
        game: game,
        keys: keys
    });
});

module.exports = router;