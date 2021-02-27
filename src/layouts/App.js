import React from "react";
import Home from "../components/HomePage/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Products from "../components/Products/Products";


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/products" component={Products}/>
        </Switch>

      </Router>
  );
}

export default App;
