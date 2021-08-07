import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Page from "./pages/Page";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Page>
              <Home />
            </Page>
          </Route>
          <Route exact path="/portfolio">
            <Page>
              <Portfolio />
            </Page>
          </Route>
          <Route exact path="/contact-me">
            <Page>
              <Contact />
            </Page>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
