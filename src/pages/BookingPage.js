import React, { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import restaurant from "../assets/pics/restaurant.jpg";
import { fetchAPI } from "../bookingsAPI";

const BookingPage = () => {
    function updateTimes(date) {
        return fetchAPI(date);
    }

    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    return (
        <>
            <div className="bookingPage">
                <img
                    className="bookingPage__img"
                    src={restaurant}
                    alt="restaurant"
                />
                <div className="bookingPage__titleDiv">
                    <p className="bookingPage__title">Reserve a Table</p>
                </div>
            </div>
            <BookingForm
                availableTimes={availableTimes}
                updateTimes={dispatch}
            />
        </>
    );
};

export default BookingPage;
