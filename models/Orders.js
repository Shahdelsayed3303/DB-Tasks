const db = require("../config/db")

class OrdersOverView{

 static async  getOrders(){
    return new Promise(resolve=>{

        db.query('select * from orders',[],(err,result)=>{
            if(!err)
            resolve(result)
        })

    })

    }
 static async  getDeliveredOrders(){
    return new Promise(resolve=>{
       db.query('select * from orders where isDelivered=1 ',[],(err,result)=>{
          if(!err)
            resolve(result)
        })
    
    })
   }
   static async  getNotDeliveredOrders(){
    return new Promise(resolve=>{
       db.query('select * from orders where isDelivered=0 ',[],(err,result)=>{
          if(!err)
            resolve(result)
        })
    
    })
   }

   static async  getOverPayeyedOrders(orderprice){
    return new Promise(resolve=>{
    db.query('SELECT * FROM orders WHERE orderprice > ? ',[orderprice],(err,result)=>{
       if(!err)
         resolve(result)
     })
  })
  }

 static async  getCutomerOrder(customerId){
       return new Promise(resolve=>{
       db.query('SELECT * FROM orders WHERE customerId = ? ',[customerId],(err,result)=>{
          if(!err)
            resolve(result)
        })
     })
   }
 }
module.exports=OrdersOverView;