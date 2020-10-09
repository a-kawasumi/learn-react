import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/home.jsx';
import Lifting from './pages/lifting.jsx';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>>
          <Route exact path="/lifting" component={Lifting}/>>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
