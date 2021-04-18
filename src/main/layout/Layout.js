import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HomeScreen from "../components/homescreen/HomeScreen";

function Layout() {
  return (
    <div>
      <Router>
        <Route path='/'>
          <HomeScreen />
        </Route>
        <Redirect from='/*' to='/' />
      </Router>
    </div>
  );
}

export default Layout;
