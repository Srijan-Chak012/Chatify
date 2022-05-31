import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {

  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    // e.preventDefault();
    loginCall({ email: email.current.value, password: password.current.value }, dispatch)
  }

  console.log(user)
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Email" type="email" className="loginInput" required ref={email} />
            <input placeholder="Password" type="password" className="loginInput" required minLength="6" ref={password} />
            <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? "Loading" : "Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? "Loading" : "Create an Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}