import React from 'react';
import brand_logo from '../images/brand_logo.png'

const Nav = () => {
  return (
    <div>
      <nav className='container'>
        <div className='logo'>
            <img src= {brand_logo} alt="" />
        </div>
        <ul>
          <li href="#">Home</li>
          <li href="#">About</li>
          <li href="#">Location</li>
          <li href="#">Contact Us</li>
        </ul>

        <button>Login</button>
      </nav>
    </div>
  );
}

export default Nav;
