const mongoose = require("mongoose");

const SalesSchema = mongoose.Schema(
  {
    client_id: Number,
    product_id: Number,
    date: String,
    value: Number,
    quantity: Number,
  },
  { timestamps: true }
);

mongoose.model("sales", SalesSchema);
