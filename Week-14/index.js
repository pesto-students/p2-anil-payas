const fetchData = require("./DBSetup");
const express = require('express')
const app = express()
const {User,Assets,UserLogin} = require("./Schema/DBSchema");
const { ObjectID } = require("bson");

app.use(express.json())

app.post("/signup", async (req,res) => {
    const response = await new UserLogin(req.body).save();
    res.send(response)
})

app.post("/addUserData/:loginId", async (req,res) => {
    let newEntry = {
        loginId: req.params.loginId,
        name:req.body.name,
        age:req.body.age,
        Income:req.body.Income
    }
    const userResponse = await new User(newEntry).save();
    const loginResponse = await new UserLogin({loginId:userResponse.loginId}).save();

    res.send({userResponse,loginResponse})
})

app.get("/getLoginData/:loginId", async (req,res) => {
    let result = await User.findOne({'loginId':req.params.loginId});
    result = await UserLogin.findOne({'loginId':result.loginId});
    res.send(result)
})

app.listen(4040, () => console.log("Server up and Running"))

// fetchData().catch(console.error)