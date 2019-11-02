import React from 'react';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import mapImage from '../../../assets/common/care.png';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Overview',
    activeMenu: 2,
    parentTitle: 'Personalised Care Plan',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/care/overview',
    active: false,
  },
  {
    id: 1,
    level: 3,
    title: 'Diagnostics',
    activeMenu: 2,
    parentTitle: 'Personalised Care Plan',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/care/diagnostics',
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'CDS Systems',
    activeMenu: 2,
    parentTitle: 'Personalised Care Plan',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/care/cds-systems',
    active: false,
  },
  {
    id: 3,
    level: 3,
    title: 'MGTOs',
    activeMenu: 2,
    parentTitle: 'Personalised Care Plan',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/care/mgtos',
    active: false,
  },
  {
    id: 4,
    level: 3,
    title: 'Digital Health (SaMD)',
    activeMenu: 2,
    parentTitle: 'Personalised Care Plan',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/care/digital-health',
    active: false,
  },
];

function CarePlan() {
  const content = (
    <div className="care-plan page-wrapper d-flex align-items-center justify-content-center">
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
      title="Personalised care plan"
      color="blue"
    />
  );
}

export default CarePlan;
