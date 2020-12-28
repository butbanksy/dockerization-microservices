import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900">
        <Header />
        <div className="flex-grow">
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Hero />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
