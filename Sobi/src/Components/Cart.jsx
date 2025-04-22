// import React, { useMemo } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { incrementItem, decrementItem, removeFromCart } from '../redux/cartSlice';
// import { Link} from 'react-router-dom';
// import './Cart.css';

// const Cart = () => {
//     const cartItems = useSelector((state) => state.cart.items);
//     const dispatch = useDispatch();

//     // Calculate total using useMemo for performance optimization
//     const total = useMemo(() => {
//         let sum = 0;
//         cartItems.forEach((item) => {
//             sum += item.quantity * item.price; // Account for quantity
//         });
//         return sum;
//     }, [cartItems]);

//     // Handle increment action
//     const handleIncrement = (item) => {
//         dispatch(incrementItem(item));
//     };

//     // Handle decrement action
//     const handleDecrement = (item) => {
//         dispatch(decrementItem(item));
//     };

//     // Handle remove action
//     const handleRemove = (itemId) => {
//         dispatch(removeFromCart(itemId));
//     };

//     // Return message if cart is empty
//     if (cartItems.length === 0) {
//         return <h3 className="empty-cart-message">Your cart is empty! Start adding some delicious items.</h3>;
//     }

//     return (
//         <div className="cart-container">
//             <div className="cart-items">
//                 {cartItems.map((item) => (
//                     <div key={item.id} className="cart-item-card">
//                         <img src={item.image} alt={item.title} className="food-image" />
//                         <div className="item-details">
//                             <div className="item-title">{item.title}</div>
//                             <div className="quantity-container">
//                                 <button className="quantity-btn" onClick={() => handleDecrement(item)}>-</button>
//                                 <span className="quantity-count">{item.quantity}</span>
//                                 <button className="quantity-btn" onClick={() => handleIncrement(item)}>+</button>
//                             </div>
//                             <div className="item-price">${item.price.toFixed(2)}</div>
//                             <button className="remove-btn" onClick={() => handleRemove(item.id)}>Remove</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="right-container">
//                 <div className="header">Price Details</div>
//                 <div className="sub-total">Subtotal: ${total.toFixed(2)}</div>
//                 <div className="items-count">({cartItems.length} item{cartItems.length > 1 ? 's' : ''})</div>
//                 <div className="delivery-fees">Delivery Fees: $1.00</div>
//                 <div className="total">Total: ${(total + 1).toFixed(2)}</div>
//                 <Link className="checkout-btn">Checkout</Link>
//             </div>
//         </div>
//     );
// };

// export default Cart;

import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementItem, decrementItem, removeFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    // Calculate total using useMemo for performance optimization
    const total = useMemo(() => {
        let sum = 0;
        cartItems.forEach((item) => {
            sum += item.quantity * item.price; // Account for quantity
        });
        return sum;
    }, [cartItems]);

    // Handle increment action
    const handleIncrement = (item) => {
        dispatch(incrementItem(item));
    };

    // Handle decrement action
    const handleDecrement = (item) => {
        dispatch(decrementItem(item));
    };

    // Handle remove action
    const handleRemove = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    // Return message if cart is empty
    if (cartItems.length === 0) {
        return <h3 className="empty-cart-message">Your cart is empty! Start adding some delicious items.</h3>;
    }

    return (
        <div className="cart-container">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item-card">
                        <img src={item.image} alt={item.title} className="food-image" />
                        <div className="item-details">
                            <div className="item-title">{item.title}</div>
                            <div className="quantity-container">
                                <button className="quantity-btn" onClick={() => handleDecrement(item)}>-</button>
                                <span className="quantity-count">{item.quantity}</span>
                                <button className="quantity-btn" onClick={() => handleIncrement(item)}>+</button>
                            </div>
                            <div className="item-price">${item.price.toFixed(2)}</div>
                            <button className="remove-btn" onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="right-container">
                <div className="header">Price Details</div>
                <div className="sub-total">Subtotal: ${total.toFixed(2)}</div>
                <div className="items-count">({cartItems.length} item{cartItems.length > 1 ? 's' : ''})</div>
                <div className="delivery-fees">Delivery Fees: $1.00</div>
                <div className="total">Total: ${(total + 1).toFixed(2)}</div>
                <Link className="checkout-btn" to="/checkout">Checkout</Link> {/* Added 'to' prop */}
            </div>
        </div>
    );
};

export default Cart;
