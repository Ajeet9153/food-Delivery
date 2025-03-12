import React from 'react'
import './Header.css'
// Our component created after that we mound this component to home page ,go in home page
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining expertise.</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header