import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Browse, Signin, Singup } from './pages/index'
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <Router>
      <Route exact path="/browse">
        <Browse/>
      </Route>
      <Route exact path="/signin">
        <Signin/>
      </Route>
      <Route exact path="/signup">
        <Singup/>
      </Route>
      <Route path={ROUTES.HOME}>
        <Home/>
      </Route>
    </Router>
  );
}