const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
		username: { type: String, unique: true, required: true},
    items: []
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Food', schema);
