const Product = require('../models/ProductModel');

// Controller function to create a new product
const createProduct = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const product = new Product({
            name,
            description,
            price
        });
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create the product' });
    }
};

// Controller function to get a product by ID
const getProductById = async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve the product' });
    }
};

// Controller function to update a product
const updateProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const { name, description, price } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { name, description, price },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the product' });
    }
};

// Controller function to delete a product
const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the product' });
    }
};

module.exports = {
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
};
