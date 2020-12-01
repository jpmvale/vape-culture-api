const mongoose = require("mongoose");
const client = mongoose.model("clients");
mongoose.set('useFindAndModify', false);

module.exports = {
    // CRUD
    async RegisterClient(req, res) {
        const payload = req.body;
        //you have to ensure that the payload is valid
        const response = await client.create(payload);
        res.json(response);
    },
    async ListClients(req, res) {
        const response = await client.find({});
        res.json(response);
    },
    async GetClient(req, res) {
        const id = req.params.clientId;
        const response = await client.findById(id);
        res.json(response);
    },
    async UpdateClients(req, res) {
        const clientId = req.params.clientId;
        const updatedClient = req.body;
        await client.findByIdAndUpdate(clientId, updatedClient);
        const response = client.findById(clientId);
        res.json(response);
    },
    async RemoveClient(req, res) {
        const clientId = req.params.clientId;
        const response = await client.findByIdAndRemove(clientId);
        res.json(response);
    }
    // Other queries
}