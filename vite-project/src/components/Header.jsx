import {NavLink} from "react-router-dom";
import React from "react";
import '../App.css'

export const Header = () => {
    return (
        <div>
            <header>
                <div className="header">
                    <img className="logo" src="../../public/logo_safari.png" alt="header-logo"/>
                    <div>
                        <NavLink to="/" className="link"><span>Home Page</span></NavLink>
                        <NavLink to="/tours" className="link"><span>Tours</span></NavLink>
                        <NavLink to="/about_us" className="link"><span>About Us</span></NavLink>
                        <NavLink to="/contact" className="link"><span>Contact</span></NavLink>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;