import React from 'react';
import {
  Switch, Redirect, withRouter,
} from 'react-router-dom';

import PublicRoute from './routes/publicRoutes';
import HomePage from './pages/home';
import Header from './components/header';

function App(props) {
  return (
    <>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/phc/homepage" />
        <PublicRoute exact path="/phc/homepage" component={HomePage} props={props} />
      </Switch>
    </>
  );
}

export default withRouter(App);
