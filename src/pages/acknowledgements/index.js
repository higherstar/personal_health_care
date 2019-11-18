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
    {' '}
    <h1 style={{ marginLeft: '50px' }}>Content coming soon</h1>
  </div>
);

const modalContent = (
  <div className="acknowledgements-content">
    <h3 className="d-md-block d-sm-none d-none">
      We acknowledge our colleagues for their contribution:
    </h3>
    <div className="reference-content d-flex justify-content-between align-items-start flex-md-wrap">
      <p><strong>John Doe,</strong> PHC CoE</p>
      <p><strong>Jane Doe,</strong> PDMA</p>
      <p><strong>John Doe,</strong> PHC CoE</p>
      <p><strong>Jane Doe,</strong> PDMA</p>
      <p><strong>John Doe,</strong> PHC CoE</p>
      <p><strong>Jane Doe,</strong> PDMA</p>
      <p><strong>John Doe,</strong> PHC CoE</p>
      <p><strong>Jane Doe,</strong> PDMA</p>
      <p><strong>John Doe,</strong> PHC CoE</p>
      <p><strong>Jane Doe,</strong> PDMA</p>
      <p><strong>John Doe,</strong> PHC CoE</p>
      <p><strong>Jane Doe,</strong> PDMA</p>
      <p><strong>John Doe,</strong> PHC CoE</p>
      <p><strong>Jane Doe,</strong> PDMA</p>
      <p><strong>John Doe,</strong> PHC CoE</p>
      <p><strong>Jane Doe,</strong> PDMA</p>
      <p><strong>John Doe,</strong> PHC CoE</p>
      <p><strong>Jane Doe,</strong> PDMA</p>
      <p><strong>John Doe,</strong> PHC CoE</p>
      <p><strong>Jane Doe,</strong> PDMA</p>
      <p><strong>John Doe,</strong> PHC CoE</p>
      <p><strong>Jane Doe,</strong> PDMA</p>
      <p><strong>John Doe,</strong> PHC CoE</p>
      <p><strong>Jane Doe,</strong> PDMA</p>
      <p><strong>John Doe,</strong> PHC CoE</p>
      <p><strong>Jane Doe,</strong> PDMA</p>
      <p><strong>John Doe,</strong> PHC CoE</p>
      <p><strong>Jane Doe,</strong> PDMA</p>
      <p><strong>John Doe,</strong> PHC CoE</p>
      <p><strong>Jane Doe,</strong> PDMA</p>
      <p><strong>John Doe,</strong> PHC CoE</p>
      <p><strong>Jane Doe,</strong> PDMA</p>
      <p><strong>John Doe,</strong> PHC CoE</p>
      <p><strong>Jane Doe,</strong> PDMA</p>
      <p><strong>John Doe,</strong> PHC CoE</p>
      <p><strong>Jane Doe,</strong> PDMA</p>
    </div>
  </div>
);

function Acknowledgements() {
  const content = (
    <div className="acknowledgements d-flex align-items-center justify-content-center">
      <div className="background-map">
        <img src={mapImage} alt="background map" />
      </div>
      <CustomModal open content={modalContent} header={modalHeader} closeButton={false} />
    </div>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} title="Acknowledgments (Coming soon)" color="blue" />
  );
}

export default Acknowledgements;
