import React from 'react';
import PropTypes from 'prop-types';

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
    link: '/phc/future-patient-journey',
    title: 'FUTURE PATIENT JOURNEY',
    top: 140,
    active: false,
    subMenus: [],
  },
  {
    id: 2,
    level: 1,
    link: '/phc/systems-enablers',
    title: 'SYSTEMS ENABLERS',
    top: 180,
    active: true,
    subMenuLinks: [
      '/phc/systems-enablers/partners',
      '/phc/systems-enablers/roches-initiatives',
    ],
    subMenus: [
      'Partners',
      'Roche Initiatives',
    ],
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

const dropdownOptions = [
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
      'Patient Partnerships',
    ],
    subMenuLinks: [
      '/phc/systems-enablers/partner/stakeholders',
      '/phc/systems-enablers/partner/policy',
      '/phc/systems-enablers/partner/phc-it',
      '/phc/systems-enablers/partner/patient-partnerships',
    ],
  },
];

function Enablers(props) {
  const { isMobile, mobileCollapsed, handleMenuClick } = props;

  const content = (
    <div className="system-enablers d-flex align-items-center justify-content-center">
      <div className={`${isMobile ? 'mobile-background-map' : 'background-map'}`}>
        <img src={mapImage} alt="background map" />
        <DropDown options={dropdownOptions} color="yellow" isMobile={isMobile} />
      </div>
    </div>
  );

  return (
    <PageContainer
      page={content}
      navOptions={navOptions}
      isMobile={isMobile}
      mobileCollapsed={mobileCollapsed}
      handleMenuClick={handleMenuClick}
      title="SYSTEMS ENABLERS"
      color="yellow"
    />
  );
}

Enablers.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mobileCollapsed: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default Enablers;
