
import React from "react"; 
// import "../style.css"

const Navbar = () => {
    return(
        <div className="navbar">
            <h1>Abhishek Shankar Choudhary</h1> 
            <div className="menu">
                 {/* create 5 menus using a tag */}
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Skills</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
            </div>
        </div>
    )
}

export default Navbar;