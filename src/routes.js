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
//PRODUCTSGetProductsNotStocked
routes.get("/product/getProducts/", productController.ListProducts);
routes.get("/product/getProduct/:productId", productController.GetProduct);
routes.get("/product/getProductsStocked/", productController.GetProductsStocked);
routes.get("/product/getProductsNotStocked/", productController.GetProductsNotStocked);
routes.post("/product/createProduct", productController.RegisterProduct);
routes.post("/product/updateProduct/:productId",productController.UpdateProducts);
routes.post("/product/removeProduct/:productId", productController.RemoveProduct);
//SALES
routes.get("/sales/getSales", salesController.ListSales);
routes.get("/sales/getSale/:saleId", salesController.GetSale);
routes.post("/sales/createSale", salesController.RegisterSale);
routes.post("/sales/updateSale/:saleId", salesController.UpdateSales);
routes.post("/sales/removeSale/:saleId", salesController.RemoveSale);
//PURCHASE
routes.get("/purchase/getPurchases", purchaseController.ListPurchases);
routes.get("/purchase/getPurchase/:purchaseId", purchaseController.GetPurchase);
routes.post("/purchase/createPurchase", purchaseController.RegisterPurchase);
routes.post("/purchase/updatePurchase/:purchaseId", purchaseController.UpdatePurchase);
routes.post("/purchase/removePurchase/:purchaseId", purchaseController.RemovePurchase);
//STOCK
routes.get("/stock/getStocks", stockController.ListStock);
routes.get("/stock/getStock/:stockId", stockController.GetStock);
routes.get("/stock/getStockByProductId/:productId",stockController.GetStockByProductId);
routes.post("/stock/createStock", stockController.RegisterStock);
routes.post("/stock/updateStock/:stockId", stockController.UpdateStock);
routes.post("/stock/removeStock/:stockId", stockController.RemoveStock);
module.exports = routes;
