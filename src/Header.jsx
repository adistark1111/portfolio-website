import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
    // const logoImage = "https://i.imgur.com/1v46hfT.jpg";
    return (
        <div id="header">
            <div className="container">
                <nav>
                    {/* Logo and navigation bar is placed here  */}

                    <img src="https://i.imgur.com/1v46hfT.jpg" alt="Description" className='logo'/>


                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/services">Recommendation</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;