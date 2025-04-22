// import React from 'react';
// import './Navbar.css';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src="/logo.png" alt="Food Ordering Logo" />
//       </div>
//       <div className="navbar-search">
//         <input type="text" placeholder="Search..." />
//       </div>
//       <ul className="navbar-links">
//         <li><a href="home">Home</a></li>
//         <li><a href="about">About</a></li>
//         <li><a href="products">Products</a></li>
//         <li><a href="cart">Cart</a></li>
//         <li><a href="contact">Contact</a></li>
//         <Link to="/login">Login</Link>
//         <li><a href="signup">Signup</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



// Navbar.jsximport React from 'react';
// import './Navbar.css';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src="/logo.png" alt="Food Ordering Logo" />
//       </div>
//       <div className="navbar-search">
//         <input type="text" placeholder="Search..." />
//       </div>
//       <ul className="navbar-links">
//         <li><a href="home">Home</a></li>
//         <li><a href="about">About</a></li>
//         <li><a href="products">Products</a></li>
//         <li><a href="cart">Cart</a></li>
//         <li><a href="contact">Contact</a></li>
//         <Link to="/login">Login</Link>
//         <li><a href="signup">Signup</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


// import './Navbar.css';
// import { Link } from 'react-router-dom';
// import React, { useState, useRef } from 'react';

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setDropdownOpen((prevState) => !prevState);
//   };

//   const handleBlur = (e) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget)) {
//       setDropdownOpen(false);
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src="/logo.png" alt="Food Ordering Logo" />
//       </div>
//       {/* <div className="navbar-search">
//         <input type="text" placeholder="Search..." />
//       </div> */}
//       <ul className="navbar-links">
//         <li><a href="home">Home</a></li>
//         <li><a href="about">About</a></li>
//         <li
//           className="dropdown"
//           onClick={toggleDropdown}
//           onBlur={handleBlur}
//           tabIndex="0"
//           ref={dropdownRef}
//         >
//           <span>Products <span className="dropdown-icon">{dropdownOpen ? '▲' : '▼'}</span></span>
//           {dropdownOpen && (
//             <ul className="dropdown-menu">
//               <li><Link to="#italian">Italian</Link></li>
//               <li><Link to="#russian">Russian</Link></li>
//               <li><Link to="#chinese">Chinese</Link></li>
//               {/* Add more categories as needed */}
//             </ul>
//           )}
//         </li>
//         <li><a href="cart">Cart</a></li>
//         <li><a href="contact">Contact</a></li>
//         <Link to="/login">Login</Link>
//         <li><a href="signup">Signup</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import './Navbar.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Food Ordering Logo" />
      </div>
      {/* Uncomment and use this section if you want to add a search bar */}
      {/* <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div> */}
      <ul className="navbar-links">
        <li><a href="home">Home</a></li>
        <li><a href="about">About</a></li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li><Link to="/cart">Cart</Link></li>
        <li><a href="contact">Contact</a></li>
        <li><Link to="/login">Login</Link></li>
        <li><a href="signup">Signup</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
