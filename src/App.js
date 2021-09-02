import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Page from "./pages/Page";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Footer from "./components/Footer";
import projects from "./projects";

function App() {

  const findProject = (project) => {
    return projects.find((p) => p.project === project);
  };

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
          <Route
            exact
            path="/portfolio/:project"
            render={(routeProps) => (
              <Page>
                <Project
                  myProject={findProject(routeProps.match.params.project)}
                />
              </Page>
            )}
          ></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
