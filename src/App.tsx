import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Route component={ MainPage }
                   path="/"
                   exact
            />
            <Route component={ AboutPage }
                   path="/about"
            />
        </BrowserRouter>
    );
}

export default App;
