import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
    const [availableTimes, setAvailableTimes] = useState([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]);

    const [time, setTime] = useState();

    const onChangeAvailableTime = (e) => {
        setTime(e.target.value);
    };

    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/reserve"
                        element={
                            <BookingPage
                                availableTime={availableTimes}
                                changeTime={onChangeAvailableTime}
                            />
                        }
                    />
                    <Route
                        path="/confirmation"
                        element={<ConfirmationPage />}
                    />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
