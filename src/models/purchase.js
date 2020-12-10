const mongoose = require("mongoose");

const PurchaseSchema = mongoose.Schema(
  {
    supplier: String,
    productId: String,
    purchaseDate: Date,
    expectedDate: Date,
    arriveDate: Date,
    value: Number,
    quantity: Number,
  },
  { timestamps: true }
);

mongoose.model("purchase", PurchaseSchema);
