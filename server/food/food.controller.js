const express = require('express');
const router = express.Router();
const foodService = require('./food.service');

// routes
router.post('/get', getItems);
router.post('/add', addItems);
router.post('/request', request);
router.post('/clear', clear);

module.exports = router;

function getItems(req, res, next) {
  foodService.getItems(req.body)
      .then(items => items ? res.json(items) : res.sendStatus(404))
      .catch(err => next(err));
}

function addItems(req, res, next) {
	foodService.addItems(req.body)
		.then(() => res.json({}))
		.catch(err => next(err));
}

function request(req, res, next) {
	foodService.getRecipes(req.body)
		.then(recipes => recipes ? res.json(recipes) : res.sendStatus(404))
		.catch(err => next(err));
}

function clear(req, res, next) {
	foodService.clear(req.body)
		.then(() => res.json({}))
		.catch(err => next(err))
}
