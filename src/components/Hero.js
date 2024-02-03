import React from 'react';
import flipkart from '../images/flipkart.png'
import amazon from '../images/amazon.png'
import shoe_image from '../images/shoe_image.png'
const Hero = () => {
  return (
    <main className='hero container'>
      <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. NIKE, INC. IS AN AMERICAN MULTINATIONAL ASSOCIATION THAT IS INVOLVED IN THE DESIGN, DEVELOPMENT, MANUFACTURING AND WORLDWIDE MARKETING AND SALES OF APPAREL, FOOTWEAR, ACCESSORIES, EQUIPMENT AND SERVICES.</p>
      
        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Category</button>
        </div>

        <div className="shopping">
           <p>Also Available Now</p>
        </div>

        <div className="brandicons">
            <img src={flipkart} alt="" />
            <img src={amazon} alt="" />
        </div>
      </div>
     

      
      <div className="hero-image">
        <img src={shoe_image} height="400px" alt="" />
      </div>
      
    </main>
  );
}

export default Hero;
