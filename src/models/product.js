const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: String,
    category: String,
    img_url: String,
}, { timestamps: true });

mongoose.model("product", ProductSchema);