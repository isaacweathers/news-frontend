import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SubmitArticle from "./pages/SubmitArticle";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/submit" element={<SubmitArticle />} />
            </Routes>
        </Router>
    );
};

export default App;
