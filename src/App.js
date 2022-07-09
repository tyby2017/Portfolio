import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Projects from './pages/Projects';
import AboutMyself from './pages/AboutMyself';
import HireMe from './pages/HireMe';
import Contact from './pages/Contact';

export default function App() {
  return  <Router>    
          <Switch>

          <Route exact path="/">
              <Homepage />
            </Route>

            <Route exact path="/portfolio">
              <Projects />
            </Route>

            <Route exact path="/about">
              <AboutMyself />
            </Route>

            <Route exact path="/hire-me">
              <HireMe />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>

          </Switch>
  </Router>
}