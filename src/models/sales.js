const mongoose = require("mongoose");

const SalesSchema = mongoose.Schema(
  {
    clientId: String,
    productId: String,
    date: Date,
    value: Number,
    quantity: Number,
  },
  { timestamps: true }
);

mongoose.model("sales", SalesSchema);
