import React from "react";

const TestimonialsCards = ({ img, name, review }) => {
    return (
        <>
            <div className="testimonials__card">
                <p className="testimonials__subheader">Rating</p>
                <div className="testimonials__wrapper">
                    <img src={img} alt="user" />
                    <p className="testimonials__name">{name}</p>
                </div>
                <p>{review}</p>
            </div>
        </>
    );
};

export default TestimonialsCards;
