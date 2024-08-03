const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('User', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    first_name: {type: DataTypes.STRING,defaultValue:'User'},
    adres_delivery: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    number_schet: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
})


const Categoria = sequelize.define('Categoria', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    nach_price:{type: DataTypes.STRING},
    photo:{type: DataTypes.TEXT},
})


const Item = sequelize.define('Item', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    price: {type: DataTypes.FLOAT},
    skidka: {type: DataTypes.INTEGER},
    description0: {type: DataTypes.STRING},
    description_title: {type: DataTypes.STRING},
    description_value: {type: DataTypes.STRING},
    dop_info: {type: DataTypes.STRING},
    delivery: {type: DataTypes.STRING},
})

const Item_photo = sequelize.define('Item_photo', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    photo: {type: DataTypes.TEXT},
})
const Basket_Item = sequelize.define('Basket_Item', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    photo: {type: DataTypes.TEXT},
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    qauantity: {type: DataTypes.STRING},
    price: {type: DataTypes.STRING},
    skidka: {type: DataTypes.INTEGER},

})

const Order_Item = sequelize.define('Order_Item', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    photo: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    qauantity: {type: DataTypes.STRING},
    price: {type: DataTypes.STRING},
})

const Order= sequelize.define('Order', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

    Name: {type: DataTypes.STRING},
    Familia: {type: DataTypes.STRING},
    Phone: {type: DataTypes.STRING},
    Mail: {type: DataTypes.STRING},


    adres: {type: DataTypes.STRING},
    price: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},

})

const ItemPhoto= sequelize.define('ItemPhoto', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    color: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},

})
const Love= sequelize.define('Love', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

})


User.hasMany(Love, {as: 'Love'})
Love.belongsTo(User)

Item.hasMany(Love, {as: 'Love'});
Love.belongsTo(Item)

User.hasMany(Basket_Item, {as: 'Basket_Item'});
Basket_Item.belongsTo(User)

User.hasMany(Order, {as: 'Order'});
Order.belongsTo(User)

Order.hasMany(Order_Item, {as: 'Order_Item'});
Order_Item.belongsTo(Order)

Categoria.hasMany(Item, {as: 'Item'});
Item.belongsTo(Categoria)

Item.hasMany(Item_photo, {as: 'Item_photo'});
Item_photo.belongsTo(Item)



Item.hasMany(ItemPhoto, {as: 'ItemPhoto'});
ItemPhoto.belongsTo(Item)

// Item.hasMany(ItenSize, {as: 'ItenSize'});
// ItenSize.belongsTo(Item)




Item.hasMany(Basket_Item, {as: 'Basket_Item'});
Basket_Item.belongsTo(Item)


module.exports = {
    Love,
User,
Order,
Order_Item,
Categoria,
Item,
Item_photo,
Basket_Item,
}
