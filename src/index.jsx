import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./components/App/App.module.css";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
