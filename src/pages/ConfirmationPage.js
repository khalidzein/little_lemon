import React from "react";
import restaurant from "../assets/pics/restaurant.jpg";

const ConfirmationPage = () => {
    return (
        <div className="confirmation">
            <img
                className="confirmation__img"
                src={restaurant}
                alt="restaurant"
            />
            <div className="confirmation__titleDiv">
                <p className="confirmation__title">
                    Your Reservation was successfully Placed!
                </p>
                <p className="confirmation__confirmation">
                    A Confirmation was sent to your email.
                </p>
                <p className="confirmation__thank">
                    Thank you for dining with us!
                </p>
            </div>
        </div>
    );
};

export default ConfirmationPage;
