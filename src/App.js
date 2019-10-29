import React from 'react';
import {
  Switch, Redirect, withRouter,
} from 'react-router-dom';

import PublicRoute from './routes/publicRoutes';
import HomePage from './pages/home';
import Header from './components/header';
import Journey from './pages/journey';
import Enablers from './pages/enablers';
import Abbreviation from './pages/abbreviation';
import Acknowledgements from './pages/acknowledgements';

function App(props) {
  return (
    <>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/phc/homepage" />
        <PublicRoute exact path="/phc/homepage" component={HomePage} props={props} />
        <PublicRoute exact path="/phc/future-patient-journey" component={Journey} props={props} />
        <PublicRoute exact path="/phc/systems-enablers" component={Enablers} props={props} />
        <PublicRoute exact path="/phc/abbreviation" component={Abbreviation} props={props} />
        <PublicRoute exact path="/phc/acknowledgements" component={Acknowledgements} props={props} />
      </Switch>
    </>
  );
}

export default withRouter(App);
