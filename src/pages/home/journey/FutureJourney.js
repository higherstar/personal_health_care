import React from 'react';
import PageContainer from '../../../components/pagecontainer/index';

const navOptions = [
  {
    id: 0,
    level: 2,
    link: '/phc/introduction',
    title: 'INTRODUCTION',
    top: 100,
    active: false,
    subMenus: [],
  },
  {
    id: 1,
    level: 2,
    link: '/phc/changing-journey',
    title: 'CHANGING JOURNEY',
    top: 140,
    active: true,
    activeSubMenu: 1,
    subMenuLinks: [
      '/phc/changing-journey/past-patient-journey',
      '/phc/changing-journey/future-patient-journey',
    ],
    subMenus: [
      'Past Patient Journey',
      'Future Patient Journey',
    ],
  },
  {
    id: 2,
    level: 2,
    link: '/phc/future-patient-journey',
    title: 'FUTURE PATIENT JOURNEY',
    top: 180,
    active: false,
    subMenus: [],
  },
  {
    id: 3,
    level: 2,
    link: '/phc/systems-enablers',
    title: 'SYSTEMS ENABLERS',
    top: 220,
    active: false,
    subMenus: [],
  },
  {
    id: 4,
    level: 2,
    link: '/phc/abbreviation',
    title: 'ABBREVIATION LIST',
    top: 260,
    active: false,
    subMenus: [],
  },
  {
    id: 5,
    level: 2,
    link: '/phc/acknowledgements',
    title: 'ACKNOWLEDGEMENTS',
    top: 300,
    active: false,
    subMenus: [],
  },
];

function FutureJourney() {
  const content = (
    <h1>Future Patient Journey</h1>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} />
  );
}

export default FutureJourney;
