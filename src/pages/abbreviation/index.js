import React from 'react';

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
    active: true,
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

const modalHeader = (
  <div className="reference-title">
    Abbreviation List
  </div>
);

const modalContent = (
  <div className="abbreviation-content">
    <div className="reference-content d-flex justify-content-between align-items-start flex-md-wrap">
      <p><span>NGS: </span>Next-generation sequencing</p>
      <p><span>PHC: </span>Personalised Healthcare,</p>
      <p><span>RWD: </span>Real-world data</p>
      <p><span>NGS: </span>Next-generation sequencing</p>
      <p><span>PHC: </span>Personalised Healthcare</p>
      <p><span>RWD: </span>Real-world data</p>
      <p><span>NGS: </span>Next-generation sequencing</p>
      <p><span>PHC: </span>Personalised Healthcare</p>
      <p><span>RWD: </span>Real-world data</p>
      <p><span>NGS: </span>Next-generation sequencing</p>
      <p><span>PHC: </span>Personalised Healthcare</p>
      <p><span>RWD: </span>Real-world data</p>
      <p><span>PHC: </span>Personalised Healthcare</p>
      <p><span>NGS: </span>Next-generation sequencing</p>
      <p><span>PHC: </span>Personalised Healthcare</p>
      <p><span>RWD: </span>Real-world data</p>
      <p><span>NGS: </span>Next-generation sequencing</p>
      <p><span>PHC: </span>Personalised Healthcare</p>
      <p><span>RWD: </span>Real-world data</p>
      <p><span>NGS: </span>Next-generation sequencing</p>
      <p><span>PHC: </span>Personalised Healthcare</p>
      <p><span>RWD: </span>Real-world data</p>
      <p><span>NGS: </span>Next-generation sequencing</p>
      <p><span>PHC: </span>Personalised Healthcare</p>
      <p><span>RWD: </span>Real-world data</p>
      <p><span>PHC: </span>Personalised Healthcare</p>
      <p><span>NGS: </span>Next-generation sequencing</p>
      <p><span>PHC: </span>Personalised Healthcare</p>
      <p><span>RWD: </span>Real-world data</p>
      <p><span>NGS: </span>Next-generation sequencing</p>
      <p><span>PHC: </span>Personalised Healthcare</p>
      <p><span>RWD: </span>Real-world data</p>
      <p><span>NGS: </span>Next-generation sequencing</p>
      <p><span>PHC: </span>Personalised Healthcare</p>
      <p><span>RWD: </span>Real-world data</p>
      <p><span>NGS: </span>Next-generation sequencing</p>
      <p><span>PHC: </span>Personalised Healthcare</p>
      <p><span>RWD: </span>Real-world data</p>
      <p><span>PHC: </span>Personalised Healthcare</p>
    </div>
  </div>
);

function Abbreviation() {
  const content = (
    <div className="abbreviation d-flex align-items-center justify-content-center">
      <div className="background-map">
        <img src={mapImage} alt="background map" />
      </div>
      <CustomModal open content={modalContent} closeButton={false} header={modalHeader} />
    </div>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} title="Abbreviation" color="blue" />
  );
}

export default Abbreviation;
