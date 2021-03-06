import React, { useState, useEffect } from 'react';
import {
  Switch, Redirect, withRouter,
} from 'react-router-dom';

import Header from './components/header';
import Routes from './routes/config';

function App(props) {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileCollapsed, setMobileCollapsed] = useState(true);

  const getWindowWidth = () => {
    setIsMobile(window.innerWidth <= 800);
  };

  useEffect(() => {
    window.addEventListener('resize', getWindowWidth);
  }, []);

  useEffect(() => {
    getWindowWidth();
  });

  const handleMenuClick = () => {
    setMobileCollapsed(!mobileCollapsed);
  };

  return (
    <>
      <Header isMobile={isMobile} mobileCollapsed={mobileCollapsed} handleMenuClick={handleMenuClick} />
      <Switch>
        <Redirect exact from="/" to="/phc/welcome" />
        <Redirect exact from="/phc/introduction" to="/phc/introduction/roche-strategy" />
        <Redirect exact from="/phc/changing-journey" to="/phc/changing-journey/past-patient-journey" />
        <Redirect exact from="/phc/future-patient-journey/care" to="/phc/future-patient-journey/care/overview" />
        <Redirect exact from="/phc/future-patient-journey/data" to="/phc/future-patient-journey/data/overview" />
        <Redirect exact from="/phc/systems-enablers/partners" to="/phc/systems-enablers/partner/stakeholders" />
        <Redirect
          exact
          from="/phc/systems-enablers/roches-initiatives"
          to="/phc/systems-enablers/roches-initiatives/context"
        />
        <Redirect
          exact
          from="/phc/systems-enablers/roches-initiatives"
          to="/phc/systems-enablers/roches-initiatives/context"
        />
        <Redirect
          exact
          from="/phc/future-patient-journey/monitoring"
          to="/phc/future-patient-journey/monitoring/overview"
        />
        <Redirect
          exact
          from="/phc/future-patient-journey/access"
          to="/phc/future-patient-journey/access/overview"
        />
        <Redirect
          exact
          from="/phc/future-patient-journey/diagnosis"
          to="/phc/future-patient-journey/diagnosis/overview"
        />
        {Routes({
          ...props, isMobile, mobileCollapsed, handleMenuClick,
        })}
      </Switch>
    </>
  );
}

export default withRouter(App);
