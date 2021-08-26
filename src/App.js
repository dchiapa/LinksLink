import "../src/css/App.css";
import React from "react";
import { Profile } from "./components/Profile";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PagenotFound } from "./components/PagenotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/Profile/:userName" component={Profile} />
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route path="/*" component={PagenotFound} />
      </Switch>
      <Footer />
    </Router>
      
  );
}

export default App;
