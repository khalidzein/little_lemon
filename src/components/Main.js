import React from "react";
import bruchetta from "../assets/pics/bruchetta.jpg";
import greek from "../assets/pics/greek salad.jpg";
import lemon from "../assets/pics/lemon dessert.jpg";

const Main = () => {
    return (
        <main className="main">
            <section className="main__title">
                <div className="main__titleWrapper">
                    <p className="main__heading">This weeks specials!</p>
                    <button className="main__btn">Online Menu</button>
                </div>
            </section>
            <section className="main__cards">
                <div className="main__cardWrapper">
                    <div className="main__card">
                        <img
                            src={greek}
                            alt="greek salad"
                            className="main__img"
                        />
                        <div className="main__foodPriceWrapper">
                            <p className="main__foodTitle">Greek Salad</p>
                            <p className="main__price">$ 12.99</p>
                        </div>
                        <p className="main__foodDesc">
                            The famous greek salad of crispy lettuce, peppers,
                            olives and our Chicago style feta cheese, garnished
                            with crunchy garlic and rosemary croutons.
                        </p>
                        <p className="main__order">Order a delivery</p>
                    </div>
                    <div className="main__card">
                        <img
                            src={bruchetta}
                            alt="bruchetta"
                            className="main__img"
                        />
                        <div className="main__foodPriceWrapper">
                            <p className="main__foodTitle">Bruchetta</p>
                            <p className="main__price">$ 5.99</p>
                        </div>
                        <p className="main__foodDesc main__bruchettaDesc">
                            Our Bruchetta is made from grilled bread that has
                            been smeared with garlic and seasoned with salt and
                            olive oil.
                        </p>
                        <p className="main__order main__bruchettaOrder">
                            Order a delivery
                        </p>
                    </div>
                    <div className="main__card">
                        <img
                            src={lemon}
                            alt="lemon dessert"
                            className="main__img"
                        />
                        <div className="main__foodPriceWrapper">
                            <p className="main__foodTitle">Lemon Dessert</p>
                            <p className="main__price">$ 5.00</p>
                        </div>
                        <p className="main__foodDesc">
                            This comes straight from grandma's recipe book,
                            every last ingredient has been sourced and is as
                            authentic as can be imagined.
                        </p>
                        <p className="main__order">Order a delivery</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;
