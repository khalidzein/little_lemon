import React from "react";
import logo from "../assets/logo/Logo.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__imgDiv">
                <img className="footer__img" src={logo} alt="logo" />
            </div>
            <div className="footer__doormatNavigation">
                <ul>
                    <li>
                        <strong>Doormat Navigation</strong>
                    </li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <strong>Contact</strong>
                    </li>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <strong>Social Media</strong>
                    </li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
