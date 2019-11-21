import React from 'react';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import mapImage from '../../../assets/common/data.png';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Overview',
    activeMenu: 2,
    parentTitle: 'Data & Insights',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/data/overview',
    active: true,
  },
  {
    id: 1,
    level: 3,
    title: 'Real-World Data',
    activeMenu: 2,
    parentTitle: 'Data & Insights',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/data/real-world-data',
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'Advanced Analytics',
    activeMenu: 2,
    parentTitle: 'Data & Insights',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/data/advanced-analytics',
    active: false,
  },
];

const mainContent = (
  <>
    <p>
      A
      {' '}
      <strong>
free flow of linked, longitudinal patient data between healthcare providers all
      throughout a patient
        {'\''}
s care
      </strong>
      {' '}
is a prerequisite for personalised healthcare (PHC). This
      flow of information allows a patient to move seamlessly between providers.
    </p>
    <p>
      Data allows the system to measure the
      {' '}
      <strong>
impact of each component of the
      health system
      </strong>
, thus
      {' '}
      <strong>driving continuous efficiency improvements.</strong>
      {' '}
      Data is also collected and used to
      {' '}
      <strong>
support and measure the impact of
      various interventions across the health system driving access and funding.
      </strong>
    </p>
    <p>
      <strong>Large, high-quality aggregated data sets</strong>
      {' '}
are made available in select cases and
      are
      {' '}
      <strong>used to support advanced tools</strong>
, such as Clinical Decision Support (CDS) systems,
      and research and development, both within academia and commercial businesses.
    </p>
    <p>
      Data sharing not
      {' '}
      <strong>only optimises outcomes for individual patients</strong>
      {' '}
but is also
      used to
      {' '}
      <strong>deliver new insights</strong>
      {' '}
to all those patients with a similar profile and
      to the wider health system.
    </p>
  </>
);

function DataOverview() {
  const content = (
    <div className="data-overview page-wrapper d-flex align-items-center justify-content-center">
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
      title="Data & Insights"
      color="blue"
    />
  );
}

export default DataOverview;
