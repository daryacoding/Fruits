const mongoose = require('mongoose');

//Make a Schema
const fruitSchema = new mongoose.Schema({
    name: { type: String, require: true },
    color: { type: String, required: true },
    readyToEat: Boolean
});

//Make a Model From The Schema
const Fruit = mongoose.model('Fruit', fruitSchema);

//Export the Model
module.exports = Fruit;