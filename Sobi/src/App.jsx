// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Login from './Components/Login';
// import Signup from './Components/Signup';
// import About from './Components/About';
// import Contact from './Components/Contact';

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/home" element={<Home />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/signup" element={<Signup />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/contact" element={<Contact />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;



// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Products from './components/Products';
// import Header from './components/Header';
// import Cart from './components/Cart';
// import ProductDetails from './components/ProductDetails';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import SearchBar from './components/SearchBar';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const App = () => {
//     return (
//         <div>
//             <BrowserRouter>
//                 <ToastContainer />
//                 <Header />
//                 <SearchBar />
//                 <Routes>
//                     <Route path="/" element={<Products />} />
//                     <Route path="/products/:productId" element={<ProductDetails />} />
//                     <Route path="/cart" element={<Cart />} />
//                     <Route path="/signup" element={<Signup />} />
//                     <Route path="/login" element={<Login />} />
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// };

// export default App;





// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Login from './Components/Login';
// import Signup from './Components/Signup';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Products from './Components/Products';
// import ProductDetails from "./Components/ProductDetails";
// import Cart from './Components/Cart';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const App = () => {
//     return (
//         <div>
//             <BrowserRouter>
//             <Navbar />
//                 <ToastContainer />
                
                
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/home" element={<Home />} />
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/signup" element={<Signup />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/contact" element={<Contact />} />
//                     <Route path="/products" element={<Products />} />
//                     <Route path="/product/:id" component={ProductDetails} />
//                     <Route path="/cart" element={<Cart />} />
                  
                    
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// };

// export default App;



// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Login from './Components/Login';
// import Signup from './Components/Signup';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Products from './Components/Products';
// import StylePage from './Components/StylePage';
// import ProductDetails from "./Components/ProductDetails";
// import Cart from './Components/Cart';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const App = () => {
//     return (
//         <div>
//             <BrowserRouter>
//                 <Navbar />
//                 <ToastContainer />
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/home" element={<Home />} />
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/signup" element={<Signup />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/contact" element={<Contact />} />
//                     <Route path="/products" element={<Products />} />
//                     <Route path="/product/:id" element={<ProductDetails />} /> {/* Updated to use element */}
//                     <Route path="/style/:styleId" element={<StylePage />} /> {/* Add this route */}
//                     <Route path="/styles/:styleId/:dishId" element={<StylePage />} />
//                     <Route path="/cart" element={<Cart />} />
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// };

// export default App;


// src/App.jsx



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import SearchBar from './Components/SearchBar';
import About from './Components/About';
import Contact from './Components/Contact';
import Products from './Components/Products';
import StylePage from './Components/StylePage';
import CuisinePage from './Components/CuisinePage';
import ProductDetails from "./Components/ProductDetails";
import Cart from './Components/Cart';
import CheckoutPage from './Components/CheckoutPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <SearchBar/>
                <ToastContainer />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cuisine/:cuisineId" element={<CuisinePage />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/style/:styleId" element={<StylePage />} />
                    <Route path="/styles/:styleId/:dishId" element={<StylePage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
