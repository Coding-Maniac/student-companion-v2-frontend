import React, { FC } from 'react';
import 'assets/App.scss';
import { Login, Home, Grades } from 'pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { APP_LOGIN_PAGE, APP_LANDING_PAGE, APP_GRADES_PAGE } from './common/Routes';

const App: FC<{}> = () => (
  <Router>
    <Switch>
      <Route path={APP_LANDING_PAGE} exact component={Home} />
      <Route path={APP_LOGIN_PAGE} exact component={Login} />
      <Route path={APP_GRADES_PAGE} exact component={Grades} />
    </Switch>
  </Router>
);

export default App;
