import React from 'react';
import PropTypes from 'prop-types';

import PageContainer from '../../components/pagecontainer';
import CustomModal from '../../components/modals/CustomModal';
import mapImage from '../../assets/maps/map-background.png';

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
  // {
  //   id: 1,
  //   level: 1,
  //   link: '/phc/introduction',
  //   title: 'INTRODUCTION',
  //   top: 140,
  //   active: false,
  //   subMenus: [],
  // },
  // {
  //   id: 2,
  //   level: 1,
  //   link: '/phc/changing-journey',
  //   title: 'CHANGING JOURNEY',
  //   top: 180,
  //   active: false,
  //   subMenus: [],
  // },
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
    active: true,
    subMenus: [],
  },
];

const modalHeader = (
  <div className="reference-title d-flex">
    Acknowledgements
  </div>
);

const modalContent = (
  <div className="acknowledgements-content">
    <h3 className="d-md-block d-sm-none d-none">
      We acknowledge our colleagues for their contribution:
    </h3>
    <div className="reference-content d-flex justify-content-between align-items-start flex-wrap">
      <p>
        <strong>Camille Andre</strong>
      </p>
      <p>
        <strong>Mike Baker</strong>
      </p>
      <p>
        <strong>Eric Barrière</strong>
      </p>
      <p>
        <strong>Richard Batchelder</strong>
      </p>
      <p>
        <strong>Don Beasley</strong>
      </p>
      <p>
        <strong>Mary Beattie</strong>
      </p>
      <p>
        <strong>Andreas Beringer</strong>
      </p>
      <p>
        <strong>Ciro Caravaggio</strong>
      </p>
      <p>
        <strong>Isabelle Cognet</strong>
      </p>
      <p>
        <strong>Gordana S. Cvetkovska</strong>
      </p>
      <p>
        <strong>Luca Gambini</strong>
      </p>
      <p>
        <strong>Teresa Gerlock</strong>
      </p>
      <p>
        <strong>Darine Ghanem</strong>
      </p>
      <p>
        <strong>Youssef Ghazi</strong>
      </p>
      <p>
        <strong>Kelly Haenlein</strong>
      </p>
      <p>
        <strong>Ruchika Kumar</strong>
      </p>
      <p>
        <strong>Etienne Laine</strong>
      </p>
      <p>
        <strong>Thai Le</strong>
      </p>
      <p>
        <strong>Jorge Martinalbo</strong>
      </p>
      <p>
        <strong>Martina von Meyenn</strong>
      </p>
      <p>
        <strong>Hans Middelhoven</strong>
      </p>
      <p>
        <strong>Pouya Pakneshan</strong>
      </p>
      <p>
        <strong>Priya Parameswaran</strong>
      </p>
      <p>
        <strong>Camille Perret</strong>
      </p>
      <p>
        <strong>Jennifer Pougnet</strong>
      </p>
      <p>
        <strong>Marlene Thomas</strong>
      </p>
      <p>
        <strong>Michael de Villiers</strong>
      </p>
      <p>
        <strong>Penelope Wood</strong>
      </p>
      <p>
        <strong>Karolina Zydziak</strong>
      </p>
    </div>
  </div>
);

function Acknowledgements(props) {
  const { isMobile, mobileCollapsed, handleMenuClick } = props;

  const content = (
    <div
      className="acknowledgements d-flex align-items-center justify-content-center"
      onClick={!mobileCollapsed ? handleMenuClick : undefined}
    >
      <div className="background-map">
        <img src={mapImage} alt="background map" />
      </div>
      <CustomModal open content={modalContent} header={modalHeader} closeButton={false} />
    </div>
  );

  return (
    <PageContainer
      page={content}
      navOptions={navOptions}
      isMobile={isMobile}
      mobileCollapsed={mobileCollapsed}
      handleMenuClick={handleMenuClick}
      title="Acknowledgments"
      color="blue"
    />
  );
}

Acknowledgements.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mobileCollapsed: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default Acknowledgements;
