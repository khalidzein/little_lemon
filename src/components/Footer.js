import React from "react";
import logo from "../assets/logo/logo_mono.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__imgDiv">
                    <img className="footer__img" src={logo} alt="logo" />
                </div>
                <div className="footer__doormatNavigation">
                    <ul className="footer__doormatList">
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
                    <ul className="footer__contactList">
                        <li>
                            <strong>Contact</strong>
                        </li>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div>
                    <ul className="footer__socialList">
                        <li>
                            <strong>Social Media</strong>
                        </li>
                        <li>Twitter</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
