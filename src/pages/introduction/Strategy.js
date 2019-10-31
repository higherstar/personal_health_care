import React from 'react';

import PageContainer from '../../components/pagecontainer/index';
import mapImage from '../../assets/maps/map-background.png';
import CustomModal from '../../components/modals/CustomModal';

const navOptions = [
  {
    id: 0,
    level: 1,
    link: '/phc/welcome',
    title: 'WELCOME',
    top: 100,
    active: false,
    subMenus: [],
  },
  {
    id: 1,
    level: 2,
    link: '/phc/introduction',
    title: 'INTRODUCTION',
    top: 140,
    active: true,
    activeSubMenu: 0,
    subMenuLinks: [
      '/phc/introduction/roche-strategy',
      '/phc/introduction/purpose',
    ],
    subMenus: [
      'Roche\'s Vision & Strategy',
      'Purpose of this Website',
    ],
  },
  {
    id: 2,
    level: 2,
    link: '/phc/changing-journey',
    title: 'CHANGING JOURNEY',
    top: 180,
    active: false,
    subMenus: [],
  },
  {
    id: 3,
    level: 2,
    link: '/phc/future-patient-journey',
    title: 'FUTURE PATIENT JOURNEY',
    top: 220,
    active: false,
    subMenus: [],
  },
  {
    id: 4,
    level: 2,
    link: '/phc/systems-enablers',
    title: 'SYSTEMS ENABLERS',
    top: 260,
    active: false,
    subMenus: [],
  },
  {
    id: 5,
    level: 2,
    link: '/phc/abbreviation',
    title: 'ABBREVIATION LIST',
    top: 300,
    active: false,
    subMenus: [],
  },
  {
    id: 6,
    level: 2,
    link: '/phc/acknowledgements',
    title: 'ACKNOWLEDGEMENTS',
    top: 340,
    active: false,
    subMenus: [],
  },
];

const modalContent = (
  <div />
);

function Strategy() {
  const content = (
    <div className="introduction-strategy d-flex align-items-center justify-content-center">
      <div className="background-map">
        <img src={mapImage} alt="background map" />
      </div>
      <CustomModal open content={modalContent} closeButton={false} />
    </div>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} title="Introduction" color="blue" />
  );
}

export default Strategy;