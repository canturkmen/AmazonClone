import "./App.css";
import Home from "./components/Body/Home";

import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/checkout">
          <h1>Checkout Page</h1>
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
