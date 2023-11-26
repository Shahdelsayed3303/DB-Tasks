const DeliveryOverView=require('../models/Delivery');

class DeliveryController{


    static async getallDelivery(req,res){
    var results= await DeliveryOverView.getDelivery();
    if(results)
    res.send(results)
    }
    static async getbusyDelivery(req,res){
        var results= await DeliveryOverView.getBusyDelivery();
        if(results)
        res.send(results)
    }
    static async getnotBusyDelivery(req,res){
        var results= await DeliveryOverView.getNotBusyDelivery();
        if(results)
        res.send(results)
    }
    static async getDeliveryrate(req,res){
        var results= await DeliveryOverView.getDeliveryRate();
        if(results)
        res.send(results)
    }
    static async getDeliverynumoforders(req,res){
        var results= await DeliveryOverView.getDeliveryNumOfOrders();
        if(results)
        res.send(results)
    }


}
module.exports=DeliveryController;