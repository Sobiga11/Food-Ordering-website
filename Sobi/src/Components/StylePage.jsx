// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { PRODUCTS, STYLES } from '../constants'; // Ensure these are imported
// import './StylePage.css'; // Import custom styles if any
// import ProductCard from './ProductCard'; // Import the ProductCard component

// const StylePage = () => {
//     const { styleId } = useParams(); // Get the style ID from the URL

//     // Find the style based on the styleId
//     const style = STYLES.find(style => style.id === parseInt(styleId));

//     if (!style) {
//         return <h2>Style not found</h2>;
//     }

//     // Filter products by the selected style
//     const filteredProducts = PRODUCTS.filter(product => product.styleId === style.id);

//     return (
//         <div className="style-page">
//             <h1>{style.name}</h1>
//             <p>{style.description}</p>
//             <div className="products-container">
//                 {filteredProducts.length > 0 ? (
//                     filteredProducts.map(product => (
//                         <ProductCard
//                             key={product.id}
//                             item={product}
//                         />
//                     ))
//                 ) : (
//                     <h2>No products available for this style</h2>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default StylePage;

// import React from 'react';
// import { useParams } from 'react-router-dom';
//  import { TAMIL_NADU_PRODUCTS } from '../constants';
//  import { DOSA_VARIETIES, IDLI_VARIETIES } from '../constants'; 
//  import { KERALA_PRODUCTS } from '../constants';
// import { ANDHRA_PRODUCTS } from '../constants';
// import { TELANGANA_PRODUCTS } from '../constants';
// import { KARNATAKA_PRODUCTS } from '../constants';
// import './StylePage.css';
// import ProductCard from './ProductCard';

// const StylePage = () => {
//     const { styleId } = useParams();
//     const parsedStyleId = parseInt(styleId, 10);

//     // Define products based on styleId
//     let products = [];
//     let title = '';

//     switch (parsedStyleId) {
//         case 1:
//             products = TAMIL_NADU_PRODUCTS;
//             title = 'Tamil Nadu Dishes';
//             break;
//         case 2:
//             products = KERALA_PRODUCTS;
//             title = 'Kerala Dishes';
//             break;
//         case 3:
//             products = ANDHRA_PRODUCTS;
//             title = 'Andhra Pradesh Dishes';
//             break;
//         case 4:
//             products = TELANGANA_PRODUCTS;
//             title = 'Telangana Dishes';
//             break;
//         case 5:
//             products = KARNATAKA_PRODUCTS;
//             title = 'Karnataka Dishes';
//             break;
//         default:
//             title = 'Style not found';
//             break;
//     }

  
//     return (
//         <div className="style-page">
//             <h1>{title}</h1>
//             <div className="products-container">
//                 {products.length > 0 ? (
//                     products.map(product => (
//                         <ProductCard key={product.id} item={product} />
//                     ))
//                 ) : (
//                     <h2>No products available for this style</h2>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default StylePage;

// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { TAMIL_NADU_PRODUCTS, KERALA_PRODUCTS, ANDHRA_PRODUCTS, TELANGANA_PRODUCTS, KARNATAKA_PRODUCTS } from '../constants';
// import { DOSA_VARIETIES, IDLI_VARIETIES } from '../constants'; // Import additional constants
// import './StylePage.css';
// import ProductCard from './ProductCard';

// const StylePage = () => {
//     const { styleId, dishId } = useParams();
//     const parsedStyleId = parseInt(styleId, 10);
//     const parsedDishId = parseInt(dishId, 10);

//     // Define products based on styleId
//     let products = [];
//     let title = '';

//     switch (parsedStyleId) {
//         case 1:
//             products = TAMIL_NADU_PRODUCTS;
//             title = 'Tamil Nadu Dishes';
//             break;
//         case 2:
//             products = KERALA_PRODUCTS;
//             title = 'Kerala Dishes';
//             break;
//         case 3:
//             products = ANDHRA_PRODUCTS;
//             title = 'Andhra Pradesh Dishes';
//             break;
//         case 4:
//             products = TELANGANA_PRODUCTS;
//             title = 'Telangana Dishes';
//             break;
//         case 5:
//             products = KARNATAKA_PRODUCTS;
//             title = 'Karnataka Dishes';
//             break;
//         default:
//             title = 'Style not found';
//             break;
//     }

//     // Define dish varieties based on dishId
//     let dishVarieties = [];
//     if (parsedDishId) {
//         switch (parsedDishId) {
//             case 1: // Dosa varieties
//                 dishVarieties = DOSA_VARIETIES;
//                 title = 'Dosa Varieties';
//                 break;
//             case 2: // Idli varieties
//                 dishVarieties = IDLI_VARIETIES;
//                 title = 'Idli Varieties';
//                 break;
//             // Add more cases for other dish varieties
//             default:
//                 title = 'Dish not found';
//                 break;
//         }
//     }

//     return (
//         <div className="style-page">
//             <h1>{title}</h1>
//             <div className="products-container">
//                 {(parsedDishId ? dishVarieties : products).length > 0 ? (
//                     (parsedDishId ? dishVarieties : products).map(product => (
//                         <ProductCard key={product.id} item={product} />
//                     ))
//                 ) : (
//                     <h2>No products available for this style or dish</h2>
//                 )}
//             </div>
//             {!parsedDishId && (
//                 <div className="dish-links">
//                     {products.map(product => (
//                         <Link key={product.id} to={`/styles/${styleId}/${product.id}`}>
//                             <div className="dish-item">
//                                 <img src={product.image} alt={product.name} />
//                                 <p>{product.name}</p>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default StylePage;

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { TAMIL_NADU_PRODUCTS, KERALA_PRODUCTS, ANDHRA_PRODUCTS, TELANGANA_PRODUCTS, KARNATAKA_PRODUCTS } from '../constants';
// import './StylePage.css';
// import ProductCard from './ProductCard';

// const StylePage = () => {
//     const { styleId } = useParams();
//     const parsedStyleId = parseInt(styleId, 10);

//     let products = [];
//     let title = '';

//     switch (parsedStyleId) {
//         case 1:
//             products = TAMIL_NADU_PRODUCTS;
//             title = 'Tamil Nadu Dishes';
//             break;
//         case 2:
//             products = KERALA_PRODUCTS;
//             title = 'Kerala Dishes';
//             break;
//         case 3:
//             products = ANDHRA_PRODUCTS;
//             title = 'Andhra Pradesh Dishes';
//             break;
//         case 4:
//             products = TELANGANA_PRODUCTS;
//             title = 'Telangana Dishes';
//             break;
//         case 5:
//             products = KARNATAKA_PRODUCTS;
//             title = 'Karnataka Dishes';
//             break;
//         default:
//             title = 'Style not found';
//             break;
//     }

//     return (
//         <div className="style-page">
//             <h1>{title}</h1>
//             <div className="products-container">
//                 {products.length > 0 ? (
//                     products.map(product => (
//                         <ProductCard key={product.id} item={product} />
//                     ))
//                 ) : (
//                     <h2>No products available for this style</h2>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default StylePage;


// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { TAMIL_NADU_PRODUCTS, KERALA_PRODUCTS, ANDHRA_PRODUCTS, TELANGANA_PRODUCTS, KARNATAKA_PRODUCTS, DOSA_VARIETIES } from '../constants';
// import './StylePage.css';
// import ProductCard from './ProductCard';

// const StylePage = () => {
//     const { styleId } = useParams();
//     const parsedStyleId = parseInt(styleId, 10);

//     const [selectedDish, setSelectedDish] = useState(null);

//     let products = [];
//     let title = '';

//     switch (parsedStyleId) {
//         case 1:
//             products = TAMIL_NADU_PRODUCTS;
//             title = 'Tamil Nadu Dishes';
//             break;
//         case 2:
//             products = KERALA_PRODUCTS;
//             title = 'Kerala Dishes';
//             break;
//         case 3:
//             products = ANDHRA_PRODUCTS;
//             title = 'Andhra Pradesh Dishes';
//             break;
//         case 4:
//             products = TELANGANA_PRODUCTS;
//             title = 'Telangana Dishes';
//             break;
//         case 5:
//             products = KARNATAKA_PRODUCTS;
//             title = 'Karnataka Dishes';
//             break;
//         default:
//             title = 'Style not found';
//             break;
//     }

//     const handleDishClick = (dish) => {
//         if (dish.name === "Dosa") {
//             setSelectedDish({
//                 ...dish,
//                 varieties: DOSA_VARIETIES,
//             });
//         } else {
//             setSelectedDish(null);
//         }
//     };

//     return (
//         <div className="style-page">
//             <h1>{title}</h1>
//             <div className="products-container">
//                 {products.length > 0 ? (
//                     products.map(product => (
//                         <div key={product.id} onClick={() => handleDishClick(product)}>
//                             <ProductCard item={product} />
//                         </div>
//                     ))
//                 ) : (
//                     <h2>No products available for this style</h2>
//                 )}
//             </div>

//             {selectedDish && (
//                 <div className="selected-dish-details">
//                     <h2>{selectedDish.name} Varieties</h2>
//                     <div className="varieties-container">
//                         {selectedDish.varieties.map((variety, index) => (
//                             <div key={index} className="variety-item">
//                                 <p>{variety.name}</p>
//                                 <p>Price: ${variety.price}</p>
//                                 <label>
//                                     Quantity:
//                                     <input type="number" min="1" defaultValue="1" />
//                                 </label>
//                                 <button className="add-to-cart-button">Add to Cart</button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default StylePage;

// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { TAMIL_NADU_PRODUCTS, KERALA_PRODUCTS, ANDHRA_PRODUCTS, TELANGANA_PRODUCTS, KARNATAKA_PRODUCTS } from '../constants';
// import './StylePage.css';
// import ProductCard from './ProductCard';

// const StylePage = () => {
//     const { styleId } = useParams();
//     const [hoveredProduct, setHoveredProduct] = useState(null); // State to track the hovered product

//     const parsedStyleId = parseInt(styleId, 10);

//     let products = [];
//     let title = '';

//     switch (parsedStyleId) {
//         case 1:
//             products = TAMIL_NADU_PRODUCTS;
//             title = 'Tamil Nadu Dishes';
//             break;
//         case 2:
//             products = KERALA_PRODUCTS;
//             title = 'Kerala Dishes';
//             break;
//         case 3:
//             products = ANDHRA_PRODUCTS;
//             title = 'Andhra Pradesh Dishes';
//             break;
//         case 4:
//             products = TELANGANA_PRODUCTS;
//             title = 'Telangana Dishes';
//             break;
//         case 5:
//             products = KARNATAKA_PRODUCTS;
//             title = 'Karnataka Dishes';
//             break;
//         default:
//             title = 'Style not found';
//             break;
//     }

//     return (
//         <div className="style-page">
//             <h1>{title}</h1>
//             <div className="products-container">
//                 {products.length > 0 ? (
//                     products.map(product => (
//                         <div 
//                             key={product.id} 
//                             onMouseEnter={() => setHoveredProduct(product)} 
//                             onMouseLeave={() => setHoveredProduct(null)} 
//                             className="product-wrapper"
//                         >
//                             <ProductCard item={product} />
//                         </div>
//                     ))
//                 ) : (
//                     <h2>No products available for this style</h2>
//                 )}
//             </div>

//             {/* Display hovered product details */}
//             {hoveredProduct && (
//                 <div className="product-details">
//                     <h2>{hoveredProduct.name}</h2>
//                     <p>{hoveredProduct.description}</p>
//                     <p>Price: ₹{hoveredProduct.price}</p>
//                     <p>Rating: {hoveredProduct.rating} ★</p>
//                     <p>Quantity: {hoveredProduct.quantity}</p>
//                     <button>Add to Cart</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default StylePage;


// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { TAMIL_NADU_PRODUCTS, KERALA_PRODUCTS, ANDHRA_PRODUCTS, TELANGANA_PRODUCTS, KARNATAKA_PRODUCTS } from '../constants';
// import './StylePage.css';

// const StylePage = () => {
//     const { styleId } = useParams();
//     const [hoveredProduct, setHoveredProduct] = useState(null);

//     const parsedStyleId = parseInt(styleId, 10);

//     let products = [];
//     let title = '';

//     switch (parsedStyleId) {
//         case 1:
//             products = TAMIL_NADU_PRODUCTS;
//             title = 'Tamil Nadu Dishes';
//             break;
//         case 2:
//             products = KERALA_PRODUCTS;
//             title = 'Kerala Dishes';
//             break;
//         case 3:
//             products = ANDHRA_PRODUCTS;
//             title = 'Andhra Pradesh Dishes';
//             break;
//         case 4:
//             products = TELANGANA_PRODUCTS;
//             title = 'Telangana Dishes';
//             break;
//         case 5:
//             products = KARNATAKA_PRODUCTS;
//             title = 'Karnataka Dishes';
//             break;
//         default:
//             title = 'Style not found';
//             break;
//     }

//     return (
//         <div className="style-page">
//             <h1>{title}</h1>
//             <div className="products-row">
//                 {products.length > 0 ? (
//                     products.map(product => (
//                         <div 
//                             key={product.id} 
//                             onMouseEnter={() => setHoveredProduct(product)} 
//                             onMouseLeave={() => setHoveredProduct(null)} 
//                             className="product-item"
//                         >
//                             <img src={product.image} alt={product.name} className="product-image" />
//                             {hoveredProduct?.id === product.id && (
//                                 <div className="product-description">
//                                     <h2>{product.name}</h2>
//                                     <p>{product.description}</p>
//                                     <p>Price: ₹{product.price}</p>
//                                     <p>Rating: {product.rating} ★</p>
//                                     <p>Quantity: {product.quantity}</p>
//                                     <button>Add to Cart</button>
//                                 </div>
//                             )}
//                         </div>
//                     ))
//                 ) : (
//                     <h2>No products available for this style</h2>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default StylePage;

// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { TAMIL_NADU_PRODUCTS, KERALA_PRODUCTS, ANDHRA_PRODUCTS, TELANGANA_PRODUCTS, KARNATAKA_PRODUCTS } from '../constants';
// import './StylePage.css';

// const StylePage = () => {
//     const { styleId } = useParams();
//     const [hoveredProduct, setHoveredProduct] = useState(null);
//     const [selectedProduct, setSelectedProduct] = useState(null);

//     const parsedStyleId = parseInt(styleId, 10);

//     let products = [];
//     let title = '';

//     switch (parsedStyleId) {
//         case 1:
//             products = TAMIL_NADU_PRODUCTS;
//             title = 'Tamil Nadu Dishes';
//             break;
//         case 2:
//             products = KERALA_PRODUCTS;
//             title = 'Kerala Dishes';
//             break;
//         case 3:
//             products = ANDHRA_PRODUCTS;
//             title = 'Andhra Pradesh Dishes';
//             break;
//         case 4:
//             products = TELANGANA_PRODUCTS;
//             title = 'Telangana Dishes';
//             break;
//         case 5:
//             products = KARNATAKA_PRODUCTS;
//             title = 'Karnataka Dishes';
//             break;
//         default:
//             title = 'Style not found';
//             break;
//     }

//     const handleProductClick = (product) => {
//         if (product.type === 'Dosa') {
//             setSelectedProduct(product);
//         }
//     };

//     return (
//         <div className="style-page">
//             <h1>{title}</h1>
//             <div className="products-row">
//                 {products.length > 0 ? (
//                     products.map(product => (
//                         <div 
//                             key={product.id} 
//                             onClick={() => handleProductClick(product)} 
//                             onMouseEnter={() => setHoveredProduct(product)} 
//                             onMouseLeave={() => setHoveredProduct(null)} 
//                             className="product-item"
//                         >
//                             <img src={product.image} alt={product.name} className="product-image" />
//                             {hoveredProduct?.id === product.id && (
//                                 <div className="product-description">
//                                     <h2>{product.name}</h2>
//                                     <p>{product.description}</p>
//                                     <p>Price: ₹{product.price}</p>
//                                     <p>Rating: {product.rating} ★</p>
//                                     <p>Quantity: {product.quantity}</p>
//                                     <button>Add to Cart</button>
//                                 </div>
//                             )}
//                         </div>
//                     ))
//                 ) : (
//                     <h2>No products available for this style</h2>
//                 )}
//             </div>

//             {selectedProduct && selectedProduct.type === 'Dosa' && (
//                 <div className="dosa-varieties">
//                     <h2>Varieties of {selectedProduct.name}</h2>
//                     {selectedProduct.varieties.map(variety => (
//                         <div key={variety.id} className="dosa-variety">
//                             <h3>{variety.name}</h3>
//                             <p>{variety.description}</p>
//                             <p>Price: ₹{variety.price}</p>
//                             <p>Rating: {variety.rating} ★</p>
//                             <button>Add to Cart</button>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default StylePage;

// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { TAMIL_NADU_PRODUCTS, KERALA_PRODUCTS, ANDHRA_PRODUCTS, TELANGANA_PRODUCTS, 
//     KARNATAKA_PRODUCTS, DOSA_VARIETIES,IDLI_VARIETIES,VADA_VARIETIES,SAMBHAR_VARIETIES } from '../constants';
// import './StylePage.css';

// const StylePage = () => {
//     const { styleId } = useParams();
//     const [hoveredProduct, setHoveredProduct] = useState(null);
//     const [selectedProduct, setSelectedProduct] = useState(null);  // For displaying varieties

//     const parsedStyleId = parseInt(styleId, 10);

//     let products = [];
//     let title = '';

//     switch (parsedStyleId) {
//         case 1:
//             products = TAMIL_NADU_PRODUCTS;
//             title = 'Tamil Nadu Dishes';
//             break;
//         case 2:
//             products = KERALA_PRODUCTS;
//             title = 'Kerala Dishes';
//             break;
//         case 3:
//             products = ANDHRA_PRODUCTS;
//             title = 'Andhra Pradesh Dishes';
//             break;
//         case 4:
//             products = TELANGANA_PRODUCTS;
//             title = 'Telangana Dishes';
//             break;
//         case 5:
//             products = KARNATAKA_PRODUCTS;
//             title = 'Karnataka Dishes';
//             break;
//         default:
//             title = 'Style not found';
//             break;
//     }

//     const handleProductClick = (product) => {
//         switch (product.name) {
//             case "Dosa":
//                 setSelectedProduct(DOSA_VARIETIES);
//                 break;
//             case "Idli":
//                 setSelectedProduct(IDLI_VARIETIES);
//                 break;
//             case "Vada":
//                 setSelectedProduct(VADA_VARIETIES);
//                 break;
//             case "Sambhar":
//                 setSelectedProduct(SAMBHAR_VARIETIES);
//                 break;
//             default:
//                 setSelectedProduct(null);
//                 break;
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
//                             className="product-item"
//                             onMouseEnter={() => setHoveredProduct(variety)} 
//                             onMouseLeave={() => setHoveredProduct(null)}
//                         >
//                             <img src={variety.image} alt={variety.name} className="product-image" />
//                             {hoveredProduct?.id === variety.id && (
//                                 <div className="product-description">
//                                     <h2>{variety.name}</h2>
//                                     <p>{variety.description}</p>
//                                     <p>Price: ₹{variety.price}</p>
//                                     <p>Rating: {variety.rating} ★</p>
//                                     <p>Quantity: {variety.quantity}</p>
//                                     <button>Add to Cart</button>
//                                 </div>
//                             )}
//                         </div>
//                     ))
//                 ) : (
//                     products.map(product => (
//                         <div 
//                             key={product.id} 
//                             onClick={() => handleProductClick(product)}
//                             onMouseEnter={() => setHoveredProduct(product)} 
//                             onMouseLeave={() => setHoveredProduct(null)} 
//                             className="product-item"
//                         >
//                             <img src={product.image} alt={product.name} className="product-image" />
//                             {hoveredProduct?.id === product.id && (
//                                 <div className="product-description">
//                                     <h2>{product.name}</h2>
//                                     <p>{product.description}</p>
//                                     <p>Price: ₹{product.price}</p>
//                                     <p>Rating: {product.rating} ★</p>
//                                     <p>Quantity: {product.quantity}</p>
//                                     <button>Add to Cart</button>
//                                 </div>
//                             )}
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default StylePage;

// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { TAMIL_NADU_PRODUCTS, KERALA_PRODUCTS, ANDHRA_PRODUCTS, TELANGANA_PRODUCTS, 
//     KARNATAKA_PRODUCTS, DOSA_VARIETIES, IDLI_VARIETIES, VADA_VARIETIES, SAMBHAR_VARIETIES } from '../constants';
// import './StylePage.css';

// const StylePage = () => {
//     const { styleId } = useParams();
//     const navigate = useNavigate();
//     const [hoveredProduct, setHoveredProduct] = useState(null);
//     const [selectedProduct, setSelectedProduct] = useState(null);  // For displaying varieties
//     const [cart, setCart] = useState([]);  // Cart state
//     const [buttonText, setButtonText] = useState('Add to Cart'); // Button text state

//     const parsedStyleId = parseInt(styleId, 10);

//     let products = [];
//     let title = '';

//     switch (parsedStyleId) {
//         case 1:
//             products = TAMIL_NADU_PRODUCTS;
//             title = 'Tamil Nadu Dishes';
//             break;
//         case 2:
//             products = KERALA_PRODUCTS;
//             title = 'Kerala Dishes';
//             break;
//         case 3:
//             products = ANDHRA_PRODUCTS;
//             title = 'Andhra Pradesh Dishes';
//             break;
//         case 4:
//             products = TELANGANA_PRODUCTS;
//             title = 'Telangana Dishes';
//             break;
//         case 5:
//             products = KARNATAKA_PRODUCTS;
//             title = 'Karnataka Dishes';
//             break;
//         default:
//             title = 'Style not found';
//             break;
//     }

//     const handleProductClick = (product) => {
//         switch (product.name) {
//             case "Dosa":
//                 setSelectedProduct(DOSA_VARIETIES);
//                 break;
//             case "Idli":
//                 setSelectedProduct(IDLI_VARIETIES);
//                 break;
//             case "Vada":
//                 setSelectedProduct(VADA_VARIETIES);
//                 break;
//             case "Sambhar":
//                 setSelectedProduct(SAMBHAR_VARIETIES);
//                 break;
//             default:
//                 setSelectedProduct(null);
//                 break;
//         }
//     };

//     const handleAddToCart = (product) => {
//         setCart([...cart, product]);
//         setButtonText('Go to Cart');
//     };

//     const handleGoToCart = () => {
//         navigate('/cart'); // Navigate to Cart Page
//     };

//     return (
//         <div className="style-page">
//             <h1>{title}</h1>
//             <div className="products-row">
//                 {selectedProduct ? (
//                     selectedProduct.map(variety => (
//                         <div 
//                             key={variety.id} 
//                             className="product-item"
//                             onMouseEnter={() => setHoveredProduct(variety)} 
//                             onMouseLeave={() => setHoveredProduct(null)}
//                         >
//                             <img src={variety.image} alt={variety.name} className="product-image" />
//                             {hoveredProduct?.id === variety.id && (
//                                 <div className="product-description">
//                                     <h2>{variety.name}</h2>
//                                     <p>{variety.description}</p>
//                                     <p>Price: ₹{variety.price}</p>
//                                     <p>Rating: {variety.rating} ★</p>
//                                     <p>Quantity: {variety.quantity}</p>
//                                     <button 
//                                         onClick={() => handleAddToCart(variety)}
//                                     >
//                                         {buttonText}
//                                     </button>
//                                     {buttonText === 'Go to Cart' && (
//                                         <button onClick={handleGoToCart}>Go to Cart</button>
//                                     )}
//                                 </div>
//                             )}
//                         </div>
//                     ))
//                 ) : (
//                     products.map(product => (
//                         <div 
//                             key={product.id} 
//                             onClick={() => handleProductClick(product)}
//                             onMouseEnter={() => setHoveredProduct(product)} 
//                             onMouseLeave={() => setHoveredProduct(null)} 
//                             className="product-item"
//                         >
//                             <img src={product.image} alt={product.name} className="product-image" />
//                             {hoveredProduct?.id === product.id && (
//                                 <div className="product-description">
//                                     <h2>{product.name}</h2>
//                                     <p>{product.description}</p>
//                                     <p>Price: ₹{product.price}</p>
//                                     <p>Rating: {product.rating} ★</p>
//                                     <p>Quantity: {product.quantity}</p>
//                                     <button 
//                                         onClick={() => handleAddToCart(product)}
//                                     >
//                                         {buttonText}
//                                     </button>
//                                     {buttonText === 'Go to Cart' && (
//                                         <button onClick={handleGoToCart}>Go to Cart</button>
//                                     )}
//                                 </div>
//                             )}
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default StylePage;

// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { TAMIL_NADU_PRODUCTS, KERALA_PRODUCTS, ANDHRA_PRODUCTS, TELANGANA_PRODUCTS, 
//     KARNATAKA_PRODUCTS, DOSA_VARIETIES, IDLI_VARIETIES, VADA_VARIETIES, SAMBHAR_VARIETIES } from '../constants';
// import './StylePage.css'; // Make sure to link the updated CSS file

// const StylePage = () => {
//     const { styleId } = useParams();
//     const [selectedProduct, setSelectedProduct] = useState(null);  // For displaying varieties

//     const parsedStyleId = parseInt(styleId, 10);

//     let products = [];
//     let title = '';

//     switch (parsedStyleId) {
//         case 1:
//             products = TAMIL_NADU_PRODUCTS;
//             title = 'Tamil Nadu Dishes';
//             break;
//         case 2:
//             products = KERALA_PRODUCTS;
//             title = 'Kerala Dishes';
//             break;
//         case 3:
//             products = ANDHRA_PRODUCTS;
//             title = 'Andhra Pradesh Dishes';
//             break;
//         case 4:
//             products = TELANGANA_PRODUCTS;
//             title = 'Telangana Dishes';
//             break;
//         case 5:
//             products = KARNATAKA_PRODUCTS;
//             title = 'Karnataka Dishes';
//             break;
//         default:
//             title = 'Style not found';
//             break;
//     }

//     const handleProductClick = (product) => {
//         switch (product.name) {
//             case "Dosa":
//                 setSelectedProduct(DOSA_VARIETIES);
//                 break;
//             case "Idli":
//                 setSelectedProduct(IDLI_VARIETIES);
//                 break;
//             case "Vada":
//                 setSelectedProduct(VADA_VARIETIES);
//                 break;
//             case "Sambhar":
//                 setSelectedProduct(SAMBHAR_VARIETIES);
//                 break;
//             default:
//                 setSelectedProduct(null);
//                 break;
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
//                             className="product-card"
//                         >
//                             <img src={variety.image} alt={variety.name} className="product-image" />
//                         </div>
//                     ))
//                 ) : (
//                     products.map(product => (
//                         <div 
//                             key={product.id} 
//                             onClick={() => handleProductClick(product)}
//                             className="product-card"
//                         >
//                             <img src={product.image} alt={product.name} className="product-image" />
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default StylePage;


// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { TAMIL_NADU_PRODUCTS, KERALA_PRODUCTS, ANDHRA_PRODUCTS, TELANGANA_PRODUCTS, 
//     KARNATAKA_PRODUCTS, DOSA_VARIETIES, IDLI_VARIETIES, VADA_VARIETIES, SAMBHAR_VARIETIES } from '../constants';
// import './StylePage.css';

// const StylePage = () => {
//     const { styleId } = useParams();
//     const [hoveredProduct, setHoveredProduct] = useState(null);
//     const [selectedProduct, setSelectedProduct] = useState(null);  // For displaying varieties

//     const parsedStyleId = parseInt(styleId, 10);

//     let products = [];
//     let title = '';

//     switch (parsedStyleId) {
//         case 1:
//             products = TAMIL_NADU_PRODUCTS;
//             title = 'Tamil Nadu Dishes';
//             break;
//         case 2:
//             products = KERALA_PRODUCTS;
//             title = 'Kerala Dishes';
//             break;
//         case 3:
//             products = ANDHRA_PRODUCTS;
//             title = 'Andhra Pradesh Dishes';
//             break;
//         case 4:
//             products = TELANGANA_PRODUCTS;
//             title = 'Telangana Dishes';
//             break;
//         case 5:
//             products = KARNATAKA_PRODUCTS;
//             title = 'Karnataka Dishes';
//             break;
//         default:
//             title = 'Style not found';
//             break;
//     }

//     const handleProductClick = (product) => {
//         switch (product.name) {
//             case "Dosa":
//                 setSelectedProduct(DOSA_VARIETIES);
//                 break;
//             case "Idli":
//                 setSelectedProduct(IDLI_VARIETIES);
//                 break;
//             case "Vada":
//                 setSelectedProduct(VADA_VARIETIES);
//                 break;
//             case "Sambhar":
//                 setSelectedProduct(SAMBHAR_VARIETIES);
//                 break;
//             default:
//                 setSelectedProduct(null);
//                 break;
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
//                                 <button className="style-page-btn">Add to Cart</button>
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
//                                 {/* <p className="style-page-price">Price: ₹{product.price}</p>
//                                 <p className="style-page-rating">Rating: {product.rating} ★</p>
//                                 <p className="style-page-quantity">Quantity: {product.quantity}</p>
//                                 <button className="style-page-btn">Add to Cart</button> */}
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default StylePage;



// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { additem } from '../redux/cartSlice';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from "react-toastify"; // Import the addToCart action
// import { TAMIL_NADU_PRODUCTS, KERALA_PRODUCTS, ANDHRA_PRODUCTS, TELANGANA_PRODUCTS, 
//     KARNATAKA_PRODUCTS, DOSA_VARIETIES, IDLI_VARIETIES, VADA_VARIETIES, SAMBHAR_VARIETIES } from '../constants';
// import './StylePage.css';

// const StylePage = () => {
//     const { styleId } = useParams();
//     const [hoveredProduct, setHoveredProduct] = useState(null);
//     const [selectedProduct, setSelectedProduct] = useState(null); // For displaying varieties
//     const dispatch = useDispatch(); // Use Redux dispatch

//     const parsedStyleId = parseInt(styleId, 10);

//     let products = [];
//     let title = '';

//     switch (parsedStyleId) {
//         case 1:
//             products = TAMIL_NADU_PRODUCTS;
//             title = 'Tamil Nadu Dishes';
//             break;
//         case 2:
//             products = KERALA_PRODUCTS;
//             title = 'Kerala Dishes';
//             break;
//         case 3:
//             products = ANDHRA_PRODUCTS;
//             title = 'Andhra Pradesh Dishes';
//             break;
//         case 4:
//             products = TELANGANA_PRODUCTS;
//             title = 'Telangana Dishes';
//             break;
//         case 5:
//             products = KARNATAKA_PRODUCTS;
//             title = 'Karnataka Dishes';
//             break;
//         default:
//             title = 'Style not found';
//             break;
//     }

//     const handleProductClick = (product) => {
//         switch (product.name) {
//             case "Dosa":
//                 setSelectedProduct(DOSA_VARIETIES);
//                 break;
//             case "Idli":
//                 setSelectedProduct(IDLI_VARIETIES);
//                 break;
//             case "Vada":
//                 setSelectedProduct(VADA_VARIETIES);
//                 break;
//             case "Sambhar":
//                 setSelectedProduct(SAMBHAR_VARIETIES);
//                 break;
//             default:
//                 setSelectedProduct(null);
//                 break;
//         }
//     };

//     const handleAddToCart = (variety) => {
//         dispatch(additem({
//             id: variety.id,
//             title: variety.name,
//             price: variety.price,
//             quantity: 1, // Default to 1 item when adding to cart
//             image: variety.image
//         }));
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
//                                 <button className="style-page-btn" onClick={() => handleAddToCart(variety)}>
//                                     Add to Cart
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

// export default StylePage;


// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useParams, useNavigate } from 'react-router-dom';
// import { additem } from '../redux/cartSlice';
// import { TAMIL_NADU_PRODUCTS, KERALA_PRODUCTS, ANDHRA_PRODUCTS, TELANGANA_PRODUCTS, 
//     KARNATAKA_PRODUCTS, DOSA_VARIETIES, IDLI_VARIETIES, VADA_VARIETIES, SAMBHAR_VARIETIES } from '../constants';
// import './StylePage.css';

// const StylePage = () => {
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
//             products = TAMIL_NADU_PRODUCTS;
//             title = 'Tamil Nadu Dishes';
//             break;
//         case 2:
//             products = KERALA_PRODUCTS;
//             title = 'Kerala Dishes';
//             break;
//         case 3:
//             products = ANDHRA_PRODUCTS;
//             title = 'Andhra Pradesh Dishes';
//             break;
//         case 4:
//             products = TELANGANA_PRODUCTS;
//             title = 'Telangana Dishes';
//             break;
//         case 5:
//             products = KARNATAKA_PRODUCTS;
//             title = 'Karnataka Dishes';
//             break;
//         default:
//             title = 'Style not found';
//             break;
//     }

//     const handleProductClick = (product) => {
//         switch (product.name) {
//             case "Dosa":
//                 setSelectedProduct(DOSA_VARIETIES);
//                 break;
//             case "Idli":
//                 setSelectedProduct(IDLI_VARIETIES);
//                 break;
//             case "Vada":
//                 setSelectedProduct(VADA_VARIETIES);
//                 break;
//             case "Sambhar":
//                 setSelectedProduct(SAMBHAR_VARIETIES);
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

// export default StylePage;

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useParams, useNavigate } from 'react-router-dom';
// import { additem } from '../redux/cartSlice';
// import { TAMIL_NADU_PRODUCTS, KERALA_PRODUCTS, ANDHRA_PRODUCTS, TELANGANA_PRODUCTS, 
//     KARNATAKA_PRODUCTS, DOSA_VARIETIES, IDLI_VARIETIES, VADA_VARIETIES, SAMBHAR_VARIETIES } from '../constants';
// import './StylePage.css';

// const StylePage = () => {
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
//             products = TAMIL_NADU_PRODUCTS;
//             title = 'Tamil Nadu Dishes';
//             break;
//         case 2:
//             products = KERALA_PRODUCTS;
//             title = 'Kerala Dishes';
//             break;
//         case 3:
//             products = ANDHRA_PRODUCTS;
//             title = 'Andhra Pradesh Dishes';
//             break;
//         case 4:
//             products = TELANGANA_PRODUCTS;
//             title = 'Telangana Dishes';
//             break;
//         case 5:
//             products = KARNATAKA_PRODUCTS;
//             title = 'Karnataka Dishes';
//             break;
//         default:
//             title = 'Style not found';
//             break;
//     }

//     const handleProductClick = (product) => {
//         switch (product.name) {
//             case "Dosa":
//                 setSelectedProduct(DOSA_VARIETIES);
//                 break;
//             case "Idli":
//                 setSelectedProduct(IDLI_VARIETIES);
//                 break;
//             case "Vada":
//                 setSelectedProduct(VADA_VARIETIES);
//                 break;
//             case "Sambhar":
//                 setSelectedProduct(SAMBHAR_VARIETIES);
//                 break;
//             default:
//                 setSelectedProduct(null);
//                 break;
//         }
//     };

//     const handleAddToCart = (variety) => {
//         // Ensure the "Add to Cart" button only works for Dosa varieties
//         if (selectedProduct === DOSA_VARIETIES) {
//             const isInCart = cartItems.some(item => item.id === variety.id);

//             if (!isInCart) {
//                 dispatch(additem({
//                     id: variety.id,
//                     title: variety.name,
//                     price: variety.price,
//                     quantity: 1,
//                     image: variety.image
//                 }));
//                 setCartItems([...cartItems, variety]);
//             } else {
//                 navigate('/cart');
//             }
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
//                                 {selectedProduct === DOSA_VARIETIES && (
//                                     <button 
//                                         className="style-page-btn" 
//                                         onClick={() => handleAddToCart(variety)}
//                                     >
//                                         {cartItems.some(item => item.id === variety.id) ? 'Go to Cart' : 'Add to Cart'}
//                                     </button>
//                                 )}
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

// export default StylePage;


// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useParams, useNavigate } from 'react-router-dom';
// import { additem } from '../redux/cartSlice';
// import { 
//     TAMIL_NADU_PRODUCTS, 
//     KERALA_PRODUCTS, 
//     ANDHRA_PRODUCTS, 
//     TELANGANA_PRODUCTS, 
//     KARNATAKA_PRODUCTS, 
//     DOSA_VARIETIES, 
//     IDLI_VARIETIES, 
//     VADA_VARIETIES, 
//     SAMBHAR_VARIETIES, 
//     APPAM_VARIETIES, 
//     PUTTU_VARIETIES, 
//     KADHI_VARIETIES, 
//     SADHYA_VARIETIES 
//   } from '../constants';
  
// import './StylePage.css';

// const StylePage = () => {
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
//             products = TAMIL_NADU_PRODUCTS;
//             title = 'Tamil Nadu Dishes';
//             break;
//         case 2:
//             products = KERALA_PRODUCTS;
//             title = 'Kerala Dishes';
//             break;
//         case 3:
//             products = ANDHRA_PRODUCTS;
//             title = 'Andhra Pradesh Dishes';
//             break;
//         case 4:
//             products = TELANGANA_PRODUCTS;
//             title = 'Telangana Dishes';
//             break;
//         case 5:
//             products = KARNATAKA_PRODUCTS;
//             title = 'Karnataka Dishes';
//             break;
//         default:
//             title = 'Style not found';
//             break;
//     }

//     const handleProductClick = (product) => {
//         switch (product.name) {
//             case "Dosa":
//                 setSelectedProduct(DOSA_VARIETIES);
//                 break;
//             case "Idli":
//                 setSelectedProduct(IDLI_VARIETIES);
//                 break;
//             case "Vada":
//                 setSelectedProduct(VADA_VARIETIES);
//                 break;
//             case "Sambhar":
//                 setSelectedProduct(SAMBHAR_VARIETIES);
//                 break;
//             default:
//                 setSelectedProduct(null);
//                 break;
//         }
//     };

//     const handleAddToCart = (variety) => {
//         // Enable "Add to Cart" functionality for all varieties
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

// export default StylePage;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { additem } from '../redux/cartSlice';
import { 
    TAMIL_NADU_PRODUCTS, 
    KERALA_PRODUCTS, 
    ANDHRA_PRODUCTS, 
    TELANGANA_PRODUCTS, 
    KARNATAKA_PRODUCTS, 
    DOSA_VARIETIES, 
    IDLI_VARIETIES, 
    VADA_VARIETIES, 
    SAMBHAR_VARIETIES,APPAM_VARIETIES,PUTTU_VARIETIES,KADHI_VARIETIES,SADHYA_VARIETIES,
    HYDERABADI_BIRYANI_VARIETIES,GONGURA_PACHADI_VARIETIES,PULIHORA_VARIETIES,ANDHRA_CHICKEN_CURRY_VARIETIES,
    SADDHI_VARIETIES,SARVA_PINDI_VARIETIES,HALEEM_VARIETIES,TELANGANA_BIRYANI_VARIETIES,
   BISI_BELE_BATH_VARIETIES,RAGI_MUDDE_VARIETIES,MASALA_DOSA_VARIETIES,UTTAPAM_VARIETIES
} from '../constants';
import './StylePage.css';

const StylePage = () => {
    const { styleId } = useParams();
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartItems, setCartItems] = useState([]); // Track items in the cart
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const parsedStyleId = parseInt(styleId, 10);

    let products = [];
    let title = '';

    switch (parsedStyleId) {
        case 1:
            products = TAMIL_NADU_PRODUCTS;
            title = 'Tamil Nadu Dishes';
            break;
        case 2:
            products = KERALA_PRODUCTS;
            title = 'Kerala Dishes';
            break;
        case 3:
            products = ANDHRA_PRODUCTS;
            title = 'Andhra Pradesh Dishes';
            break;
        case 4:
            products = TELANGANA_PRODUCTS;
            title = 'Telangana Dishes';
            break;
        case 5:
            products = KARNATAKA_PRODUCTS;
            title = 'Karnataka Dishes';
            break;
        default:
            title = 'Style not found';
            break;
    }

    const handleProductClick = (product) => {
        switch (product.name) {
            case "Dosa":
                setSelectedProduct(DOSA_VARIETIES);
                break;
            case "Idli":
                setSelectedProduct(IDLI_VARIETIES);
                break;
            case "Vada":
                setSelectedProduct(VADA_VARIETIES);
                break;
            case "Sambhar":
                setSelectedProduct(SAMBHAR_VARIETIES);
                break;
             // Kerala Dishes
             case "Appam":
                setSelectedProduct(APPAM_VARIETIES);
                break;
            case "Puttu":
                setSelectedProduct(PUTTU_VARIETIES);
                break;
            case "Kadhi":
                setSelectedProduct(KADHI_VARIETIES);
                break;
            case "Sadya":
                setSelectedProduct(SADHYA_VARIETIES);
                break;
            case "Hyderabadi Biryani":
                    setSelectedProduct(HYDERABADI_BIRYANI_VARIETIES);
                    break;
            case "Gongura Pachadi":
                setSelectedProduct(GONGURA_PACHADI_VARIETIES);
                break;
            case "Pulihora":
                setSelectedProduct(PULIHORA_VARIETIES);
                break;
            case "Andhra Chicken Curry":
                setSelectedProduct(ANDHRA_CHICKEN_CURRY_VARIETIES);
                break;
            case "Saddhi":
                setSelectedProduct(SADDHI_VARIETIES);
                break;
            case "Sarva Pindi":
                setSelectedProduct(SARVA_PINDI_VARIETIES);
                break;
            case "Haleem":
                setSelectedProduct(HALEEM_VARIETIES);
                break;
            case "Biryani":
                setSelectedProduct(TELANGANA_BIRYANI_VARIETIES);
                break;
            case "Bisi Bele Bath":
                setSelectedProduct(BISI_BELE_BATH_VARIETIES);
                break;
            case "Ragi Mudde":
                setSelectedProduct(RAGI_MUDDE_VARIETIES);
                break;
            case "Masala Dosa":
                setSelectedProduct(MASALA_DOSA_VARIETIES);
                break;
            case "Uttapam":
                setSelectedProduct(UTTAPAM_VARIETIES);
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
        <div className="style-page">
            <h1>{title}</h1>
            <div className="products-row">
                {selectedProduct ? (
                    selectedProduct.map(variety => (
                        <div 
                            key={variety.id} 
                            className="style-page-card"
                            onMouseEnter={() => setHoveredProduct(variety)} 
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            <img src={variety.image} alt={variety.name} className="style-page-image" />
                            <div className="style-page-content">
                                <h2 className="style-page-title">{variety.name}</h2>
                                <p className="style-page-description">{variety.description}</p>
                                <p className="style-page-price">Price: ₹{variety.price}</p>
                                <p className="style-page-rating">Rating: {variety.rating} ★</p>
                                <p className="style-page-quantity">Quantity: {variety.quantity}</p>
                                <button 
                                    className="style-page-btn" 
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
                            className="style-page-card"
                        >
                            <img src={product.image} alt={product.name} className="style-page-image" />
                            <div className="style-page-content">
                                <h2 className="style-page-title">{product.name}</h2>
                                <p className="style-page-description">{product.description}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default StylePage;
