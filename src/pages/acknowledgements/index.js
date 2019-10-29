import React from 'react';
import PageContainer from '../../components/pagecontainer';

const navOptions = [
  {
    id: 0,
    link: '/phc/homepage',
    title: 'WELCOME',
    top: 100,
    active: false,
    subMenus: [],
  },
  {
    id: 1,
    link: '/phc/future-patient-journey',
    title: 'FUTURE PATIENT JOURNEY',
    top: 140,
    active: false,
    subMenus: [],
  },
  {
    id: 2,
    link: '/phc/systems-enablers',
    title: 'SYSTEMS ENABLERS',
    top: 180,
    active: false,
    subMenus: [],
  },
  {
    id: 3,
    link: '/phc/abbreviation',
    title: 'ABBREVIATION LIST',
    top: 220,
    active: false,
    subMenus: [],
  },
  {
    id: 4,
    link: '/phc/acknowledgements',
    title: 'ACKNOWLEDGEMENTS',
    top: 260,
    active: true,
    subMenus: [],
  },
];

function Acknowledgements() {
  const content = (
    <h1>Acknowledgements</h1>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} />
  );
}

export default Acknowledgements;
