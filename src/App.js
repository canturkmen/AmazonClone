import "./App.css";
import Home from "./components/Body/Home";

import { Switch, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Layout from "./components/Layout/Layout";
import Header from "./components/Layout/Header";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/AuthForm/Login";
import { UserContext } from "./store/user-context";

function App() {
  const userCtx = useContext(UserContext);

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // The user just is logged in || the user was logged in
        userCtx.login(authUser);
      } else {
        // The user is logged out
        userCtx.login(null);
      }
    });
  }, [userCtx]);

  return (
    <Layout>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
