import React from 'react';
import PropTypes from 'prop-types';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import mapImage from '../../../assets/common/monitoring.png';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Overview',
    activeMenu: 2,
    parentTitle: 'Personalised Remote Monitoring & Care',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/monitoring/overview',
    active: true,
  },
  {
    id: 1,
    level: 3,
    title: 'Diagnostics',
    activeMenu: 2,
    parentTitle: 'Personalised Remote Monitoring & Care',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/monitoring/diagnostics',
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'Genomics',
    activeMenu: 2,
    parentTitle: 'Personalised Remote Monitoring & Care',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/monitoring/genomics',
    active: false,
  },
  {
    id: 3,
    level: 3,
    title: 'Advanced Imaging',
    activeMenu: 2,
    parentTitle: 'Personalised Remote Monitoring & Care',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/monitoring/advanced-imaging',
    active: false,
  },
  {
    id: 4,
    level: 3,
    title: 'CDS Systems',
    activeMenu: 2,
    parentTitle: 'Personalised Remote Monitoring & Care',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/monitoring/cds-systems',
    active: false,
  },
  {
    id: 5,
    level: 3,
    title: 'Digital Health and SaMD',
    activeMenu: 2,
    parentTitle: 'Personalised Remote Monitoring & Care',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/monitoring/digital-health',
    active: false,
  },
];

const mainContent = (
  <>
    <p>
      Patients are effectively triaged and managed in a more efficient and timely manner through the application of
      {' '}
      <strong>
        data-driven early and continuous monitoring.
      </strong>
    </p>
    <p>
      Technologies, such as circulating tumor DNA (ctDNA) in oncology and digital health tools in both
      oncology and non-oncology that measure response to treatment and manage toxicity, allow for
      {' '}
      <strong>
        earlier disease intervention and treatment adaptation, or termination to occur
        early in recurrence or as the disease changes.
      </strong>
    </p>
    <p>
      This minimizes waste of treatment that is proving ineffective and optimizes outcomes. Patients can get
      their care through digital tools at home for minor concerns. Together,
      {' '}
      <strong>
        these tools optimize patient care while minimizing the use of unnecessary healthcare resources.
      </strong>
    </p>
  </>
);

function MonitoringOverview(props) {
  const { isMobile, mobileCollapsed, handleMenuClick } = props;

  const content = (
    <div className="monitoring-overview page-wrapper d-flex align-items-center justify-content-center">
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
      title="PERSONALISED REMOTE MONITORING & CARE"
      color="blue"
      isMobile={isMobile}
      mobileCollapsed={mobileCollapsed}
      handleMenuClick={handleMenuClick}
    />
  );
}

MonitoringOverview.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mobileCollapsed: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default MonitoringOverview;
