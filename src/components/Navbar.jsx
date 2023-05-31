import React from 'react';

import "../styles/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <h1 id="nav-logo"><Link style={{textDecoration:"none", color:"black"}} to="/">Dev Seekho</Link></h1>

        <div id="nav-btn">
            <button id="nav-btn1"><Link style={{textDecoration:"none", color:"white"}} to="login">Login</Link></button>
            <button id="nav-btn1"><Link style={{textDecoration:"none", color:"white"}} to="signup">Sign Up</Link></button>
        </div>
    </nav>
  )
}

export default Navbar