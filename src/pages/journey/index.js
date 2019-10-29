import React from 'react';
import PageContainer from '../../components/pagecontainer';

const navOptions = [
  {
    id: 0,
    level: 1,
    link: '/phc/homepage',
    title: 'WELCOME',
    top: 100,
    active: false,
    subMenus: [],
  },
  {
    id: 1,
    level: 1,
    link: '/phc/future-patient-journey',
    title: 'FUTURE PATIENT JOURNEY',
    top: 140,
    active: true,
    subMenus: [
      'Early Personalised Diagnosis',
      'Personalised Care Plan',
      'Rapid Access to Personalised Interventions',
      'Personalised Remote Monitoring & Care',
      'Data & Insights',
    ],
  },
  {
    id: 2,
    level: 1,
    link: '/phc/systems-enablers',
    title: 'SYSTEMS ENABLERS',
    top: 180,
    active: false,
    subMenus: [],
  },
  {
    id: 3,
    level: 1,
    link: '/phc/abbreviation',
    title: 'ABBREVIATION LIST',
    top: 220,
    active: false,
    subMenus: [],
  },
  {
    id: 4,
    level: 1,
    link: '/phc/acknowledgements',
    title: 'ACKNOWLEDGEMENTS',
    top: 260,
    active: false,
    subMenus: [],
  },
];

function Journey() {
  const content = (
    <h1>Journey</h1>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} />
  );
}

export default Journey;
