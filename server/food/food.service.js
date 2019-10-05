const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');
const RecipeRequest = require('../_helpers/RecipeRequest');
const Food = db.Food;

module.exports = {
	getItems,
	addItems,
	create,
	remove,
	getRecipes
};

async function getItems(username) {
    return await Food.find({username: username});
}

async function addItems(foodParam) {
	let cur = await Food.findOne({username: foodParam.username});
	if (!cur)
		await create(foodParam.username);

	let oldItems;
	if (cur)
		oldItems = cur.items;
	else
		oldItems = [];

	cur = await Food.findOne({username: foodParam.username});

	Object.assign(cur, {username: foodParam.username, items: merge(oldItems, foodParam.items)});

	await cur.save();
}

async function create(username) {
	let cur = await Food.findOne({username: username});

	if (cur) {
		throw 'Username: "' + username + '" already taken."';
	}

	Food.create({username: username, items: []});
}

async function remove(foodParam) {
	let cur = await Food.findOne({username: foodParam.username});

	if (!cur)
		throw 'No user with name "' + foodParam.username + '" found.';

	let newItems = cur.items;
	newItems = rm(newItems, foodParam.toRemove);

	Object.assign(cur, {username: foodParam.username, items: newItems});

	await cur.save();
}

async function getRecipes(foodParam) {
	console.log(RecipeRequest);
	let recipeReq = RecipeRequest();

	let cur = await Food.findOne({username: foodParam.username});
	for (i of cur.items) {
		recipeReq.addIngredient(i);
	}

	// recipeReq.makeRequest().then(() => {
	// 	console.log(recipeReq.getRequestResponse());
	// });
	return await recipeReq.makeRequest();
}

function rm(a, b) {
	let out = a;
	for (i in b) {
		for (j in out) {
			if (out[j] == b[i]) {
				out = out.slice(j, j + 1);
				break;
			}
		}
	}

	return out;
}

function merge(a, b)  {
	let out = a;
	for (i of b) {
		let flag = false;
		for (j of a) {
			if (j == i) {
				flag = true;
				break;
			}
		}
		if (!flag) {
			out.push(i);
		}
	}

	return out;
}
