import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import Works from "./components/Works/Works";
import Testimonial from "./components/Testimonials/Testimonial";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Services />
      <Works />
      <Portfolio />
      <Experience />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
