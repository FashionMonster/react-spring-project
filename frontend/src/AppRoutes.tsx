import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Hello from "../components/Hello";
import PageSample from "../components/PageSample";

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Hello/>}/>
                <Route path="/pageSample" element={<PageSample/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;

