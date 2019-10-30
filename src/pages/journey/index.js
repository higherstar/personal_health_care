import React from 'react';
import PageContainer from '../../components/pagecontainer';

const navOptions = [
  {
    id: 0,
    level: 1,
    link: '/phc/introduction',
    title: 'INTRODUCTION',
    top: 100,
    active: false,
    subMenus: [],
  },
  {
    id: 1,
    level: 1,
    link: '/phc/changing-journey',
    title: 'CHANGING JOURNEY',
    top: 140,
    active: false,
    subMenus: [],
  },
  {
    id: 2,
    level: 1,
    link: '/phc/future-patient-journey',
    title: 'FUTURE PATIENT JOURNEY',
    top: 180,
    active: true,
    subMenuLinks: [
      '/phc/future-patient-journey/diagnosis',
      '/phc/future-patient-journey/care',
      '/phc/future-patient-journey/access',
      '/phc/future-patient-journey/monitoring',
      '/phc/future-patient-journey/data',
    ],
    subMenus: [
      'Early Personalised Diagnosis',
      'Personalised Care Plan',
      'Rapid Access to Personalised Interventions',
      'Personalised Remote Monitoring & Care',
      'Data & Insights',
    ],
  },
  {
    id: 3,
    level: 1,
    link: '/phc/systems-enablers',
    title: 'SYSTEMS ENABLERS',
    top: 220,
    active: false,
    subMenus: [],
  },
  {
    id: 4,
    level: 1,
    link: '/phc/abbreviation',
    title: 'ABBREVIATION LIST',
    top: 260,
    active: false,
    subMenus: [],
  },
  {
    id: 5,
    level: 1,
    link: '/phc/acknowledgements',
    title: 'ACKNOWLEDGEMENTS',
    top: 300,
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
