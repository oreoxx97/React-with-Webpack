import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import LoginCard from './container/LoginCard'
import Home from './component/view/Home'
import Pages from './component/view/Pages';
import App from './component/view/App';

function routes() {
  return (
    <Router history={createBrowserHistory}>
      <Switch>
        <Route path='/' exact={true} component={LoginCard} />
        <Route path='/home' exact={true} component={Home} />
        <Route path='/pages' exact={true} component={Pages} />
      </Switch>
    </Router>
  );
}

export default routes;
