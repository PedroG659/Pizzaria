import "./App.css"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return (
        <div className="App">
            <Router>
                <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
        </div>

    )
}

export default AppRoutes;