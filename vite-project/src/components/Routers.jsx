import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage.jsx";
import AboutUs from "./AboutUs.jsx";
import Tours from "./Tours.jsx";
import Contact from "./Contact.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export const Routers = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about_us" element={<AboutUs/>}/>
                    <Route path="/tours" element={<Tours/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}