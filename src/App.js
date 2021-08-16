import "../src/css/App.css";
import React from "react";
import {Profile} from "./components/Profile";
import {Home} from "./pages/Home"
import {PagenotFound} from "./pages/PagenotFound"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/Profile/:id" component={Profile}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Home" component={Home}/>
      <Route path="/*" component={PagenotFound}/>
    </Switch>
    </Router>
  );
}

export default App;
