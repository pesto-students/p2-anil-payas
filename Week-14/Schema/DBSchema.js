const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    loginId: Number,
    name:String,
    age:Number,
    assets:Array,
    fixedIncome:Number,
    Income:Number,
    Expenses:Number
})

const UserLoginSchema = mongoose.Schema({
    loginId:Number,
    username:String, 
    password:String
})

const AssetSchema = mongoose.Schema({
    assetId:Number,
    name:String,
    Price:Number,
    Profit:Number
})

const User = mongoose.model("User", UserSchema)
const Assets = mongoose.model("Assets", AssetSchema)
const UserLogin = mongoose.model("UserLogin", UserLoginSchema)

module.exports = {User,Assets,UserLogin}