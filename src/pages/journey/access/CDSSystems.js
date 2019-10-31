import React from 'react';

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
    active: true,
  },
  {
    id: 3,
    level: 3,
    title: 'Digital Health(SaMD)',
    activeMenu: 2,
    parentTitle: 'Rapid Access to Personalised Interventions',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/access/digital-health',
    active: false,
  },
];

function AccessCDSSystems() {
  const content = (
    <div className="access-cds-systems page-wrapper d-flex align-items-center justify-content-center">
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
      title="Full access to optimal care intervention"
      color="blue"
    />
  );
}

export default AccessCDSSystems;
