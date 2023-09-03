import React from "react";

const Testimonials = () => {
    return (
        <div className="testimonials">
            <section className="testimonials__headerSection">
                <p className="testimonials__header">Testimonials</p>
            </section>
            <section className="testimonials__cardsSection">
                <div className="testimonials__card">
                    <p className="testimonials__subheader">Rating</p>
                    <div className="testimonials__wrapper">
                        <img src="" alt="user" />
                        <p className="testimonials__name">Name</p>
                    </div>
                    <p>Review Text</p>
                </div>
                <div className="testimonials__card">
                    <p className="testimonials__subheader">Rating</p>
                    <div className="testimonials__wrapper">
                        <img src="" alt="user" />
                        <p className="testimonials__name">Name</p>
                    </div>
                    <p>Review Text</p>
                </div>
                <div className="testimonials__card">
                    <p className="testimonials__subheader">Rating</p>
                    <div className="testimonials__wrapper">
                        <img className="testimonials__img" src="" alt="user" />
                        <p className="testimonials__name">Name</p>
                    </div>
                    <p>Review Text</p>
                </div>
                <div className="testimonials__card">
                    <p className="testimonials__subheader">Rating</p>
                    <div className="testimonials__wrapper">
                        <img src="" alt="user" />
                        <p className="testimonials__name">Name</p>
                    </div>
                    <p>Review Text</p>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
