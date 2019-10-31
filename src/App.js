import React from 'react';
import {
  Switch, Redirect, withRouter,
} from 'react-router-dom';

import Header from './components/header';
import Routes from './routes/config';

function App(props) {
  return (
    <>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/phc/welcome" />
        {Routes(props)}
      </Switch>
    </>
  );
}

export default withRouter(App);
