const mongoose = require('mongoose');

//wrote this model for to save the data on databse2 from front end after clicking on the card=>place order button 

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    price: {type: String},
    category: {type: String},
    discription: {type: String},
    image: {type: String, required: true},
});

const Product= mongoose.model('product',ProductSchema);

module.exports =Product;