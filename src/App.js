import "./App.css";
import Home from "./components/Body/Home";

import { Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
