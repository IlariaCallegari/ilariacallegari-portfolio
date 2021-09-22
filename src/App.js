import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Page from "./pages/Page";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Footer from "./components/Footer";
import projects from "./projects";
import useGaTracker from "./utils/useGaTracker";

function App() {
  const [allProjects] = useState([...projects]);
  const [outerWidth, setInnerWidth] = useState(window.outerWidth);

  const findProject = (project) => {
    return allProjects.find((p) => p.project === project);
  };

  useGaTracker(); 
  
  useEffect(() => {
    function handleResize() {
      setInnerWidth(window.outerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  

  return (
    <Router>
      <div className="App">
        <Navbar outerWidth={outerWidth} />
        <Switch>
          <Route exact path="/">
            <Page>
              <Home outerWidth={outerWidth} />
            </Page>
          </Route>
          <Route exact path="/portfolio">
            <Page>
              <Portfolio allProjects={allProjects} outerWidth={outerWidth} />
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
                  outerWidth={outerWidth}
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
