var mongoose = require('mongoose')

var schema = mongoose.Schema;

var SomeModelSchema = new mongoose.Schema({
    Category: String,
    Product: String,
    Product_Details: String
})

var someModel = mongoose.model('someModel', 'SomeModelSchema')