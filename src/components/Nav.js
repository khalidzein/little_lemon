import React from "react";
import logo from "../assets/logo/Logo.svg";

const Nav = () => {
    return (
        <nav>
            <img className="nav" src={logo} alt="logo" />
            <ul className="nav__menu">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>MENU</li>
                <li>RESERVATIONS</li>
                <li>ORDER ONLINE</li>
                <li>LOGIN</li>
            </ul>
        </nav>
    );
};

export default Nav;
