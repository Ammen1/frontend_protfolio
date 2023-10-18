import React, { useContext, useState } from "react";
import "../style/Contact.css";
import { themeContext } from "../Context";
import axiosInstance from "../axios";
import axios from "axios";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const initialFormData = Object.freeze({
    name: "",
    email: "",
    message: "",
  });

  const [formData, updateFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for your Massege is submit you will get the responses after a minuts "
    );

    axios
      .post(`http://127.0.0.1:8000/api/contact/`, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        setErrorMessage("your email is not vaild");
      });
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form className="">
          <input
            type="text"
            id="name"
            label=" your name"
            name="name"
            autoComplete="name"
            onChange={handleChange}
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            className="user"
            onChange={handleChange}
            placeholder="Enter Email"
          />
          <textarea
            name="message"
            id="message"
            type="message"
            autoComplete="message"
            onChange={handleChange}
            className="user"
            placeholder="Message"
          />
          <input
            type="submit"
            onClick={handleSubmit}
            className="button  mr-10 h-10 mt-2 flex justify-center items-center px-8  border w-30 font-montserrat text-lg leading-none bg-slate-800"
          />
          {/* <span>{done && "Thanks for Contacting me"}</span> */}
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
