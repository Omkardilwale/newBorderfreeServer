const mongoose = require('mongoose');

// wrote this model for post the api on database and then it will come to frontend to show cards

const CardSchema = new mongoose.Schema({
    title: {type: String, required: true},
    price: {type: String},
    category: {type: String},
    discription: {type: String},
    image: {type: String, required: true},
    
});

const Card= mongoose.model('card',CardSchema);

module.exports =Card;
