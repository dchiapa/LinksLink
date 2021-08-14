import "../src/css/App.css";
import React from "react";
import ProfileKira from "./components/Profilekira";
import Home from "./pages/Home"
import PagenotFound from "./pages/PagenotFound"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/ProfileKira" component={ProfileKira}/>
      <Route exact path="/" component={Home}/>
      <Route path="/*" component={PagenotFound}/>
    </Switch>
    </Router>
  );
}

export default App;
