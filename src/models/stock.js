const mongoose = require("mongoose");

const StockSchema = mongoose.Schema({
    product_id: Number,
    quantity: Number,
}, { timestamps: true });

mongoose.model("stock", StockSchema);