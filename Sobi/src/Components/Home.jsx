// import React from 'react';
// import './Home.css';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <div className="left-side">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-a1Rj_irvMy0ttxygaFZEYvxpq8qmkZP7w&s" alt="Delivery Boy" className="delivery-boy" />
//       </div>
//       <div className="center-content">
//         <h1>Welcome to Foodie Delight</h1>
//         <p>Experience the best food delivery service in town. Fresh, hot, and right at your doorstep.</p>
//       </div>
//       <div className="right-side">
//         <img src="https://p1.hiclipart.com/preview/621/910/501/food-2-food.jpg" alt="Food Item 1" className="food-item" />
//         <img src="https://pngimagesfree.com/wp-content/uploads/Indian-Food-Samosa_pngimagesfree.com_-1.png" alt="Food Item 2" className="food-item" />
//         <img src="https://image.similarpng.com/very-thumbnail/2022/01/Delicious-fast-food-sandwich-on-transparent-background-PNG.png" alt="Food Item 3" className="food-item" />
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import './Home.css';
import video from "../assets/video.mp4.mp4"; // Adjust the path as needed

const Home = () => {
  return (
    <div className="home-container">
      <video className="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="content-overlay">
        <div className="center-content">
          <h1>Welcome to Foodie Delight</h1>
          <p>Experience the best food delivery service in town. Fresh, hot, and right at your doorstep.</p>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
