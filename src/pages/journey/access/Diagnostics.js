import React from 'react';
import PageContainer from '../../../components/pagecontainer/index';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Overview',
    link: '/phc/future-patient-journeys/access/overview',
    active: false,
  },
  {
    id: 1,
    level: 3,
    title: 'Diagnostics',
    link: '/phc/future-patient-journey/access/diagnostics',
    active: true,
  },
  {
    id: 2,
    level: 3,
    title: 'CDS Systems',
    link: '/phc/future-patient-journey/access/cds-systems',
    active: false,
  },
  {
    id: 3,
    level: 3,
    title: 'Digital Health(SaMD)',
    link: '/phc/future-patient-journey/access/digital-health',
    active: false,
  },
];

function AccessDiagnostics() {
  const content = (
    <h1>Diagnostics</h1>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} />
  );
}

export default AccessDiagnostics;
