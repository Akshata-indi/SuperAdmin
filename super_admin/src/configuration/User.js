import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserForm from './UserForm';
import Adduser from './Adduser';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UserForm} />
        <Route path="/adduser" component={Adduser} />
      </Switch>
    </Router>
  );
}

export default App;
