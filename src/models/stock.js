const mongoose = require("mongoose");

const StockSchema = mongoose.Schema(
  {
    productId: String,
    quantity: Number,
  },
  { timestamps: true }
);

mongoose.model("stock", StockSchema);
