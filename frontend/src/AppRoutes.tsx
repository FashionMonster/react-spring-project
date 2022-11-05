import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Hello from "../components/Hello";
import PageSample from "../components/PageSample";

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/app/" element={<Hello/>}/>
                <Route path="/app/pageSample" element={<PageSample/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;

