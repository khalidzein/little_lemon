import React from "react";
import firstCardPic from "../assets/pics/restA.jpg";
import secondCardPic from "../assets/pics/restB.jpg";

const About = () => {
    return (
        <div className="about">
            <div className="about__wrapper">
                <section className="about__header">
                    <p className="about__heading">Little Lemon</p>
                    <p className="about__subheading">Chicago</p>
                    <p className="about__info">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet. Amet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. Velit officia consequat duis
                        enim velit mollit.
                    </p>
                </section>
                <section className="about__picsCards">
                    <img
                        className="about__firstCardPic"
                        src={firstCardPic}
                        alt="chefs"
                    />
                    <img
                        className="about__secondCardPic"
                        src={secondCardPic}
                        alt="chefs"
                    />
                </section>
            </div>
        </div>
    );
};

export default About;
