import React from 'react';
import PageContainer from '../../../components/pagecontainer/index';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Overview',
    link: '/phc/future-patient-journeys/monitoring/overview',
    active: false,
  },
  {
    id: 1,
    level: 3,
    title: 'Diagnostics',
    link: '/phc/future-patient-journey/monitoring/diagnostics',
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'Genomics',
    link: '/phc/future-patient-journey/monitoring/genomics',
    active: true,
  },
  {
    id: 3,
    level: 3,
    title: 'Advanced Imaging',
    link: '/phc/future-patient-journey/monitoring/advanced-imaging',
    active: false,
  },
  {
    id: 4,
    level: 3,
    title: 'CDS Systems',
    link: '/phc/future-patient-journey/monitoring/cds-systems',
    active: false,
  },
  {
    id: 5,
    level: 3,
    title: 'Digital Health(SaMD)',
    link: '/phc/future-patient-journey/monitoring/digital-health',
    active: false,
  },
];

function MonitoringGenomics() {
  const content = (
    <h1>Genomics</h1>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} />
  );
}

export default MonitoringGenomics;
