import React from 'react';
import PageContainer from '../../../components/pagecontainer/index';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Real-World Data',
    link: '/phc/future-patient-journeys/data/real-world-data',
    active: false,
  },
  {
    id: 1,
    level: 3,
    title: 'Advanced Analytics',
    link: '/phc/future-patient-journey/data/advanced-analytics',
    active: true,
  },
];

function AdvancedAnalytics() {
  const content = (
    <h1>Advanced Analytics</h1>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} />
  );
}

export default AdvancedAnalytics;
