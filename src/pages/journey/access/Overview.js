import React from 'react';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import mapImage from '../../../assets/common/access.png';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Overview',
    activeMenu: 2,
    parentTitle: 'Rapid Access to Personalised Interventions',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/access/overview',
    active: true,
  },
  {
    id: 1,
    level: 3,
    title: 'Diagnostics',
    activeMenu: 2,
    parentTitle: 'Rapid Access to Personalised Interventions',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/access/diagnostics',
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'CDS Systems',
    activeMenu: 2,
    parentTitle: 'Rapid Access to Personalised Interventions',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/access/cds-systems',
    active: false,
  },
  {
    id: 3,
    level: 3,
    title: 'Digital Health (SaMD)',
    activeMenu: 2,
    parentTitle: 'Rapid Access to Personalised Interventions',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/access/digital-health',
    active: false,
  },
];

const mainContent = (
  <>
    <p>
      With rapid access to personalized interventions, patients and healthcare
      providers have access to the
      {' '}
      <strong>treatment options as recommended in the personalised care plan.</strong>
    </p>
    <p>
      Markets no longer feel compelled to add hurdles to limit the prescription
      of high-cost therapeutics because of
      {' '}
      <strong>novel, data-enabled payment models.</strong>
    </p>
    <p>
      Payers recognise the
      {' '}
      <strong>value driven by the intervention</strong>
      {' '}
due to the increasing application
      of full
      {' '}
      <strong>outcomes-based and value-based access models.</strong>
    </p>
  </>
);

function AccessOverview() {
  const content = (
    <div className="access-overview page-wrapper d-flex align-items-center justify-content-center">
      <div className="detail-map">
        <img src={mapImage} alt="detail map" />
      </div>
      <MainContent content={mainContent} navOptions={navOptions} />
    </div>
  );

  return (
    <PageContainer
      page={content}
      navOptions={navOptions}
      title="Full access to optimal care intervention"
      color="blue"
    />
  );
}

export default AccessOverview;
