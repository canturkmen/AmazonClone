import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Login.module.css";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  const onClickRegisterHandler = (event) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.login}>
      <Link to="/">
        <img
          className={styles.login__logo}
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
        ></img>
      </Link>
      <div className={styles.login__container}>
        <h1>Sign-in</h1>
        <form onSubmit={onSubmitHandler}>
          <div className={styles.login__formControl}>
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onEmailChangeHandler}
            />
          </div>
          <div className={styles.login__formControl}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={onPasswordChangeHandler}
            />
          </div>
          <button className={styles.login__signInButton} type="submit">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button
          className={styles.login__registerButton}
          onClick={onClickRegisterHandler}
        >
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
