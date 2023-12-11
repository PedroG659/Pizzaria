import "./App.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return (
        <div className="App">
            <Router>
                <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/contato" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
        </div>

    )
}

export default AppRoutes;