const { emit } = require("process")
const { Db } = require("mongodb")

db.orders.insertMany([
    {
        "prod": "naina",
        "Orderno": "24",
        "price": "50",
        "Items": [{ sk: "oranges", qt: 10, prices: 2.5 }]

    },
    {
        "prod": "kathia",
        "Orderno": "25",
        "price": "60",
        "Items": [{ sk: "grapes", qt: 8, prices: 2.5 }]
    }
])

var result = function () {
    emit(this.prod, this.price)
}

var reduceFuunction1 = function (prodId, prices) {
    return Array.sum(prices)
}

db.orders.mapReduce(
    result,
    reduceFuunction1,
    { out: "map_reduce_example" }
)

db.map_reduce_example.find().sort({ Orderno: 24 })