import React from "react";
import logo from "../assets/logo/Logo.svg";

const Nav = () => {
    return (
        <nav>
            <div className="nav__wrapper">
                <section className="nav__secLogo">
                    <img className="nav__logo" src={logo} alt="logo" />
                </section>
                <section className="nav__secMenu">
                    <ul className="nav__menu">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/menu">Menu</a>
                        </li>
                        <li>
                            <a href="/reserve">Reservations</a>
                        </li>
                        <li>
                            <a href="/order">Order Online</a>
                        </li>
                        <li>
                            <a href="/login">Login</a>
                        </li>
                    </ul>
                </section>
            </div>
        </nav>
    );
};

export default Nav;
