const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    firstname:{
        type:String,
        lowercase:true,
        minlength:[5, 'Name to short'],
        trim:true
    },
    lastname:{
        type:String,
        lowercase:true,
        minlength:[5, 'Name to short'],
        trim:true

    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true
    },
    product:{
        type:String,
        require:true
        
    },
    quantity:{
        type:String,
        require:true,

    },
    address:{
        type:String,
        require:true
    },
    zip:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    remark:{
        type:String,
        require:true
    }
},{timestamps:true});

const Order = mongoose.model('Order',orderSchema)

module.exports = Order
