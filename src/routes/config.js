import React from 'react';

import PublicRoute from './publicRoutes';
import HomePage from '../pages/home';
import Journey from '../pages/journey';
import Enablers from '../pages/enablers';
import Abbreviation from '../pages/abbreviation';
import Acknowledgements from '../pages/acknowledgements';
import ChangingJourney from '../pages/home/journey';

const Routes = (props) => [
  <PublicRoute exact path="/phc/introduction" component={HomePage} props={props} key="homepage" />,
  <PublicRoute exact path="/phc/changing-journey" component={ChangingJourney} props={props} key="changing-journey" />,
  <PublicRoute exact path="/phc/future-patient-journey" component={Journey} props={props} key="future-journey" />,
  <PublicRoute exact path="/phc/systems-enablers" component={Enablers} props={props} key="systems-enablers" />,
  <PublicRoute exact path="/phc/abbreviation" component={Abbreviation} props={props} key="abbreviation" />,
  <PublicRoute exact path="/phc/acknowledgements" component={Acknowledgements} props={props} key="acknowledgements" />,
];

export default Routes;
