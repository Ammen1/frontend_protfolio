import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./Context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfoliosingle from "./components/Portfoliosingle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfoliosingle/:id/" element={<Portfoliosingle />} />
      </Routes>
    </Router>
  </ThemeProvider>
);
