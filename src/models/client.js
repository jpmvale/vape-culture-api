const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema({
    name: String,
    cpf: String,
    birth_date: String,
    address: String,
    phone: String,
}, { timestamps: true });

mongoose.model("clients", ClientSchema);