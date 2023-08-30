import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));

    //firebase login
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it successfuly creates a new user with email and password
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));

    //firebase registrer
  };

  return (
    <div className="login">
      <Link>
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon logo"
        ></img>
      </Link>

      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>Email </h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />

          <h5>Password </h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login_registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
