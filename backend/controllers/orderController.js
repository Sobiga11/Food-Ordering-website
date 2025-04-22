const Cart = require("../models/cartModel");
const Product = require("../models/productModel");
const Order = require("../models/orderModel");

exports.createOrder = async (req, res) => {
    const { user_id } = req.user;
    const { customer_name, customer_address, customer_phone } = req.body;

    try {
        const cart = await Cart.findOne({ user_id });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        let subtotal = 0;

const products = await Promise.all(
    cart.products.map(async (product) => {
        const productDetails = await Product.findOne({ id: product.product_id });

        if (productDetails) {
            const price = parseFloat(productDetails.price) || 0; // Ensure price is a number
            const quantity = parseInt(product.quantity, 10) || 0; // Ensure quantity is a number

            const itemTotal = price * quantity;

            if (!isNaN(itemTotal)) {
                subtotal += itemTotal;
            } else {
                console.error(`Invalid calculation for product ID: ${product.product_id}`);
            }

            console.log(`Subtotal after product ${product.product_id}: ${subtotal}`);

            return {
                product_id: productDetails.id,
                quantity: product.quantity,
                price: productDetails.price
            };
        }

        return null;
    })
);

// Final check for NaN before proceeding
if (isNaN(subtotal) || subtotal < 0) {
    return res.status(400).json({ error: "Invalid subtotal calculation" });
}

console.log(`Final Subtotal: ${subtotal}`);

// Continue with the rest of your code...



        const order = new Order({
            user_id,
            customer_name,
            customer_address,
            customer_phone,
            email: req.user.email,
            products: products.filter(p => p !== null),
            subtotal,
            estimated_delivery_date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000) // 10 days from now
        });

        await order.save();

        await Cart.deleteOne({ user_id });

        res.status(201).json({ message: "Order placed successfully", order });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

exports.getOrders = async (req, res) => {
    const { user_id } = req.user;

    try {
        const orders = await Order.find({ user_id });

        if (orders.length === 0) {
            return res.status(404).json({ message: "No orders found" });
        }

        res.status(200).json({ orders });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};
