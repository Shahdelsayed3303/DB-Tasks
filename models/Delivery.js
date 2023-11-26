const db = require("../config/db")

class DeliveryOverView{

 static async  getDelivery(){
    return new Promise(resolve=>{
         
        db.query('select * from deliverymen',[],(err,result)=>{
            if(!err)
            resolve(result)
        })
    })

 }
 
static async  getBusyDelivery(){
        return new Promise(resolve=>{
      
            db.query('select * from deliverymen where status = 1',[],(err,result)=>{
                if(!err)
                resolve(result)
       })
    })
  }

static async  getNotBusyDelivery(){
    return new Promise(resolve=>{
      db.query('select * from deliverymen where status = 0',[],(err,result)=>{
         if(!err)
         resolve(result)
      })
    })
        
  }
  static async  getDeliveryRate(rating){
    return new Promise(resolve=>{
      db.query('select * from deliverymen where rating = ?',[rating],(err,result)=>{
         if(!err)
         resolve(result)
      })
    })
        
  }
  static async  getDeliveryNumOfOrders(numberOfOrders){
    return new Promise(resolve=>{
      db.query('select * from deliverymen where numberOfOrders = ?',[numberOfOrders],(err,result)=>{
         if(!err)
         resolve(result)
      })
    })
        
  }

}
module.exports=DeliveryOverView;
