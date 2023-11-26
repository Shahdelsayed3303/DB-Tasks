const OrdersOverView=require('../models/Orders');

class OrdersController{

    static async getallOrders(req,res){
         var results= await OrdersOverView.getOrders();
         if(results)
         res.send(results)

    }

    static async getdeliveredOrders(req,res){
        var results= await OrdersOverView.getDeliveredOrders();
        if(results)
        res.send(results)
    
   }
   static async getnotdeliveredOrders(req,res){
    var results= await OrdersOverView.getNotDeliveredOrders();
    if(results)
    res.send(results)

   }
   static async  getoverpayedOrders(req,res){
    var results= await OrdersOverView.getOverPayeyedOrders();
    if(results)
    res.send(results)
    
   }
   
    static async  getcutomerOrder(req,res){
        var results= await OrdersOverView.getCutomerOrder();
        if(results)
        res.send(results)
        
   }

}
module.exports=OrdersController;