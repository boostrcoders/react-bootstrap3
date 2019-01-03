import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import News from "./Components/News";
import Navbar from "./Components/CustomNavbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/news" component={News} />
        </div>
      </Router>
    );
  }
}

export default App;
