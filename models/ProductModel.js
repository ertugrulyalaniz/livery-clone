const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    image: String,
});

module.exports = mongoose.model('Product', ProductSchema);
