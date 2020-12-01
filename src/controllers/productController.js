const mongoose = require("mongoose");
const product = mongoose.model("product");

module.exports = {
  // CRUD
  async RegisterProduct(req, res) {
    const payload = req.body;
    //you have to ensure that the payload is valid
    const response = await product.create(payload);
    res.json(response);
  },
  async ListProducts(req, res) {
    const response = await product.find({});
    res.json(response);
  },
  async GetProduct(req, res) {
    const id = req.params.productId;
    const response = await product.findById(id);
    res.json(response);
  },
  async UpdateProducts(req, res) {
    const productId = req.params.productId;
    const updatedProduct = req.body;
    await product.findByIdAndUpdate(productId, updatedProduct);
    const response = product.findById(productId);
    res.json(response);
  },
  async RemoveProduct(req, res) {
    const productId = req.params.productId;
    const response = await product.findByIdAndRemove(productId);
    res.json(response);
  },
  // Other queries
};
