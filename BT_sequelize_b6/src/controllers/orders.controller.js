const { response } = require("../helpers/response");
const ordersService = require("../services/orders.service");

const createOrders = () => {
  return async (req, res) => {
    try {
      const data = req.body;
      const createdOrders = await ordersService.createOrder(data);
      res.status(200).json(response(createdOrders));
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };
};

module.exports = {
    createOrders,
}