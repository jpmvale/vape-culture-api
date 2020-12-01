const mongoose = require("mongoose");

const PurchaseSchema = mongoose.Schema(
  {
    supplier: String,
    product_id: String,
    date: String,
    value: Number,
    quantity: Number,
  },
  { timestamps: true }
);

mongoose.model("purchase", PurchaseSchema);
