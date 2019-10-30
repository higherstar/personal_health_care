import React from 'react';
import PageContainer from '../../../components/pagecontainer/index';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Overview',
    activeMenu: 2,
    parentTitle: 'Personalised Care Plan',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journeys/care/overview',
    active: true,
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
    title: 'Digital Health(SaMD)',
    activeMenu: 2,
    parentTitle: 'Personalised Care Plan',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/care/digital-health',
    active: false,
  },
];

function CareOverview() {
  const content = (
    <h1>Overview</h1>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} />
  );
}

export default CareOverview;
