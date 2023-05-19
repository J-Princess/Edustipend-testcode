import React from "react";
import Button from "../components/button";
import "../App.css"

const Header = () =>{
    return(
         <header>
            <h1></h1>
            <nav style={navStyles}>
                <ul style={ulStyles}>
                <li style={liStyle}>Contact Us</li>
                <li style={liStyle}><Button data="Sign Up" /></li>
                </ul>
            </nav>
         </header>
    )
};


export default Header

const ulStyles = {
    listStyle: 'none',
    display: 'flex',
  };
  
  const liStyle = {
    marginRight: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };
  const navStyles = {
    display: 'flex',
    justifyContent: 'flex-end',
  };