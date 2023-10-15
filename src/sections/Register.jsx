import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import styles from "../style";
import { themeContext } from "../Context";
import "../style/Services.css";
const Register = () => {
  let { loginUser } = useContext(AuthContext);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className={`flex md:flex-row  flex-col p-1 ${styles.paddingY}`}>
      <div>
        <h1 className="text-center">Register</h1>
      </div>
    </section>
  );
};

export default Register;
