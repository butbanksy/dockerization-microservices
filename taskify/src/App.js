import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useRecoilState } from "recoil";
import { authAtom } from "./components/store/authStore";
import { useHistory } from "react-router-dom";

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
              <Protect auth={true}>
                <Register />
              </Protect>
            </Route>
            <Route path="/login">
              <Protect auth={true}>
                <Login />
              </Protect>
            </Route>
            <Route path="/dashboard">
              <Protect>
                <Dashboard />
              </Protect>
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

const Protect = (props) => {
  const [auth] = useRecoilState(authAtom);

  const history = useHistory();

  React.useEffect(() => {
    if (!auth?.token && !props.auth) {
      history.push("/login");
    } else if (auth?.token && props.auth) {
      history.push("/dashboard");
    }
  }, [auth]);

  if ((auth?.token && !props.auth) || (!auth?.token && props.auth)) {
    return props.children;
  }
  return null;
};

export default App;
