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
import Sidebar from "./layout/index";
import Navbar from "./sections/Navbar";
import Home from "./sections/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Router>
      <Navbar />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/portfoliosingle/:id/" element={<Portfoliosingle />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/index" element={<Sidebar />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AuthProvider>
    </Router>
  </ThemeProvider>
);
