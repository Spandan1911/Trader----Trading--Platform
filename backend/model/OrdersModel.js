const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrderModel = new model("orer", OrdersSchema);
