// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { additem } from "../redux/cartSlice";
// import { Link } from 'react-router-dom';
// import './ProductCard.css';
// import {toast} from "react-toastify";

// const ProductCard = (props) => {
//     const dispatch = useDispatch();
//     const cartItems = useSelector((state) => state.cart.items);

//     // Check if the current item is in the cart
//     const isItemInCart = cartItems.some(item => item.id === props.item.id);

//     const addItem = () => {
//         dispatch(additem(props.item));
//         toast.success("Items added to cart");
//     };

//     return (
//         <div className="product-card">
//             {/* Link to={"/product/"+props.item.id} */}
//             <img src={props.item.image} alt={props.item.title} className="product-image" />
//             <div className="content">
//                 <h2 className="product-title">{props.item.title}</h2>
//                 <p className="product-description">{props.item.description}</p>
//                 <p className="product-price">${props.item.price}</p>

//                 {isItemInCart ? (
//                     <Link to="/cart">
//                         <button className="primary-btn">
//                             Go to Cart
                            
//                         </button>
//                     </Link>
//                 ) : (
//                     <button className="primary-btn" onClick={addItem}>
//                         Add to Cart
//                     </button>
//                 )}
//             </div>
//          </div>
       
//     );
// };

// export default ProductCard;



// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { additem } from "../redux/cartSlice";
// import { Link } from 'react-router-dom';
// import './ProductCard.css';
// import { toast } from "react-toastify";

// const ProductCard = (props) => {
//     const dispatch = useDispatch();
//     const cartItems = useSelector((state) => state.cart.items);

//     // Check if the current item is in the cart
//     const isItemInCart = cartItems.some(item => item.id === props.item.id);

//     const addItem = () => {
//         dispatch(additem(props.item));
//         toast.success("Item added to cart");
//     };

//     return (
//         <div className="product-card">
//             {/* Link to={"/product/"+props.item.id} */}
//             <img src={props.item.image} alt={props.item.title} className="product-image" />
//             <div className="content">
//                 <h2 className="product-title">{props.item.title}</h2>
//                 <p className="product-description">{props.item.description}</p>
//                 <p className="product-price">${props.item.price}</p>

//                 {isItemInCart ? (
//                     <Link to="/cart">
//                         <button className="primary-btn">
//                             Go to Cart
//                         </button>
//                     </Link>
//                 ) : (
//                     <button className="primary-btn" onClick={addItem}>
//                         Add to Cart
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ProductCard;

// ProductCard.js



// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { additem } from "../redux/cartSlice";
// import './ProductCard.css';
// import { toast } from "react-toastify";

// const ProductCard = (props) => {
//     const dispatch = useDispatch();
//     const cartItems = useSelector((state) => state.cart.items);
//      // Use history to navigate

//     // Check if the current item is in the cart
//     const isItemInCart = cartItems.some(item => item.id === props.item.id);

//     const addItem = () => {
//         dispatch(additem(props.item));
//         toast.success("Item added to cart");
//     };

//     const handleCardClick = () => {
//         history.push(`/product/${props.item.id}`);  // Navigate to product details page
//     };

//     return (
//         <div className="product-card" onClick={handleCardClick}>  {/* Navigate on card click */}
//             <img src={props.item.image} alt={props.item.title} className="product-image" />
//             <div className="content">
//                 <h2 className="product-title">{props.item.title}</h2>
//                 <p className="product-description">{props.item.description}</p>
//                 <p className="product-price">${props.item.price}</p>

//                 {isItemInCart ? (
//                     <Link to="/cart" onClick={e => e.stopPropagation()}>  {/* Prevent navigation on button click */}
//                         <button className="primary-btn">
//                             Go to Cart
//                         </button>
//                     </Link>
//                 ) : (
//                     <button className="primary-btn" onClick={(e) => { e.stopPropagation(); addItem(); }}>
//                         Add to Cart
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ProductCard;



// // ProductCard.js
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { additem } from "../redux/cartSlice";
// import './ProductCard.css';
// import { toast } from "react-toastify";

// const ProductCard = ({ item }) => {
//     const dispatch = useDispatch();
//     const cartItems = useSelector((state) => state.cart.items);
    

//     const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id);

//     const addItem = (e) => {
//         e.stopPropagation();  // Prevent navigating to the details page when clicking "Add to Cart"
//         dispatch(additem(item));
//         toast.success("Item added to cart");
//     };

//     const handleCardClick = () => {
//         history.push(`/product/${item.id}`);
//     };

//     return (
//         <div className="product-card" onClick={handleCardClick}>
//             <img src={item.image} alt={item.title} className="product-image" />
//             <div className="content">
//                 <h2 className="product-title">{item.title}</h2>
//                 <p className="product-description">{item.description}</p>
//                 <p className="product-price">${item.price}</p>

//                 {isItemInCart ? (
//                     <Link to="/cart" onClick={e => e.stopPropagation()}>
//                         <button className="primary-btn">
//                             Go to Cart
//                         </button>
//                     </Link>
//                 ) : (
//                     <button className="primary-btn" onClick={addItem}>
//                         Add to Cart
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ProductCard;


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { additem } from "../redux/cartSlice";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './ProductCard.css';
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const navigate = useNavigate(); // Initialize useNavigate

    const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id);

    const addItem = (e) => {
        e.stopPropagation();  // Prevent navigating to the details page when clicking "Add to Cart"
        dispatch(additem(item));
        toast.success("Item added to cart");
    };

    const handleCardClick = () => {
        navigate(`/product/${item.id}`); // Use navigate instead of history.push
    };

    return (
        <div className="product-card" onClick={handleCardClick}>
            <img src={item.image} alt={item.title} className="product-image" />
            <div className="content">
                <h2 className="product-title">{item.title}</h2>
                <p className="product-description">{item.description}</p>
                <p className="product-price">${item.price}</p>

                {isItemInCart ? (
                    <Link to="/cart" onClick={(e) => e.stopPropagation()}>
                        <button className="primary-btn">
                            Go to Cart
                        </button>
                    </Link>
                ) : (
                    <button className="primary-btn" onClick={addItem}>
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
