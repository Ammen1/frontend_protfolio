import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./Context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfoliosingle from "./components/Portfoliosingle";
import LoginPage from "./sections/LoginPage.jsx";
import Register from "./sections/Register.jsx";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/portfoliosingle/:id/" element={<Portfoliosingle />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </Router>
  </ThemeProvider>
);
