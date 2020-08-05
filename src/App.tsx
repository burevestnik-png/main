import React from 'react';
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AboutPage from "./pages/AboutPage";
import ArchivePage from "./pages/ArchivePage";
import MainPage from "./pages/MainPage";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Route component={ MainPage }
                   path="/main"
                   exact
            />
            <Route component={ ArchivePage }
                   path="/main/archive"
                   exact
            />
            <Route component={ AboutPage }
                   path="/main/about"
                   exact
            />
            <Redirect to="/main"/>
        </BrowserRouter>
    );
}

export default App;
