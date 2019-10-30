import React from 'react';
import PageContainer from '../../../components/pagecontainer/index';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Overview',
    link: '/phc/future-patient-journeys/care/overview',
    active: false,
  },
  {
    id: 1,
    level: 3,
    title: 'Diagnostics',
    link: '/phc/future-patient-journey/care/diagnostics',
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'CDS Systems',
    link: '/phc/future-patient-journey/care/cds-systems',
    active: false,
  },
  {
    id: 3,
    level: 3,
    title: 'MGTOs',
    link: '/phc/future-patient-journey/care/mgtos',
    active: true,
  },
  {
    id: 4,
    level: 3,
    title: 'Digital Health(SaMD)',
    link: '/phc/future-patient-journey/care/digital-health',
    active: false,
  },
];

function MGTOs() {
  const content = (
    <h1>MGTOs</h1>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} />
  );
}

export default MGTOs;
