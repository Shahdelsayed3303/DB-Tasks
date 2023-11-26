const express =require('express');
const deliveryController= require("../controllers/DeliveryController")
const ordersController= require("../controllers/OrdersController")
const router=require('express').Router();

router.get("/deliverymen",deliveryController.getallDelivery)
router.get("/busydeliverymen",deliveryController.getbusyDelivery)
router.get("/notbusydeliverymen",deliveryController.getnotBusyDelivery)
router.get("/deliverymenrate",deliveryController.getDeliveryrate)
router.get("/deliverymennumberoforders",deliveryController.getDeliverynumoforders)
router.get("/order",ordersController.getallOrders)
router.get("/deliveredorder",ordersController.getdeliveredOrders)
router.get("/notdeliveredorder",ordersController.getnotdeliveredOrders)
router.get("/overpayedorders",ordersController.getoverpayedOrders)
router.get("/customerorder",ordersController.getcutomerOrder)
module.exports=router;