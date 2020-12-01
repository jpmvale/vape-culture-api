const mongoose = require("mongoose");
const sales = mongoose.model("sales");

module.exports = {
    // CRUD
    async RegisterSale(req, res) {
        const payload = req.body;
        //you have to ensure that the payload is valid
        const response = await sales.create(payload);
        res.json(response);
    },
    async ListSales(req, res) {
        console.log('a');
        const response = await sales.find({});
        res.json(response);
    },
    async UpdateSales(req, res) {
        const salesId = req.params.salesId;
        const updatedSale = req.body;
        const response = await sales.findByIdAndUpdate(salesId, updatedSale);
        res.json(response);
    },
    async RemoveSale(req, res) {
        const salesId = req.params.salesId;
        const response = await sales.findByIdAndRemove(salesId);
        res.json(response);
    }
    // Other queries
}