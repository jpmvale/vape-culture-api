const mongoose = require("mongoose");

const PurchaseSchema = mongoose.Schema({
    supplier: String,
    product_id: Number,
    date: String,
    value: Number,
    quantity: Number,
}, { timestamps: true });

mongoose.model("purchase", PurchaseSchema);