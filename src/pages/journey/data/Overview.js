import React from 'react';
import PropTypes from 'prop-types';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import mapImage from '../../../assets/common/data.png';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Overview',
    activeMenu: 2,
    parentTitle: 'Data & Insights',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/data/overview',
    active: true,
  },
  {
    id: 1,
    level: 3,
    title: 'Real-World Data',
    activeMenu: 2,
    parentTitle: 'Data & Insights',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/data/real-world-data',
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'Advanced Analytics',
    activeMenu: 2,
    parentTitle: 'Data & Insights',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/data/advanced-analytics',
    active: false,
  },
];

const mainContent = (
  <>
    <p>
      PHC requires a free flow of linked patient data between all healthcare providers throughout a patient’s care.
    </p>
    <p>
      Patients can move seamlessly between providers and data allows the system to measure the impact of each
      component of the health system, thus driving continuous efficiency improvements.
    </p>
    <p>
      Data is also collected and used to support and measure the impact of various interventions
      across the health system driving access and funding.
    </p>
    <p>
      Large, high-quality aggregated data sets are made available in select cases, which are used to support
      advanced tools such as Clinical Decision Support (CDS) systems and research and development (R&D).
    </p>
    <p>
      Data sharing not only
      {' '}
      <strong>optimizes outcomes for individual patients</strong>
      {' '}
but
      is
      {' '}
      <strong>
used to deliver new insights
      to all those patients with a similar profile and to the wider health system.
      </strong>
    </p>
  </>
);

function DataOverview(props) {
  const { isMobile, mobileCollapsed, handleMenuClick } = props;

  const content = (
    <div className="data-overview page-wrapper d-flex align-items-center justify-content-center">
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
      title="Data & Insights"
      color="blue"
      isMobile={isMobile}
      mobileCollapsed={mobileCollapsed}
      handleMenuClick={handleMenuClick}
    />
  );
}

DataOverview.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mobileCollapsed: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default DataOverview;
