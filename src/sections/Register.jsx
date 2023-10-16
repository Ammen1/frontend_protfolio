import React, { useContext, useState } from "react";
import { themeContext } from "../Context";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../axios";
import { NavLink } from "react-router-dom";

const Register = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const history = useNavigate();
  const initialFormData = Object.freeze({
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  const [formData, updateFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });

    if (e.target.name === "password2") {
      const match = e.target.value === formData.password;
      setPasswordsMatch(match);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordsMatch) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    axiosInstance
      .post(`user/user/register/`, {
        email: formData.email,
        username: formData.username,
        password: formData.password, // Field name for password
        password2: formData.password2, // Field name for password confirmation
      })
      .then((res) => {
        history("/login");
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        setErrorMessage("Username or Email is already taken.");
      });
  };
  return (
    <section className="overflow-y-hidden">
      <div className="grid-cols-3 h-screen w-full">
        <div className="relative flex w-full h-full flex-col justify-center">
          <form className="max-w-[400px] w-full bg-indigo-900  mx-auto rounded-lg p-1 justify-center items-center px-5">
            <h1 className="text-3xl text-amber-800 font-bold text-center">
              Register
            </h1>
            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}
            {!passwordsMatch && (
              <p className="text-red-500 text-center">
                Passwords do not match.
              </p>
            )}
            <div className="flex flex-col text-gray-00 py-2">
              <input
                className="rounded-lg bg-black mt-2 p-2 focus:border-blue-500  focus:outline-none"
                type="email"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <input
                className="p-2 rounded-lg bg-black mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                variant="outlined"
                type="text"
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={handleChange}
                placeholder="Enter Username"
              />
            </div>

            <div className="flex flex-col text-gray-400 py-2">
              <input
                className="p-2 rounded-lg bg-black mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
                name="password" // Field name for password
                label="Password"
                id="password"
                autoComplete="new-password"
                onChange={handleChange}
                placeholder="Password"
              />
            </div>

            <div className="flex flex-col text-gray-400 py-2">
              <input
                className="p-2 rounded-lg bg-black mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
                name="password2" // Field name for password confirmation
                label="Confirm Password"
                id="passwordConfirmation"
                autoComplete="new-password"
                onChange={handleChange}
                placeholder="passwordConfirmation"
              />
            </div>

            <div className="flex justify-between text-gray-400 py-2">
              <p className="flex items-center text-gradient font-bold">
                <input className="mr-2" type="checkbox" /> Remember Me
              </p>
            </div>
            <button
              className="w-full my-5 py-2 bg-teal-500 shadow-lg text-gradient hover:animate-pulse shadow-teal-500/50 text-white font-bold rounded-lg"
              type="submit"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            <NavLink to={"/login"} className="link hover:animate-bounce">
              <div className="flex items-center text-gradient font-bold">
                <h1 className=" font-bold ">
                  Already have an account? Sign in
                </h1>
              </div>
            </NavLink>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
