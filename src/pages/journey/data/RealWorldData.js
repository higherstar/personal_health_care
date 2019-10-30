import React from 'react';
import PageContainer from '../../../components/pagecontainer/index';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Real-World Data',
    activeMenu: 2,
    parentTitle: 'Data & Insights',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journeys/data/real-world-data',
    active: true,
  },
  {
    id: 1,
    level: 3,
    title: 'Advanced Analytics',
    activeMenu: 2,
    parentTitle: 'Data & Insights',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/data/advanced-analytics',
    active: false,
  },
];

function RealWorldData() {
  const content = (
    <h1>Real-World Data</h1>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} />
  );
}

export default RealWorldData;
