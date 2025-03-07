import React, { useState } from "react";

import "./Navber.css";
import { assets } from "../../assets/assets";
const Navber = () => {
  const [menu, setMenu] = useState("");
  return (
    <div className="navber">
      <div className="logo">FoodFrame</div>
      <ul className="navber-menu">
        <li>Home</li>
        <li>menu</li>
        <li>contact-us</li>
      </ul>
      <div className="navber_right">
        <div className="navber-search-icon">
          <img src={assets.twitter_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button className="navber_button">Sign in</button>
      </div>
    </div>
  );
};
export default Navber;
