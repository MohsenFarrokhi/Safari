import {NavLink} from "react-router-dom";
import React from "react";
import '../App.css'

export const Header = () => {
    return (
        <div>
            <header className="header">
                <img className="logo" src="../../public/logo_safari.png" alt="header-logo"/>
                <div className="link-style">
                    <NavLink to="/" className="navlink"><span>Home Page</span></NavLink>
                    <NavLink to="/tours"><span>Tours</span></NavLink>
                    <NavLink to="/about_us"><span>About Us</span></NavLink>
                    <NavLink to="/contact"><span>Contact</span></NavLink>
                </div>
            </header>
        </div>
    )
}

export default Header;