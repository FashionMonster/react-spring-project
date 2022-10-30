import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes";

const mount = document.getElementById("root");

const root = ReactDOM.createRoot(mount);
root.render(<AppRoutes/>);