import "./register.css";
import { useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useHistory } from "react-router";

export default function Register() {

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();


  const handleClick = async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
      password.current.setCustomValidity("Passwords do not match")
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: username.current.value,
      }
      try {
        const res = await axios.post("http://localhost:8800/api/auth/register", user);
        history.push("/login");
      } catch (err){
        console.log(err);
      }
    }
  }

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
            <input placeholder="Username" ref={username} className="loginInput" />
            <input placeholder="Email" ref={email} type="email" className="loginInput" />
            <input placeholder="Password" ref={password} type="password" minLength="6" className="loginInput" />
            <input placeholder="Password Again" ref={passwordAgain} type="password" minLength="6" className="loginInput" />
            <button className="loginButton" type="submit">Sign Up</button>
            <button className="loginRegisterButton">
              Log Into Your Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}