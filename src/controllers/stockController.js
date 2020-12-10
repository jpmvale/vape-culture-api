const mongoose = require("mongoose");
const stock = mongoose.model("stock");

module.exports = {
  // CRUD
  async RegisterStock(req, res) {
    const payload = req.body;
    //you have to ensure that the payload is valid
    const response = await stock.create(payload);
    res.json(response);
  },
  async ListStock(req, res) {
    const response = await stock.find({});
    res.json(response);
  },
  async GetStock(req, res) {
    const id = req.params.stockId;
    const response = await stock.findById(id);
    res.json(response);
  },
  async UpdateStock(req, res) {
    const stockId = req.params.stockId;
    const updatedStock = req.body;
    await stock.findByIdAndUpdate(stockId, updatedStock);
    const response = findById(stockId);
    res.json(response);
  },
  async RemoveStock(req, res) {
    const stockId = req.params.stockId;
    const response = await stock.findByIdAndRemove(stockId);
    res.json(response);
  },
  async GetStockByProductId(req,res){
    const product = req.params.productId;
    const response = await stock.findOne({productId : product});
    res.json(response);
  }
  // Other queries
};
