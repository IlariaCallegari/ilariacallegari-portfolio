import "./App.css";
import { useState } from "react";
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
  const [allProjects] = useState([...projects]);
  
  const findProject = (project) => {
    return allProjects.find((p) => p.project === project);
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
              <Portfolio allProjects={allProjects} />
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
                  allProjects={allProjects}
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
