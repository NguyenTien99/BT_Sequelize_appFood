const { Order } = require("../models")

const createOrder = async (data) => {
    try {
        const createdOrder = await Order.create(data);
        return createdOrder;
    } catch (error) {
        throw error
    }
};

module.exports = {
    createOrder,
}