import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Hero from "./components/landing/Hero";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import Dashboard from "./components/dashboard/Dashboard";

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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
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
