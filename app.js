const express = require('express');
const orderRouter =require('./routes/order')
const mongoose = require('mongoose')


const app = express();

//mongo  connection
const dbURI='mongodb+srv://Zj0mG5Zn5W00jYSv:Zj0mG5Zn5W00jYSv@cluster0.bwvxg.mongodb.net/loctach?retryWrites=true&w=majority';
mongoose.connect(dbURI,{ useNewUrlParser:true, useUnifiedTopology:true})
.then((result) => {
    app.listen(5000 , () => {
            console.log("Kings we start")
        })
    
})
.catch((err) => {
    console.log(err)
})







// Middleware and Static Files

app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public`));

// Body Parser request

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use((req,res,next) => {
    req.requestTime = new Date().toLocaleString();
    req.time = new Date().toISOString();
    next();
})

// Routers

// app.use(userRouter);
app.use(orderRouter);


