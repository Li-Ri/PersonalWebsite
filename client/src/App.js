import Portfolio from "./containers/Portfolio";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import React, { useState } from "react";
import backgroundPhoto from "./images/personal_site_background.jpg";
import "./App.css";

function App() {
  const [showImg, setShowImg] = useState(false);

  const defaultStyle = {
    background: "white",
  };

  return (
    <div className="App grid-container">
      <NavBar showImg={showImg} setShowImg={setShowImg} />
      <Router>
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
