const uuid = require('uuid')
const path = require('path');
const { Basket_Item, Order, Item, Categoria, Love,User, Item_photo, Order_Item } = require('../models/models')
const ApiError = require('../error/ApiError');
const jwt = require('jsonwebtoken')
const { Op, where } = require('sequelize');
const fs = require('node:fs');
const FormData = require('form-data');
var request = require('request');
const axios = require('axios')
const { Sequelize } = require('sequelize');
const reader = require('xlsx') 
const generateJwt = (id) => {
  return jwt.sign(
      {id},
      process.env.SECRET_KEY,
      {expiresIn: "24h"}
  )
}



class deviceController {


async reg(req, res, next) {

      const {password,email} = req.body
      const user_0 = await User.create({
        email:email,
        password:password,
      })
      const token = generateJwt(user_0.id)
      return res.json({token})
  }

  async auth0(req, res, next) {
    const user_0 = await User.create()
    const token = generateJwt(user_0.id)
    return res.json({token})
  }
  async createItem(req, res, next) {
    try {
        let {photo,name,description,qauantity,price,UserId,ItemId } = req.body
        const device = await Item.create({photo,name,description,qauantity,price,UserId,ItemId});
        return res.json(device)
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
  }
  async setcatalog(req, res, next) {



  
    // Reading our test file 
    const file = reader.readFile('dildos.xlsx') 
      
    let data = [] 
    var id = 0
    const sheets = file.SheetNames 
      
    for(let i = 0; i < sheets.length; i++) 
    { 
       const temp = reader.utils.sheet_to_json( 
            file.Sheets[file.SheetNames[i]]) 
       temp.forEach((res) => { 
          data.push(res) 
       }) 
    } 
      
    // Printing data 
    let ind = 0
    let ids = []



 
    data.map(  async (item,index)=>

 { 
  const arrSkidka = [0,25,35,50]
  const skidka1 = getRandom(arrSkidka,1)
  function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len;
    }
    return result;
}
console.log(index)

  if(  data[index].Name != data[index+1]?.Name){
    const name = data[index].Name 
    const price1 = data[index].Price 
    const price = price1.substring(1, 10)
    const description_value = data[index].desc 
    const skidka = skidka1[0]
    const description_title = 'Information about the product'
    let trimmedString = description_value.substring(0,60)
    const description0 = `${trimmedString}...`

   

   
    let specifications = ''
    
     
       
    let i = 0;
while  (i < ind) { 

  // if(data[index]['photo1-src']!= ''&& data[index]['photo1-src']!= null){
  //   const photo=data[index-i]['photo1-src']
    
  //   const itemphoto = await Item_photo.create({photo,ItemId})
  //  }
  console.log(index-i)

  if(data[index-i].Specifications!= ''){
    specifications = specifications + ', ' + data[index-i].Specifications
   }
  i++
     }
  let dop_info = specifications
  const CategoriumId = 2

  var device =  await Item.create({name,price,skidka,description0,description_title,description_value,dop_info,CategoriumId})
  ids.push(device.id)
   
    let ii = 0
  // while (ii < ind) { 
  //   if(data[index-ii]){
  //     if(data[index-ii]['photo1-src']!= ''&& data[index-ii]['photo1-src']!= null&& data[index-ii]['photo1-src']!= 'null'){
  //       const photo=data[index-ii]['photo1-src']
  //       const ItemId = response.id
  //       const itemphoto =  await Item_photo.create({photo,ItemId})
  //     }
     
  //   }
  //   ii++
  //      }



      
  

    // aray.map(item2=>{

    //    console.log(data[index].Specifications)
    //    if(data[index].Specifications!= ''){
    //     specifications = specifications + ' ' + data[index].Specifications
 
    //    }

    //   }
    //   )
      console.log(specifications)
    ind=0
    
  }else{
    ind++

  }



}
      )
       setTimeout(() => {
        
     
        let indx = 0
        data.map(  (item,index)=>
         
        { 
         if(  data[index].Name != data[index+1]?.Name){
          
          if(data[index]){
            if(data[index]['photo1-src']!= ''&& data[index]['photo1-src']!= null&& data[index]['photo1-src']!= 'null'){
              const photo=data[index]['photo1-src']
              const ItemId = ids[indx]
              const itemphoto =   Item_photo.create({photo,ItemId})
            }
           
          }
          
          indx++
           
         }else{
          if(data[index]){
            if(data[index]['photo1-src']!= ''&& data[index]['photo1-src']!= null&& data[index]['photo1-src']!= 'null'){
              const photo=data[index]['photo1-src']
              const ItemId = ids[indx]
              const itemphoto =   Item_photo.create({photo,ItemId})
            }
           
          }
       
         }
       
       
       
       }
             )
      
      
      return res.json('sucsess')
       }, 7000);

  }



async auth(req, res, next) {

  const {email,password} = req.body
  const user_0 = await User.findOne(
 {  

  where:{email:email}

}
  )
   if (user_0.password==password){
    console.log('верно')
    const token = generateJwt(user_0.id)
    console.log(user_0.id)
    return res.json(user_0.id)
   }else{
    console.log('Неверный логин или пароль')
    return res.json('Неверный логин или пароль')
   }

}

async getCategoriaAll(req, res) {
  const {UserId} = req.body
  const video = await Categoria.findAll();
  return res.json(video)
}

async gettovar(req, res) {
  const params = {
    productUrl: 'https://www.aliexpress.com/item/1005003980657298.html', // Product URL from any aliexpress domain
    defaultTimeout: 15000, // In ms. Overwrites 30s default Puppeteer timeout for awaiting page navigation, awaiting selectors, etc.
    logger: { // Use your logger of preference: Winston, bunyan...
      error: console.error,
      warn: console.warn,
      info: console.info,
      log: console.log,
      debug: console.debug
    }
  }
  const product = scrape();
  
  product.then(res => {
    console.log('The JSON: ', res);
  });
  return res.json(video)
}


async getCategoriaOne(req, res) {
  const {id} = req.body
  const video = await Categoria.findOne({
    where:{name:id},
    limit: 10,
    include: [{model: Item, as: 'Item',

    include:{model: Item_photo, as: 'Item_photo'},
    
  },
    
  ]
    
  });
  return res.json(video)
}


async getCategoriaOne1(req, res) {
  const {id} = req.body
  const video = await Item.findAll({
    limit: 50,
    where:{
      CategoriumId:id,

    },
  
    include:{model: Item_photo, as: 'Item_photo'}
  });
  return res.json(video)
}



async getItemOne(req, res) {
  const {id} = req.params
  const video = await Item.findOne({
    where:{id:id},
    include: [{model: Item_photo, as: 'Item_photo'}]
  });
  return res.json(video)
}
async getBasketItemAll(req, res) {
  const {UserId} = req.body
  const video = await Basket_Item.findAll({
    where:{UserId:UserId},
    order: [
      ['id', 'ASC'],
  
  ],
  });
  return res.json(video)
}


async getCategoriaOne2(req, res) {
  const {id} = req.body
  const video = await Categoria.findOne({
    where:{id:id},
    include: [{model: Item, as: 'Item'}]
  });
  return res.json(video)
}
async get_any_Item(req, res, next) {
  try {
  
      const device = await Item.findAll({ 
        order: Sequelize.literal('random()'), 
        limit: 20,
        where: Sequelize.where(
          Sequelize.literal('skidka'),
          '>',
          20
      ) ,
      include: [{model: Item_photo, as: 'Item_photo'}]
      
      }).then((encounters) => {
        return res.json(encounters)
      });
    
  } catch (e) {
      next(ApiError.badRequest(e.message))
  }
}
async checkBasket (req, res) {
  const {ItemId,UserId} =  req.body
  const basket1 = await Basket_Item.findOne(
    {
      where: {
        ItemId:ItemId,
        UserId:UserId
      } 
  }
  )

return res.json(basket1)

}
async updateOneBasketItemPlus (req, res) {
  const {id} =  req.body
  const basket1 = await Basket_Item.findOne(
    {
      where: {id:id} 
  }
  )
  console.log(basket1)
  const basket2 = parseInt(basket1.dataValues.qauantity)
  
  const basket =  await Basket_Item.update(
  {
    qauantity: basket2+1,
      
  },
  {
      where: {id:id} 
  }
  
  )

  if (basket) {
      return res.status(206).send('Basket updated successfully ');
    }throw new Error('Product not found');
  } catch (error) {
    return res.status(500).send(error.message);
}
async updateOneBasketItemMinus (req, res) {
  const {id} =  req.body
  const basket1 = await Basket_Item.findOne(
    {
      where: {id:id} 
  }
  )
  const basket2 = parseInt(basket1.dataValues.qauantity)
  
  const basket =  await Basket_Item.update(
  {
    qauantity: basket2-1,
      
  },
  {
      where: {id:id} 
  }
  
  )

  if (basket) {
      return res.status(206).send('Basket updated successfully ');
    }throw new Error('Product not found');
  } catch (error) {
    return res.status(500).send(error.message);
}

async createbasketitem(req, res, next) {
  try {
      let {UserId,ItemId } = req.body
      const item = await Item.findOne(
       { 
        where:{
          id:ItemId
        },
        include: [{model: Item_photo, as: 'Item_photo'}]
      }
      )
     
      let photo = item.Item_photo[0].photo
      let name = item.name
      let description = item.description_title
      let price = item.price
      let skidka = item.skidka
      let qauantity = 1
      const device = await Basket_Item.create({photo,name,description,qauantity,price,UserId,ItemId,skidka});
      return res.json(item)
  } catch (e) {
      next(ApiError.badRequest(e.message))
  }
}
async getOrder(req, res, next) {
  try {
      let {UserId } = req.body
      const item = await Order.findAll(
       { 
        where:{
          UserId:UserId
        },
        include: [{model: Order_Item, as: 'Order_Item'}]
      }
      )
     

      return res.json(item)
  } catch (e) {
      next(ApiError.badRequest(e.message))
  }
}
async createOrder(req, res, next) {
  try {
      let {UserId,adres,price1,Name,Familia,Phone,Mail} = req.body
      const order = await Order.create({UserId,adres,price:price1,Name,Familia,Phone,Mail})
      const item = await Basket_Item.findAll(
       { 
        where:{
          UserId:UserId
        },
      }
      )
      let OrderId = order.id
      console.log(OrderId)
      item.map(async item=>
  {      let photo = item.photo
        let name = item.name
        let description = item.description_title
        let price = item.price
        let ItemId = item.id
        let qauantity = item.qauantity
        
        const device =  await Order_Item.create({photo,name,description,qauantity,price,UserId,OrderId});
        }
        )
        const des = await Basket_Item.destroy(
          { 
           where:{
             UserId:UserId
           },
         }
         )
      return res.json(item)
  } catch (e) {
      next(ApiError.badRequest(e.message))
  }
}
async createBasketItem(req, res, next) {
  try {
      let {photo,name,description,qauantity,price,UserId,ItemId,skidka } = req.body
      const device = await Basket_Item.create({photo,name,description,qauantity,price,UserId,ItemId,skidka});
      return res.json(device)
  } catch (e) {
      next(ApiError.badRequest(e.message))
  }
}





async deleteBasketItem (req, res) {
  try {
    const { id } = req.params;
    const deletedProduct = await Basket_Item.destroy({
      where :{ id: id }    
    });

    if (deletedProduct) {
      return res.status(204).send('Product deleted successfully ');
    }

    throw new Error('Product not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};







async getLove(req, res) {
  const {UserId,ItemId} = req.body
  const video = await Love.findAll({
    where:{
      UserId:UserId,
    },
    include: [{model: Item, as: 'Item',include:{model: Item_photo, as: 'Item_photo'}}]
  });
  return res.json(video)
}
async createLove(req, res) {
  const {UserId,ItemId} = req.body
  const video = await Love.create({
      UserId,
      ItemId,
  });
  return res.json(video)
}
async gellove_(req, res) {
  const {ItemId,UserId} = req.body
  const video = await Love.findOne({
    
    where:{
      UserId:UserId,
      ItemId:ItemId
    }
  
  });
  return res.json(video)
}
async deleteLove(req, res) {
  const {id} = req.body
  const video = await Love.destroy({
   where:{
     id:id
   }
  });
  return res.json(video)
}


  


}

module.exports = new deviceController()
