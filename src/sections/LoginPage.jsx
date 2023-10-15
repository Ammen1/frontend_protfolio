import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import styles from "../style";
import { themeContext } from "../Context";
import "../style/Services.css";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className={`flex md:flex-row  flex-col p-1 ${styles.paddingY}`}>
      <div className="relative flex w-full h-full   flex-col ">
        <form
          onSubmit={loginUser}
          className=" max-w-[400px]  w-full  mx-auto rounded-lg  bg-gray-1000 p-4 justify-center items-center px-5"
        >
          <span
            className="text-3xl text-amber-800 font-bold text-center"
            style={{ color: darkMode ? "white" : "" }}
          >
            {" "}
            Login and Chat With Me!!
          </span>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Enter Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Enter Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your email"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Enter Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center text-gradient font-bold">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
          </div>
          <input
            type="submit"
            className="w-full my-5 py-2 bg-teal-500 shadow-lg text-gradient hover:animate-pulse shadow-teal-500/50 text-white font-bold rounded-lg"
          />
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
