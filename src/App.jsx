import Navbar from "./sections/Navbar";
import "./App.css";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import Works from "./sections/Works";
import Testimonial from "./sections/Testimonial";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Experience from "./sections/Experience";
import Intro from "./sections/Intro";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <main className="relative">
      <div
        className="App"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <Navbar />
        <section className="xl:padding-l wide:padding-r padding-b">
          <Intro />
        </section>
        <section className="padding-x py-10'">
          <Services />
        </section>
        <section className="padding">
          <Works />
        </section>
        <Portfolio />
        <section className="padding">
          <Experience />
        </section>
        <section className="padding">
          <Testimonial />
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
