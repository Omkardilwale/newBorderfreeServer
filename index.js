const express = require('express')
const app =express()


const mongoose = require('mongoose')
//connecting to DB
mongoose.connect('mongodb+srv://omkard:omkard@cluster0.2p2pc3n.mongodb.net/?retryWrites=true&w=majority',()=>{
    console.log("mongoose connected")
})
//.then( () => console.log("MongoDB Connected"))
/*.catch( (err) => console.log("MongoDB error"))*/


// mongoose.connect('mongodb://localhost:27017/laundry-service',()=>{
//     console.log("mongosee connected");
// });

const cors = require('cors')
app.use(cors())

app.use(express.json())



app.use( require("./routers/Homepage"))
app.use( require("./routers/order"))

//orders routes process.env.PORT ||
/*app.use("/order" ,require("./routes/orders"))*/


const PORT= process.env.PORT ||5000;

//creating server
app.listen(PORT,()=>{
    console.log("app is listing at port " + PORT);
})

