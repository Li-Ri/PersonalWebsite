import Portfolio from "./containers/Portfolio";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App grid-container">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route path="/projects" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
      <div className="previous-viewed">hello im the other grid</div>
    </div>
  );
}

export default App;
