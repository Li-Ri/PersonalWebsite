import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ProjectView from "./components/ProjectView";
import React, { useState } from "react";
import "./App.css";
import projects from "./projectInfo";

function App() {
  const [showImg, setShowImg] = useState(false);

  return (
    <div className="App grid-container">
      <NavBar showImg={showImg} setShowImg={setShowImg} />
      <Router>
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/:index"
            render={(props) => {
              const index = props.match.params.index;
              const project = projects[index];
              return <ProjectView project={project} />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
