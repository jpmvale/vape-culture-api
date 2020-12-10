const mongoose = require("mongoose");
const purchase = mongoose.model("purchase");

module.exports = {
    // CRUD
    async RegisterPurchase(req, res) {
        const payload = req.body;
        //you have to ensure that the payload is valid
        const response = await purchase.create(payload);
        res.json(response);
    },
    async ListPurchases(req, res) {
        const response = await purchase.find({});
        res.json(response);
    },
    async GetPurchase(req, res) {
        const purchaseId = req.params.purchaseId;
        const response = await purchase.findById(purchaseId);
        res.json(response);
    },
    async UpdatePurchase(req, res) {
        const purchaseId = req.params.purchaseId;
        const updatedPurchase = req.body;             
        const response = await purchase.findByIdAndUpdate(purchaseId, updatedPurchase);
        res.json(response);
    },
    async RemovePurchase(req, res) {
        const purchaseId = req.params.purchaseId;
        const response = await purchase.findByIdAndRemove(purchaseId);
        res.json(response);
    }
    // Other queries
}