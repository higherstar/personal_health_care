import React from 'react';
import PageContainer from '../../../components/pagecontainer/index';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Overview',
    link: '/phc/future-patient-journeys/diagnosis/overview',
    active: false,
  },
  {
    id: 1,
    level: 3,
    title: 'Diagnostics',
    link: '/phc/future-patient-journey/diagnosis/diagnostics',
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'Genomics',
    link: '/phc/future-patient-journey/diagnosis/genomics',
    active: false,
  },
  {
    id: 3,
    level: 3,
    title: 'Advanced Imaging',
    link: '/phc/future-patient-journey/diagnosis/advanced-imaging',
    active: false,
  },
  {
    id: 4,
    level: 3,
    title: 'Digital Pathology',
    link: '/phc/future-patient-journey/diagnosis/digital-pathology',
    active: true,
  },
  {
    id: 5,
    level: 3,
    title: 'CDS Systems',
    link: '/phc/future-patient-journey/diagnosis/cds-systems',
    active: false,
  },
  {
    id: 6,
    level: 3,
    title: 'Digital Health(SaMD)',
    link: '/phc/future-patient-journey/diagnosis/digital-health',
    active: false,
  },
];

function DigitalPathology() {
  const content = (
    <h1>Digital Pathology</h1>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} />
  );
}

export default DigitalPathology;
