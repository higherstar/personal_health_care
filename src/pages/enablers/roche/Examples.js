import React from 'react';
import PropTypes from 'prop-types';

import PageContainer from '../../../components/pagecontainer';
import MainContent from '../../../components/maincontent';
import mapImage from '../../../assets/common/roche.png';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Context',
    activeMenu: 3,
    parentTitle: 'Roche Initiatives',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/roches-initiatives/context',
    active: false,
  },
  {
    id: 1,
    level: 3,
    title: 'Showcases',
    activeMenu: 3,
    parentTitle: 'Roche Initiatives',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/roches-initiatives/showcases',
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'Shining Towers',
    activeMenu: 3,
    parentTitle: 'Roche Initiatives',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/roches-initiatives/shining-towers',
    active: false,
  },
  {
    id: 3,
    level: 3,
    title: 'Examples of PHC in Action',
    activeMenu: 3,
    parentTitle: 'Roche Initiatives',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/roches-initiatives/examples',
    active: true,
  },
];

const mainContent = (
  <div className="d-flex justify-content-center">
    <h1>Coming Soon</h1>
  </div>
);

function Examples(props) {
  const { isMobile, mobileCollapsed, handleMenuClick } = props;

  const content = (
    <div className="enablers-roche roche-rozlytrek d-flex align-items-center justify-content-center">
      <div className="detail-map">
        <img src={mapImage} alt="detail map" />
      </div>
      <MainContent content={mainContent} navOptions={navOptions} />
    </div>
  );

  return (
    <PageContainer
      page={content}
      navOptions={navOptions}
      isMobile={isMobile}
      mobileCollapsed={mobileCollapsed}
      handleMenuClick={handleMenuClick}
      title="Roche initiatives"
      color="yellow"
    />
  );
}

Examples.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mobileCollapsed: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default Examples;
