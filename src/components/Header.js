import React from "react";
import food from "../assets/pics/restauranfood.jpg";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="header__wrapper">
                <section className="header__text">
                    <p className="header__header">Little Lemon</p>
                    <p className="header__subHeader">Chicago</p>
                    <p className="header__info">
                        We are a family owned Mediterranean restaurant, focused
                        on traditional recipes served with a modern twist.
                    </p>
                    <button
                        className="header__btn"
                        onClick={() => navigate("/reserve")}
                    >
                        Reserve a table
                    </button>
                </section>
                <section className="header__image">
                    <img className="header__foodImage" src={food} alt="food" />
                </section>
            </div>
        </header>
    );
};

export default Header;
