import React from 'react';

import PageContainer from '../../components/pagecontainer';
import DropDown from '../../atoms/DropDown';
import mapImage from '../../assets/maps/map-enablers.png';

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
    level: 1,
    link: '/phc/introduction',
    title: 'INTRODUCTION',
    top: 140,
    active: false,
    subMenus: [],
  },
  {
    id: 2,
    level: 1,
    link: '/phc/changing-journey',
    title: 'CHANGING JOURNEY',
    top: 180,
    active: false,
    subMenus: [],
  },
  {
    id: 3,
    level: 1,
    link: '/phc/future-patient-journey',
    title: 'FUTURE PATIENT JOURNEY',
    top: 220,
    active: false,
    subMenus: [],
  },
  {
    id: 4,
    level: 1,
    link: '/phc/systems-enablers',
    title: 'SYSTEMS ENABLERS',
    top: 260,
    active: true,
    subMenuLinks: [
      '/phc/systems-enablers/partners',
      '/phc/systems-enablers/value-based-healthcare',
      '/phc/systems-enablers/roches-initiatives',
    ],
    subMenus: [
      'Partners',
      'Value-based Healthcare',
      'Roche Initiatives',
    ],
  },
  {
    id: 5,
    level: 1,
    link: '/phc/abbreviation',
    title: 'ABBREVIATION LIST',
    top: 300,
    active: false,
    subMenus: [],
  },
  {
    id: 6,
    level: 1,
    link: '/phc/acknowledgements',
    title: 'ACKNOWLEDGEMENTS',
    top: 340,
    active: false,
    subMenus: [],
  },
];

const dropdownOptions = [
  {
    className: 'vbhc-dropdown',
    title: 'Value-based Healthcare',
    subMenus: ['Value-based Healthcare'],
    subMenuLinks: ['/phc/systems-enablers/value-based-healthcare'],
  },
  {
    className: 'roche-dropdown',
    title: 'Roche Initiatives',
    subMenus: [
      'Context',
      'Showcases',
      'Shining Towers',
      'ROZLYTREK',
    ],
    subMenuLinks: [
      '/phc/systems-enablers/roches-initiatives/context',
      '/phc/systems-enablers/roches-initiatives/showcases',
      '/phc/systems-enablers/roches-initiatives/shining-towers',
      '/phc/systems-enablers/roches-initiatives/rozlytrek',
    ],
  },
  {
    className: 'partners-dropdown',
    title: 'Partners',
    subMenus: [
      'Stakeholders',
      'Policy',
      'PHC IX/Technology',
      'Patient Partnership',
    ],
    subMenuLinks: [
      '/phc/systems-enablers/partner/stakeholders',
      '/phc/systems-enablers/partner/policy',
      '/phc/systems-enablers/partner/phc-it',
      '/phc/systems-enablers/partner/patient-partnership',
    ],
  },
];

function Enablers() {
  const content = (
    <div className="system-enablers d-flex align-items-center justify-content-center">
      <div className="background-map">
        <img src={mapImage} alt="background map" />
        <DropDown options={dropdownOptions} color="yellow" />
      </div>
    </div>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} title="Enablers" color="yellow" />
  );
}

export default Enablers;
