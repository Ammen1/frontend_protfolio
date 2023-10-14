import { Router, Redirect } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRouter = ({ childer, ...rest }) => {
  let { user } = useContext(AuthContext);
  return (
    <Router {...rest}>{!user ? <Redirect to="/login" /> : childern}</Router>
  );
};

export default PrivateRouter;
