const express = require("express");
const likeResController = require("../../controllers/likeRes.controller");
const { LikeRes, User } = require("../../models");
const rateResController = require("../../controllers/rateRes.controller");
const ordersController = require("../../controllers/orders.controller");

// path: /api/v1
const v1 = express.Router();

// Like restaurant
v1.post("/likeRes/:resId/like", likeResController.addLikeRes());
v1.get("/likeRes/user/:userId", likeResController.getLikeResByUser());
v1.get("/likeRes/restaurant/:resId", likeResController.getLikeResByRes());



// Rate restaurant
v1.post("/rateRes", rateResController.createRate());
v1.get("/rateRes/user/:userId", rateResController.getRateByUser());
v1.get("/rateRes/restaurant/:resId", rateResController.getRateByRes());


// Orders
v1.post("/orders", ordersController.createOrders())


module.exports = v1;