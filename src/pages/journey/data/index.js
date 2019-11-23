import React from 'react';
import PropTypes from 'prop-types';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import mapImage from '../../../assets/common/data.png';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Real-World Data',
    activeMenu: 2,
    parentTitle: 'Data & Insights',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/data/real-world-data',
    active: false,
  },
  {
    id: 1,
    level: 3,
    title: 'Advanced Analytics',
    activeMenu: 2,
    parentTitle: 'Data & Insights',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/data/advanced-analytics',
    active: false,
  },
];

function DataInsights(props) {
  const { isMobile, mobileCollapsed, handleMenuClick } = props;

  const content = (
    <div className="data-insights page-wrapper d-flex align-items-center justify-content-center">
      <div className="detail-map">
        <img src={mapImage} alt="detail map" />
      </div>
      <MainContent navOptions={navOptions} />
    </div>
  );

  return (
    <PageContainer
      page={content}
      navOptions={navOptions}
      title="Data & Insights"
      color="blue"
      isMobile={isMobile}
      mobileCollapsed={mobileCollapsed}
      handleMenuClick={handleMenuClick}
    />
  );
}

DataInsights.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mobileCollapsed: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default DataInsights;
