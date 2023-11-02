import Navbar from "./sections/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import Works from "./sections/Works";
import Testimonial from "./sections/Testimonial";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Intro from "./sections/Intro";
// import Comment from "./sections/Comment";
import Subscribe from "./sections/Subscribe";
import LoginPage from "./sections/LoginPage";
import Register from "./sections/Register";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <main className=" static">
      <div
        className="App"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        {/* <Router>
          <Routes>
            
          </Routes>
        </Router> */}
        <Navbar />
        <section className="xl:padding-l wide:padding-r padding-b">
          <Intro />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <Works />
        </section>
        <Portfolio />
        <section className="padding">
          <Testimonial />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="padding">
          <Contact />
        </section>
        <section className=" ">
          <Footer />
        </section>
      </div>
    </main>
  );
}

export default App;
