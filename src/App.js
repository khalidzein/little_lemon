import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BookingForm from "./components/BookingForm";

function App() {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/reserve" element={<BookingForm />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
