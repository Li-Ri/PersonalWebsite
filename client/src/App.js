import Portfolio from "./containers/Portfolio";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import backgroundPhoto from "./images/personal_site_background.jpg";
import "./App.css";

function App() {
  const style = { background: "url()" };
  return (
    <div
      className="App grid-container"
      style={{
        background: `linear-gradient(130deg, rgba(255, 255, 255) 40%, transparent 10%), linear-gradient(to bottom, rgba(0, 0, 0,0.8) 10%, transparent), url(${backgroundPhoto})`,
        backgroundSize: "cover",
      }}
    >
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route path="/projects" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
