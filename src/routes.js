const express = require("express");
const routes = express.Router();
const homeController = require("./controllers/homeController");
const productController = require("./controllers/productController");
const clientController = require("./controllers/clientController");
const salesController = require("./controllers/salesController");
const purchaseController = require("./controllers/purchaseController");
const stockController = require("./controllers/stockController");

routes.get("/", homeController.Index);
//CLIENTS
routes.get("/client/getClients", clientController.ListClients);
routes.get("/client/getClient/:clientId", clientController.GetClient);
routes.post("/client/createClient", clientController.RegisterClient);
routes.post("/client/updateClient/:clientId", clientController.UpdateClients);
routes.post("/client/removeClient/:clientId", clientController.RemoveClient);
//PRODUCTS
routes.get("/product/getProducts", productController.ListProducts);
routes.get("/product/getProduct/:productId", productController.GetProduct);
routes.post("/product/createProduct", productController.RegisterProduct);
routes.post(
  "/product/updateProduct/:productId",
  productController.UpdateProducts
);
routes.post(
  "/product/removeProduct/:productId",
  productController.RemoveProduct
);
//SALES
routes.get("/sales/getSales", salesController.ListSales);
routes.post("/sales/createSale", salesController.RegisterSale);
routes.post("/sales/updateSale", salesController.UpdateSales);
routes.post("/sales/removeSale", salesController.RemoveSale);
//PURCHASE
routes.get("/purchase/getPurchase", purchaseController.ListPurchases);
routes.post("/purchase/createPurchase", purchaseController.RegisterPurchase);
routes.post("/purchase/updatePurchase", purchaseController.UpdatePurchases);
routes.post("/purchase/removePurchase", purchaseController.RemovePurchase);
//STOCK
routes.get("/stock/getStocks", stockController.ListStock);
routes.get("/stock/getStock/:stockId", stockController.GetStock);
routes.post("/stock/createStock", stockController.RegisterStock);
routes.post("/stock/updateStock", stockController.UpdateStock);
routes.post("/stock/removeStock", stockController.RemoveStock);

module.exports = routes;
