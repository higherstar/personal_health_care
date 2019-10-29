import React from 'react';

import PublicRoute from './publicRoutes';
import HomePage from '../pages/home';
import Journey from '../pages/journey';
import Enablers from '../pages/enablers';
import Abbreviation from '../pages/abbreviation';
import Acknowledgements from '../pages/acknowledgements';

const Routes = (props) => [
  <PublicRoute exact path="/phc/homepage" component={HomePage} props={props} />,
  <PublicRoute exact path="/phc/future-patient-journey" component={Journey} props={props} />,
  <PublicRoute exact path="/phc/systems-enablers" component={Enablers} props={props} />,
  <PublicRoute exact path="/phc/abbreviation" component={Abbreviation} props={props} />,
  <PublicRoute exact path="/phc/acknowledgements" component={Acknowledgements} props={props} />,
];

export default Routes;
