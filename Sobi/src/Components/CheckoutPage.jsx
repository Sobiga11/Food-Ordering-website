import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './CheckoutPage.css'; // Add CSS file for styling if needed

const CheckoutPage = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('credit');

    // Calculate total price
    const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

    const handleCheckout = () => {
        // Implement checkout logic here
        alert('Checkout not implemented yet!');
    };

    return (
        <div className="checkout-page">
            <h1>Checkout</h1>
            <form onSubmit={(e) => { e.preventDefault(); handleCheckout(); }}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="payment-method">Payment Method:</label>
                    <select
                        id="payment-method"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                        <option value="credit">Credit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </div>
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.title} - {item.quantity} x ${item.price.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                    <div className="total">
                        <strong>Total: ${total.toFixed(2)}</strong>
                    </div>
                </div>
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default CheckoutPage;
