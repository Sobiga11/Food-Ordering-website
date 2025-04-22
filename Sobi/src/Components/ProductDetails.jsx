// // ProductDetails.js
// import React from "react";
// import { useParams } from "react-router-dom";
// import { PRODUCTS } from "../constants";

// const ProductDetails = () => {
//     const { id } = useParams();
//     const product = PRODUCTS.find(item => item.id === parseInt(id));

//     if (!product) {
//         return <h2>Product not found</h2>;
//     }

//     return (
//         <div className="product-details">
//             <h2>{product.title}</h2>
//             <img src={product.image} alt={product.title} className="product-image" />
//             <p className="product-description">{product.description}</p>
//             <p className="product-price">${product.price}</p>
//             {/* Add any additional product details here */}
//         </div>
//     );
// };

// export default ProductDetails;
// ProductDetails.js

import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../constants";
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const product = PRODUCTS.find(item => item.id === parseInt(id));

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div className="product-details">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} className="product-image" />
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <h3>Related Images</h3>
            <div className="related-images">
                {product.relatedImages.map((img, index) => (
                    <img key={index} src={img} alt={`Related ${index}`} className="related-image" />
                ))}
            </div>
        </div>
    );
};

export default ProductDetails;
