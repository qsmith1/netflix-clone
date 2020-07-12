import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <p>SIGN IN PAGE</p>
        </Route>
        <Route path="/signup">
          SIGN UP PAGE
        </Route>
        <Route path="/browse">
          BROWSE PAGE
        </Route>
        <Route path="/">
          HOME PAGE
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
