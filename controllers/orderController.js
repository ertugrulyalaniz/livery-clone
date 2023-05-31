const Order = require('../models/OrderModel');

// Controller function to create a new order
const createOrder = async (req, res) => {
    try {
        const { user, product, quantity } = req.body;
        const order = new Order({
            user,
            product,
            quantity
        });
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create the order' });
    }
};

// Controller function to get an order by ID
const getOrderById = async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve the order' });
    }
};

// Controller function to update an order
const updateOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { user, product, quantity } = req.body;
        const updatedOrder = await Order.findByIdAndUpdate(
            orderId,
            { user, product, quantity },
            { new: true }
        );
        if (!updatedOrder) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json(updatedOrder);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the order' });
    }
};

// Controller function to delete an order
const deleteOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const deletedOrder = await Order.findByIdAndDelete(orderId);
        if (!deletedOrder) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the order' });
    }
};

module.exports = {
    createOrder,
    getOrderById,
    updateOrder,
    deleteOrder,
};
