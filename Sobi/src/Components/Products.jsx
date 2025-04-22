// import React from "react";
// import { useSelector } from "react-redux";
// import { PRODUCTS } from "../constants";
// import './Product.css';
// // import ProductCard from "./ProductCard";

// const Products = (props) => {
//     const searchTerm = useSelector((state) => state.products.searchTerm);
//     const filteredProducts = PRODUCTS.filter(product =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     if (filteredProducts.length === 0){
//       return(
//         <h2>
//           <center>No items found</center>
//         </h2>
//       );
//     }

//     return (
//         <>
//             <h2>Products</h2>
//             <div className="products-container">
//                 {filteredProducts.map((el) => (
//                     <ProductCard
//                         key={el.id}
//                         item={el}
//                         setCart={props.setCart}
//                         cart={props.cart}
//                     />
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Products;



// import React from "react";
// import { useSelector } from "react-redux";
// import { PRODUCTS } from "../constants";
// import './Product.css';
// import ProductCard from "./ProductCard";


// const Products = () => {
//     const searchTerm = useSelector((state) => state.products.searchTerm);
//     const filteredProducts = PRODUCTS.filter(product =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     if (filteredProducts.length === 0) {
//         return (
//             <h2>
//                 <center>No items found</center>
//             </h2>
//         );
//     }

//     return (
//         <>
//             <h2>Our Delicious Products</h2>
//             <div className="products-container">
//                 {filteredProducts.map((el) => (
//                     <ProductCard
//                         key={el.id}
//                         item={el}
//                     />
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Products;



// Products.js

// import React from "react";
// import { useSelector } from "react-redux";
// import { PRODUCTS, STYLES } from "../constants";
// import './Product.css';
// import ProductCard from "./ProductCard";

// const Products = () => {
//     const searchTerm = useSelector((state) => state.products.searchTerm);
//     const filteredProducts = PRODUCTS.filter(product =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     if (filteredProducts.length === 0) {
//         return (
//             <h2>
//                 <center>No items found</center>
//             </h2>
//         );
//     }

//     return (
//         <>
//             {/* First Section: Food Styles */}
//             <section className="food-styles">
//                 <h2>Explore Our Food Styles</h2>
//                 <div className="food-styles-container">
//                     {FOOD_STYLES.map(style => (
//                         <div key={style.id} className="food-style">
//                             <img src={style.image} alt={style.name} />
//                             <p>{style.name}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Second Section: Products */}
//             <h2>Our Delicious Products</h2>
//             <div className="products-container">
//                 {filteredProducts.map((el) => (
//                     <ProductCard
//                         key={el.id}
//                         item={el}
//                     />
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Products;

// import React from "react";
// import { useSelector } from "react-redux";
// import { PRODUCTS, STYLES } from "../constants"; // Ensure FOOD_STYLES is imported
// import './Product.css';
// import ProductCard from "./ProductCard";

// const Products = () => {
//     const searchTerm = useSelector((state) => state.products.searchTerm);
//     const filteredProducts = PRODUCTS.filter(product =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     if (filteredProducts.length === 0) {
//         return (
//             <h2>
//                 <center>No items found</center>
//             </h2>
//         );
//     }

//     return (
//         <>
//             {/* First Section: Food Styles */}
//             <section className="food-styles">
//                 <h2>Explore Our Food Styles</h2>
//                 <div className="food-styles-container">
//                     {STYLES.map(style => (
//                         <div key={style.id} className="food-style">
//                             <img src={style.image} alt={style.name} />
//                             <p>{style.name}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Second Section: Products */}
//             <h2>Our Delicious Products</h2>
//             <div className="products-container">
//                 {filteredProducts.map((el) => (
//                     <ProductCard
//                         key={el.id}
//                         item={el}
//                     />
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Products;


// import React from "react";
// import { useSelector } from "react-redux";
// import { PRODUCTS, STYLES, CUISINES } from "../constants"; // Ensure CUISINES is imported
// import './Product.css';
// import ProductCard from "./ProductCard";

// const Products = () => {
//     const searchTerm = useSelector((state) => state.products.searchTerm);
//     const filteredProducts = PRODUCTS.filter(product =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     if (filteredProducts.length === 0) {
//         return (
//             <h2>
//                 <center>No items found</center>
//             </h2>
//         );
//     }

//     return (
//         <>
//             {/* First Section: Food Styles */}
//             <section className="food-styles">
//                 <h2>Explore Our Food Styles</h2>
//                 <div className="food-styles-container">
//                     {STYLES.map(style => (
//                         <div key={style.id} className="food-style">
//                             <img src={style.image} alt={style.name} />
//                             <p>{style.name}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Second Section: International Cuisines 2D Slider */}
//             <section className="cuisine-slider">
//                 <h2>International Cuisines</h2>
//                 <div className="cuisine-slider-container">
//                     {CUISINES.map(cuisine => (
//                         <div key={cuisine.id} className="cuisine-item">
//                             <img src={cuisine.image} alt={cuisine.name} />
//                             <p>{cuisine.name}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Third Section: Products */}
//             <h2>Our Delicious Products</h2>
//             <div className="products-container">
//                 {filteredProducts.map((el) => (
//                     <ProductCard
//                         key={el.id}
//                         item={el}
//                     />
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Products;



// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from 'react-router-dom';
// import { PRODUCTS, STYLES, CUISINES } from "../constants";
// import './Product.css';
// import ProductCard from "./ProductCard";

// const Products = () => {
//     const searchTerm = useSelector((state) => state.products.searchTerm);
//     const filteredProducts = PRODUCTS.filter(product =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     if (filteredProducts.length === 0) {
//         return (
//             <h2>
//                 <center>No items found</center>
//             </h2>
//         );
//     }

//     return (
//         <>
//             {/* First Section: Food Styles */}
//             <section className="food-styles">
//                 <h2>Explore Our Food Styles</h2>
//                 <div className="food-styles-container">
//                     {STYLES.map(style => (
//                         <Link to={`/style/${style.id}`} key={style.id} className="food-style">
//                             <img src={style.image} alt={style.name} />
//                             <p>{style.name}</p>
//                         </Link>
//                     ))}
//                 </div>
//             </section>

//             {/* Second Section: International Cuisines 2D Slider */}
//             <section className="cuisine-slider">
//                 <h2>International Cuisines</h2>
//                 <div className="cuisine-slider-container">
//                     {CUISINES.map(cuisine => (
//                         <div key={cuisine.id} className="cuisine-item">
//                             <img src={cuisine.image} alt={cuisine.name} />
//                             <p>{cuisine.name}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Third Section: Products */}
//             <h2>Our Delicious Products</h2>
//             <div className="products-container">
//                 {filteredProducts.map((el) => (
//                     <ProductCard
//                         key={el.id}
//                         item={el}
//                     />
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Products;



// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from 'react-router-dom';
// import { PRODUCTS, STYLES, CUISINES } from "../constants";
// import './Product.css';
// import ProductCard from "./ProductCard";

// const Products = () => {
//     const searchTerm = useSelector((state) => state.products.searchTerm);
//     const filteredProducts = PRODUCTS.filter(product =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     if (filteredProducts.length === 0) {
//         return (
//             <h2>
//                 <center>No items found</center>
//             </h2>
//         );
//     }

//     return (
//         <>
//             {/* First Section: Food Styles */}
//             <section className="food-styles">
//                 <h2>Explore Our Food Styles</h2>
//                 <div className="food-styles-container">
//                     {STYLES.map(style => (
//                         <Link to={`/style/${style.id}`} key={style.id} className="food-style">
//                             <img src={style.image} alt={style.name} />
//                             <p>{style.name}</p>
//                         </Link>
//                     ))}
//                 </div>
//             </section>

//             {/* Second Section: International Cuisines */}
//             <section className="cuisine-slider">
//                 <h2>International Cuisines</h2>
//                 <div className="cuisine-slider-container">
//                     {CUISINES.map(cuisine => (
//                         <Link to={`/cuisine/${cuisine.id}`} key={cuisine.id} className="cuisine-item">
//                             <img src={cuisine.image} alt={cuisine.name} />
//                             <p>{cuisine.name}</p>
//                         </Link>
//                     ))}
//                 </div>
//             </section>

//             {/* Third Section: Products */}
//             <h2>Our Delicious Products</h2>
//             <div className="products-container">
//                 {filteredProducts.map((el) => (
//                     <ProductCard
//                         key={el.id}
//                         item={el}
//                     />
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Products;


// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from 'react-router-dom';
// import { PRODUCTS, STYLES, CUISINES } from "../constants";
// import './Product.css';
// import ProductCard from "./ProductCard";

// const Products = () => {
//     const searchTerm = useSelector((state) => state.products.searchTerm);
//     const filteredProducts = PRODUCTS.filter(product =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     if (filteredProducts.length === 0) {
//         return (
//             <h2>
//                 <center>No items found</center>
//             </h2>
//         );
//     }

//     return (
//         <>
//             {/* First Section: Food Styles */}
//             <section className="food-styles">
//                 <h2>Explore Our Food Styles</h2>
//                 <div className="food-styles-container">
//                     {STYLES.map(style => (
//                         <Link to={`/style/${style.id}`} key={style.id} className="food-style">
//                             <img src={style.image} alt={style.name} />
//                             <p>{style.name}</p>
//                         </Link>
//                     ))}
//                 </div>
//             </section>

//             {/* Second Section: International Cuisines */}
//             <section className="cuisine-slider">
//                 <h2>International Cuisines</h2>
//                 <div className="cuisine-slider-container">
//                     {CUISINES.map(cuisine => (
//                         <Link to={`/cuisine/${cuisine.id}`} key={cuisine.id} className="cuisine-item">
//                             <img src={cuisine.image} alt={cuisine.name} />
//                             <p>{cuisine.name}</p>
//                         </Link>
//                     ))}
//                 </div>
//             </section>

//             {/* Third Section: Products */}
//             <h2>Our Delicious Products</h2>
//             <div className="products-container">
//                 {filteredProducts.map((el) => (
//                     <ProductCard
//                         key={el.id}
//                         item={el}
//                     />
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Products;


// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from 'react-router-dom';
// import { PRODUCTS, STYLES, CUISINES } from "../constants";
// import './Product.css';
// import ProductCard from "./ProductCard";

// const Products = () => {
//     // Get the search term from Redux store
//     const searchTerm = useSelector((state) => state.products.searchTerm);

//     // Filter products based on the search term
//     const filteredProducts = PRODUCTS.filter(product =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <>
//             {/* First Section: Food Styles */}
//             <section className="food-styles">
//                 <h2>Explore Our Food Styles</h2>
//                 <div className="food-styles-container">
//                     {STYLES.map(style => (
//                         <Link to={`/style/${style.id}`} key={style.id} className="food-style">
//                             <img src={style.image} alt={style.name} />
//                             <p>{style.name}</p>
//                         </Link>
//                     ))}
//                 </div>
//             </section>

//             {/* Second Section: International Cuisines */}
//             <section className="cuisine-slider">
//                 <h2>International Cuisines</h2>
//                 <div className="cuisine-slider-container">
//                     {CUISINES.map(cuisine => (
//                         <Link to={`/cuisine/${cuisine.id}`} key={cuisine.id} className="cuisine-item">
//                             <img src={cuisine.image} alt={cuisine.name} />
//                             <p>{cuisine.name}</p>
//                         </Link>
//                     ))}
//                 </div>
//             </section>

//             {/* Third Section: Products */}
//             <section className="products-section">
//                 <h2>Our Delicious Products</h2>
//                 <div className="products-container">
//                     {filteredProducts.length > 0 ? (
//                         filteredProducts.map((product) => (
//                             <ProductCard
//                                 key={product.id}
//                                 item={product}
//                             />
//                         ))
//                     ) : (
//                         <h2>
//                             <center>No items found</center>
//                         </h2>
//                     )}
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Products;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { PRODUCTS, STYLES, CUISINES } from "../constants";
import './Product.css';
import ProductCard from "./ProductCard";

const Products = () => {
    // Get the search term from the Redux store
    const searchTerm = useSelector((state) => state.products.searchTerm);

    // Filter products based on the search term
    const filteredProducts = PRODUCTS.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {/* First Section: Food Styles */}
            <section className="food-styles">
                <h2>Explore Our Food Styles</h2>
                <div className="food-styles-container">
                    {STYLES.map(style => (
                        <Link 
                            to={`/style/${style.id}`} 
                            key={style.id} 
                            className="food-style"
                        >
                            <img src={style.image} alt={style.name} />
                            <p>{style.name}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Second Section: International Cuisines */}
            <section className="cuisine-slider">
                <h2>International Cuisines</h2>
                <div className="cuisine-slider-container">
                    {CUISINES.map(cuisine => (
                        <Link 
                            to={`/cuisine/${cuisine.id}`} 
                            key={cuisine.id} 
                            className="cuisine-item"
                        >
                            <img src={cuisine.image} alt={cuisine.name} />
                            <p>{cuisine.name}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Third Section: Products */}
            <section className="products-section">
                <h2>Our Delicious Products</h2>
                <div className="products-container">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                item={product}
                            />
                        ))
                    ) : (
                        <h2>
                            <center>No items found</center>
                        </h2>
                    )}
                </div>
            </section>
        </>
    );
};

export default Products;
