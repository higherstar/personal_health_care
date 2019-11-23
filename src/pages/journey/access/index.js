import React from 'react';
import PropTypes from 'prop-types';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import mapImage from '../../../assets/common/access.png';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Overview',
    activeMenu: 2,
    parentTitle: 'Rapid Access to Personalised Interventions',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/access/overview',
    active: false,
  },
  {
    id: 1,
    level: 3,
    title: 'Diagnostics',
    activeMenu: 2,
    parentTitle: 'Rapid Access to Personalised Interventions',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/access/diagnostics',
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'CDS Systems',
    activeMenu: 2,
    parentTitle: 'Rapid Access to Personalised Interventions',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/access/cds-systems',
    active: false,
  },
  {
    id: 3,
    level: 3,
    title: 'Digital Health and SaMD',
    activeMenu: 2,
    parentTitle: 'Rapid Access to Personalised Interventions',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/access/digital-health',
    active: false,
  },
  {
    id: 4,
    level: 3,
    title: 'Value-Based Healthcare',
    activeMenu: 2,
    parentTitle: 'Rapid Access to Personalised Interventions',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/access/value-based-healthcare',
    active: false,
  },
];

function Access(props) {
  const { isMobile, mobileCollapsed, handleMenuClick } = props;

  const content = (
    <div className="access page-wrapper d-flex align-items-center justify-content-center">
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
      title="Rapid Access to Personalised Interventions"
      color="blue"
      isMobile={isMobile}
      mobileCollapsed={mobileCollapsed}
      handleMenuClick={handleMenuClick}
    />
  );
}

Access.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mobileCollapsed: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default Access;
