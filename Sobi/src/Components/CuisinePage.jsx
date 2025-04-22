
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useParams, useNavigate } from 'react-router-dom';
// import { additem } from '../redux/cartSlice';
// import { 
//     ITALIAN_PRODUCTS, 
//     CHINESE_PRODUCTS, 
//     MEXICAN_PRODUCTS, 
//     JAPANESE_PRODUCTS, 
//     THAI_PRODUCTS,
//     AMERICAN_PRODUCTS,
//     LEBANESE_PRODUCTS,
//     MEDITERRANEAN_PRODUCTS, 
//     PIZZA_MARGHERITA_VARIETIES,
//     SPAGHETTI_CARBONARA_VARIETIES,
//     KUNG_PAO_CHICKEN_VARIETIES,
//     DUMPLING_VARIETIES,
//     TACOS_VARIETIES,
//     GUACAMOLE_VARIETIES,
//     SUSHI_VARIETIES,
//     RAMEN_VARIETIES,
//     PAD_THAI_VARIETIES,
//     TOM_YUM_SOUP_VARIETIES,
//     CHEESEBURGER_VARIETIES,
//     FRIED_CHICKEN_VARIETIES,
//     HUMMUS_VARIETIES,
//     TABBOULEH_VARIETIES,
//     FALAFEL_VARIETIES,
//     GREEK_SALAD_VARIETIES
// } from '../constants';
// import './StylePage.css';

// const CuisinePage = () => {
//     const { styleId } = useParams();
//     const [hoveredProduct, setHoveredProduct] = useState(null);
//     const [selectedProduct, setSelectedProduct] = useState(null);
//     const [cartItems, setCartItems] = useState([]); // Track items in the cart
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const parsedStyleId = parseInt(styleId, 10);

//     let products = [];
//     let title = '';

//     switch (parsedStyleId) {
//         case 1:
//             products = ITALIAN_PRODUCTS;
//             title = 'Italian Dishes';
//             break;
//         case 2:
//             products = CHINESE_PRODUCTS;
//             title = 'Chinese Dishes';
//             break;
//         case 3:
//             products = MEXICAN_PRODUCTS;
//             title = 'Mexican Dishes';
//             break;
//         case 4:
//             products = JAPANESE_PRODUCTS;
//             title = 'Japanese Dishes';
//             break;
//         case 5:
//             products = THAI_PRODUCTS;
//             title = 'Thai Dishes';
//             break;
//         case 6:
//             products = AMERICAN_PRODUCTS;
//             title = 'Thai Dishes';
//             break;
//         case 7:
//             products = LEBANESE_PRODUCTS;
//             title = 'Thai Dishes';
//             break;
//         case 8:
//             products = MEDITERRANEAN_PRODUCTS;
//             title = 'Thai Dishes';
//             break;
    

//         default:
//             title = 'Style not found';
//             break;
//     }

//     const handleProductClick = (product) => {
//         switch (product.name) {
//             case "Pizza Margherita":
//                 setSelectedProduct(PIZZA_MARGHERITA_VARIETIES);
//                 break;
//             case "Spaghetti Carbonara":
//                 setSelectedProduct(SPAGHETTI_CARBONARA_VARIETIES);
//                 break;
//             case "Kung Pao Chicken":
//                 setSelectedProduct(KUNG_PAO_CHICKEN_VARIETIES);
//                 break;
//             case "Dumplings":
//                 setSelectedProduct(DUMPLING_VARIETIES);
//                 break;
//              // Kerala Dishes
//              case "Tacos":
//                 setSelectedProduct(TACOS_VARIETIES);
//                 break;
//             case "Guacamole":
//                 setSelectedProduct(GUACAMOLE_VARIETIES);
//                 break;
//             case "Sushi":
//                 setSelectedProduct(SUSHI_VARIETIES);
//                 break;
//             case "Ramen":
//                 setSelectedProduct(RAMEN_VARIETIES);
//                 break;
//             case "Pad Thai":
//                     setSelectedProduct(PAD_THAI_VARIETIES);
//                     break;
//             case "Tom Yum Soup":
//                 setSelectedProduct(TOM_YUM_SOUP_VARIETIES);
//                 break;
//             case "Cheeseburger":
//                 setSelectedProduct(CHEESEBURGER_VARIETIES);
//                 break;
//             case "Fried Chicken":
//                 setSelectedProduct(FRIED_CHICKEN_VARIETIES);
//                 break;
//             case "Hummus":
//                 setSelectedProduct(HUMMUS_VARIETIES);
//                 break;
//             case "Tabbouleh":
//                 setSelectedProduct(TABBOULEH_VARIETIES);
//                 break;
//             case "Falafel":
//                 setSelectedProduct(FALAFEL_VARIETIES);
//                 break;
//             case "Greek Salad":
//                 setSelectedProduct(GREEK_SALAD_VARIETIES);
//                 break;
            
           
//             default:
//                 setSelectedProduct(null);
//                 break;
//         }
//     };

//     const handleAddToCart = (variety) => {
//         const isInCart = cartItems.some(item => item.id === variety.id);

//         if (!isInCart) {
//             dispatch(additem({
//                 id: variety.id,
//                 title: variety.name,
//                 price: variety.price,
//                 quantity: 1,
//                 image: variety.image
//             }));
//             setCartItems([...cartItems, variety]);
//         } else {
//             navigate('/cart');
//         }
//     };

//     return (
//         <div className="style-page">
//             <h1>{title}</h1>
//             <div className="products-row">
//                 {selectedProduct ? (
//                     selectedProduct.map(variety => (
//                         <div 
//                             key={variety.id} 
//                             className="style-page-card"
//                             onMouseEnter={() => setHoveredProduct(variety)} 
//                             onMouseLeave={() => setHoveredProduct(null)}
//                         >
//                             <img src={variety.image} alt={variety.name} className="style-page-image" />
//                             <div className="style-page-content">
//                                 <h2 className="style-page-title">{variety.name}</h2>
//                                 <p className="style-page-description">{variety.description}</p>
//                                 <p className="style-page-price">Price: ₹{variety.price}</p>
//                                 <p className="style-page-rating">Rating: {variety.rating} ★</p>
//                                 <p className="style-page-quantity">Quantity: {variety.quantity}</p>
//                                 <button 
//                                     className="style-page-btn" 
//                                     onClick={() => handleAddToCart(variety)}
//                                 >
//                                     {cartItems.some(item => item.id === variety.id) ? 'Go to Cart' : 'Add to Cart'}
//                                 </button>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     products.map(product => (
//                         <div 
//                             key={product.id} 
//                             onClick={() => handleProductClick(product)}
//                             onMouseEnter={() => setHoveredProduct(product)} 
//                             onMouseLeave={() => setHoveredProduct(null)} 
//                             className="style-page-card"
//                         >
//                             <img src={product.image} alt={product.name} className="style-page-image" />
//                             <div className="style-page-content">
//                                 <h2 className="style-page-title">{product.name}</h2>
//                                 <p className="style-page-description">{product.description}</p>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default CuisinePage;




// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useParams, useNavigate } from 'react-router-dom';
// import { additem } from '../redux/cartSlice';
// import { 
//     ITALIAN_PRODUCTS, 
//     CHINESE_PRODUCTS, 
//     MEXICAN_PRODUCTS, 
//     JAPANESE_PRODUCTS, 
//     THAI_PRODUCTS,
//     AMERICAN_PRODUCTS,
//     LEBANESE_PRODUCTS,
//     MEDITERRANEAN_PRODUCTS, 
//     PIZZA_MARGHERITA_VARIETIES,
//     SPAGHETTI_CARBONARA_VARIETIES,
//     KUNG_PAO_CHICKEN_VARIETIES,
//     DUMPLING_VARIETIES,
//     TACOS_VARIETIES,
//     GUACAMOLE_VARIETIES,
//     SUSHI_VARIETIES,
//     RAMEN_VARIETIES,
//     PAD_THAI_VARIETIES,
//     TOM_YUM_SOUP_VARIETIES,
//     CHEESEBURGER_VARIETIES,
//     FRIED_CHICKEN_VARIETIES,
//     HUMMUS_VARIETIES,
//     TABBOULEH_VARIETIES,
//     FALAFEL_VARIETIES,
//     GREEK_SALAD_VARIETIES
// } from '../constants';
// import './CuisinePage.css';  // Change the CSS import to match your new component

// const CuisinePage = () => {
//     const { cuisineId } = useParams();  // Changed from styleId to cuisineId
//     const [hoveredProduct, setHoveredProduct] = useState(null);
//     const [selectedProduct, setSelectedProduct] = useState(null);
//     const [cartItems, setCartItems] = useState([]);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

   

//     let products = [];
//     let title = '';

//     switch (cuisineId) {  // Changed from styleId to cuisineId
//         case 'italian':
//             products = ITALIAN_PRODUCTS;
//             title = 'Italian Dishes';
//             break;
//         case 'chinese':
//             products = CHINESE_PRODUCTS;
//             title = 'Chinese Dishes';
//             break;
//         case 'mexican':
//             products = MEXICAN_PRODUCTS;
//             title = 'Mexican Dishes';
//             break;
//         case 'japanese':
//             products = JAPANESE_PRODUCTS;
//             title = 'Japanese Dishes';
//             break;
//         case 'thai':
//             products = THAI_PRODUCTS;
//             title = 'Thai Dishes';
//             break;
//         case 'american':
//             products = AMERICAN_PRODUCTS;
//             title = 'American Dishes';
//             break;
//         case 'lebanese':
//             products = LEBANESE_PRODUCTS;
//             title = 'Lebanese Dishes';
//             break;
//         case 'mediterranean':
//             products = MEDITERRANEAN_PRODUCTS;
//             title = 'Mediterranean Dishes';
//             break;
//         default:
//             title = 'Cuisine not found';
//             break;
//     }

//     const handleProductClick = (product) => {
//         switch (product.name) {
//             case "Pizza Margherita":
//                 setSelectedProduct(PIZZA_MARGHERITA_VARIETIES);
//                 break;
//             case "Spaghetti Carbonara":
//                 setSelectedProduct(SPAGHETTI_CARBONARA_VARIETIES);
//                 break;
//             case "Kung Pao Chicken":
//                 setSelectedProduct(KUNG_PAO_CHICKEN_VARIETIES);
//                 break;
//             case "Dumplings":
//                 setSelectedProduct(DUMPLING_VARIETIES);
//                 break;
//             case "Tacos":
//                 setSelectedProduct(TACOS_VARIETIES);
//                 break;
//             case "Guacamole":
//                 setSelectedProduct(GUACAMOLE_VARIETIES);
//                 break;
//             case "Sushi":
//                 setSelectedProduct(SUSHI_VARIETIES);
//                 break;
//             case "Ramen":
//                 setSelectedProduct(RAMEN_VARIETIES);
//                 break;
//             case "Pad Thai":
//                 setSelectedProduct(PAD_THAI_VARIETIES);
//                 break;
//             case "Tom Yum Soup":
//                 setSelectedProduct(TOM_YUM_SOUP_VARIETIES);
//                 break;
//             case "Cheeseburger":
//                 setSelectedProduct(CHEESEBURGER_VARIETIES);
//                 break;
//             case "Fried Chicken":
//                 setSelectedProduct(FRIED_CHICKEN_VARIETIES);
//                 break;
//             case "Hummus":
//                 setSelectedProduct(HUMMUS_VARIETIES);
//                 break;
//             case "Tabbouleh":
//                 setSelectedProduct(TABBOULEH_VARIETIES);
//                 break;
//             case "Falafel":
//                 setSelectedProduct(FALAFEL_VARIETIES);
//                 break;
//             case "Greek Salad":
//                 setSelectedProduct(GREEK_SALAD_VARIETIES);
//                 break;
//             default:
//                 setSelectedProduct(null);
//                 break;
//         }
//     };

//     const handleAddToCart = (variety) => {
//         const isInCart = cartItems.some(item => item.id === variety.id);

//         if (!isInCart) {
//             dispatch(additem({
//                 id: variety.id,
//                 title: variety.name,
//                 price: variety.price,
//                 quantity: 1,
//                 image: variety.image
//             }));
//             setCartItems([...cartItems, variety]);
//         } else {
//             navigate('/cart');
//         }
//     };

//     return (
//         <div className="cuisine-page">  {/* Updated class name */}
//             <h1>{title}</h1>
//             <div className="products-row">
//                 {selectedProduct ? (
//                     selectedProduct.map(variety => (
//                         <div 
//                             key={variety.id} 
//                             className="cuisine-page-card"  
//                             onMouseEnter={() => setHoveredProduct(variety)} 
//                             onMouseLeave={() => setHoveredProduct(null)}
//                         >
//                             <img src={variety.image} alt={variety.name} className="cuisine-page-image" /> 
//                             <div className="cuisine-page-content"> 
//                                 <h2 className="cuisine-page-title">{variety.name}</h2>
//                                 <p className="cuisine-page-description">{variety.description}</p>
//                                 <p className="cuisine-page-price">Price: ₹{variety.price}</p>
//                                 <p className="cuisine-page-rating">Rating: {variety.rating} ★</p>
//                                 <p className="cuisine-page-quantity">Quantity: {variety.quantity}</p>
//                                 <button 
//                                     className="cuisine-page-btn" 
//                                     onClick={() => handleAddToCart(variety)}
//                                 >
//                                     {cartItems.some(item => item.id === variety.id) ? 'Go to Cart' : 'Add to Cart'}
//                                 </button>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     products.map(product => (
//                         <div 
//                             key={product.id} 
//                             onClick={() => handleProductClick(product)}
//                             onMouseEnter={() => setHoveredProduct(product)} 
//                             onMouseLeave={() => setHoveredProduct(null)} 
//                             className="cuisine-page-card" 
//                         >
//                             <img src={product.image} alt={product.name} className="cuisine-page-image" /> 
//                             <div className="cuisine-page-content"> 
//                                 <h2 className="cuisine-page-title">{product.name}</h2>
//                                 <p className="cuisine-page-description">{product.description}</p>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default CuisinePage;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { additem } from '../redux/cartSlice';
import {
    ITALIAN_PRODUCTS, CHINESE_PRODUCTS, MEXICAN_PRODUCTS,
    JAPANESE_PRODUCTS, THAI_PRODUCTS, AMERICAN_PRODUCTS,
    LEBANESE_PRODUCTS, MEDITERRANEAN_PRODUCTS,
    PIZZA_MARGHERITA_VARIETIES, SPAGHETTI_CARBONARA_VARIETIES,
    KUNG_PAO_CHICKEN_VARIETIES, DUMPLING_VARIETIES,
    TACOS_VARIETIES, GUACAMOLE_VARIETIES, SUSHI_VARIETIES,
    RAMEN_VARIETIES, PAD_THAI_VARIETIES, TOM_YUM_SOUP_VARIETIES,
    CHEESEBURGER_VARIETIES, FRIED_CHICKEN_VARIETIES,
    HUMMUS_VARIETIES, TABBOULEH_VARIETIES, FALAFEL_VARIETIES,
    GREEK_SALAD_VARIETIES
} from '../constants';
import './CuisinePage.css';  // Ensure this path is correct

const CuisinePage = () => {
    const { cuisineId } = useParams();
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let products = [];
    let title = '';

    // Ensure cuisineId is treated as a string
    switch (cuisineId) {
        case 'italian':
            products = ITALIAN_PRODUCTS;
            title = 'Italian Dishes';
            break;
        case 'chinese':
            products = CHINESE_PRODUCTS;
            title = 'Chinese Dishes';
            break;
        case 'mexican':
            products = MEXICAN_PRODUCTS;
            title = 'Mexican Dishes';
            break;
        case 'japanese':
            products = JAPANESE_PRODUCTS;
            title = 'Japanese Dishes';
            break;
        case 'thai':
            products = THAI_PRODUCTS;
            title = 'Thai Dishes';
            break;
        case 'american':
            products = AMERICAN_PRODUCTS;
            title = 'American Dishes';
            break;
        case 'lebanese':
            products = LEBANESE_PRODUCTS;
            title = 'Lebanese Dishes';
            break;
        case 'mediterranean':
            products = MEDITERRANEAN_PRODUCTS;
            title = 'Mediterranean Dishes';
            break;
        default:
            title = 'Cuisine not found';
            break;
    }

    const handleProductClick = (product) => {
        switch (product.name) {
            case "Pizza Margherita":
                setSelectedProduct(PIZZA_MARGHERITA_VARIETIES);
                break;
            case "Spaghetti Carbonara":
                setSelectedProduct(SPAGHETTI_CARBONARA_VARIETIES);
                break;
            case "Kung Pao Chicken":
                setSelectedProduct(KUNG_PAO_CHICKEN_VARIETIES);
                break;
            case "Dumplings":
                setSelectedProduct(DUMPLING_VARIETIES);
                break;
            case "Tacos":
                setSelectedProduct(TACOS_VARIETIES);
                break;
            case "Guacamole":
                setSelectedProduct(GUACAMOLE_VARIETIES);
                break;
            case "Sushi":
                setSelectedProduct(SUSHI_VARIETIES);
                break;
            case "Ramen":
                setSelectedProduct(RAMEN_VARIETIES);
                break;
            case "Pad Thai":
                setSelectedProduct(PAD_THAI_VARIETIES);
                break;
            case "Tom Yum Soup":
                setSelectedProduct(TOM_YUM_SOUP_VARIETIES);
                break;
            case "Cheeseburger":
                setSelectedProduct(CHEESEBURGER_VARIETIES);
                break;
            case "Fried Chicken":
                setSelectedProduct(FRIED_CHICKEN_VARIETIES);
                break;
            case "Hummus":
                setSelectedProduct(HUMMUS_VARIETIES);
                break;
            case "Tabbouleh":
                setSelectedProduct(TABBOULEH_VARIETIES);
                break;
            case "Falafel":
                setSelectedProduct(FALAFEL_VARIETIES);
                break;
            case "Greek Salad":
                setSelectedProduct(GREEK_SALAD_VARIETIES);
                break;
            default:
                setSelectedProduct(null);
                break;
        }
    };

    const handleAddToCart = (variety) => {
        const isInCart = cartItems.some(item => item.id === variety.id);

        if (!isInCart) {
            dispatch(additem({
                id: variety.id,
                title: variety.name,
                price: variety.price,
                quantity: 1,
                image: variety.image
            }));
            setCartItems([...cartItems, variety]);
        } else {
            navigate('/cart');
        }
    };

    return (
        <div className="cuisine-page">
            <h1>{title}</h1>
            <div className="products-row">
                {selectedProduct ? (
                    selectedProduct.map(variety => (
                        <div 
                            key={variety.id} 
                            className="cuisine-page-card"  
                            onMouseEnter={() => setHoveredProduct(variety)} 
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            <img src={variety.image} alt={variety.name} className="cuisine-page-image" /> 
                            <div className="cuisine-page-content"> 
                                <h2 className="cuisine-page-title">{variety.name}</h2>
                                <p className="cuisine-page-description">{variety.description}</p>
                                <p className="cuisine-page-price">Price: ₹{variety.price}</p>
                                <p className="cuisine-page-rating">Rating: {variety.rating} ★</p>
                                <p className="cuisine-page-quantity">Quantity: {variety.quantity}</p>
                                <button 
                                    className="cuisine-page-btn" 
                                    onClick={() => handleAddToCart(variety)}
                                >
                                    {cartItems.some(item => item.id === variety.id) ? 'Go to Cart' : 'Add to Cart'}
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    products.map(product => (
                        <div 
                            key={product.id} 
                            onClick={() => handleProductClick(product)}
                            onMouseEnter={() => setHoveredProduct(product)} 
                            onMouseLeave={() => setHoveredProduct(null)} 
                            className="cuisine-page-card"
                        >
                            <img src={product.image} alt={product.name} className="cuisine-page-image" /> 
                            <div className="cuisine-page-content"> 
                                <h2 className="cuisine-page-title">{product.name}</h2>
                                <p className="cuisine-page-description">{product.description}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CuisinePage;


