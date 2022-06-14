const router = require('express').Router();
const Card = require('../models/Cards');

///////////////////////////////i wrote this routepage is only for get api fron database1 and display it on frontend  

router.post('/homepage', async(req,res)=>{
    try{
        const newCard = new Card({
            title: req.body.title,
            discription: req.body.discription,
            image: req.body.image,
            price: req.body.price,
            offer: req.body.offer,
        });
        const card = await newCard.save();
        res.status(200).json(card);
    }catch{
        res.status(500).json(error);
    }
});

router.get("/getdata", async (req, res) => {
    try {
      const post = await Card.find();
      res.json(post);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error fetching post");
    }
  });


module.exports = router;