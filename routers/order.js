const router= require('express').Router();
const Card = require('../models/Cards');
const Product = require('../models/product')

// i wrote this routepage for saving the data on database2 ,,, when user will click card button in front end then data will be stored on database 2


router.get('/addprod', async(req, res)=>{
    try {
        const user = await Order.find();
        res.json(user)
    } catch (error) {
        console.log(error)
    }
})
router.post('/order',async(req, res)=>{
    try {
        const {title,price,offer,discription,image} = req.body;
        let user = new Product({title,price,offer,discription,image});
        let newuser = await user.save();
        res.json(newuser);
    } catch (error) {
        console.log(error)
    }
})
module.exports = router