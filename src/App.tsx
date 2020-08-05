import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
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
            />
            <Route component={ AboutPage }
                   path="/main/about"
            />
        </BrowserRouter>
    );
}

export default App;
