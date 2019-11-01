import React from 'react';

import PageContainer from '../../../components/pagecontainer';
import MainContent from '../../../components/maincontent';
import mapImage from '../../../assets/common/partners.png';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Stakeholders',
    activeMenu: 3,
    parentTitle: 'Partners',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/partner/stakeholders',
    active: false,
  },
  {
    id: 1,
    level: 3,
    title: 'Policy',
    activeMenu: 3,
    parentTitle: 'Partners',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/partner/policy',
    active: true,
  },
  {
    id: 2,
    level: 3,
    title: 'PHC IX/Technology',
    activeMenu: 3,
    parentTitle: 'Partners',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/partner/phc-it',
    active: false,
  },
  {
    id: 3,
    level: 3,
    title: 'Patient Partnerships',
    activeMenu: 3,
    parentTitle: 'Partners',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/partner/patient-partnerships',
    active: false,
  },
];

const mainContent = (
  <>
    <h2>Description</h2>
    <p>
Legal frameworks around the collection, processing & sharing of data is an important enabler
      for PHC. Stakeholders such as patients, healthcare providers (HCPs), regulators and policy
      makers, may be involved.
    </p>
    <h2>
Why it is important in PHC
    </h2>
    <span>
It is important to identify, understand and address key barriers to building and gaining access to
                Meaningful Data at Scale (MDAS). Initial barriers to considered are:
      <sup>1</sup>
      <li>Cost</li>
      <li>Scale (breadth and depth)</li>
      <li>Data privacy laws and regulations</li>
      <li>Patient cultural perspectives</li>
      <li>Infrastructure</li>
      <li>Data quality and completeness</li>
      <li>Access mode</li>
      <li>Unstructured nature of data</li>
      <li>Intellectual property</li>
    </span>
    <br />
    <h2>Key drivers/considerations</h2>
    <p>
Data Privacy is a key area where adoption of legislation is emerging and requirements vary across
        geographies. Some of this emerging legislation is due to actions from other industries with little
        consideration for the impact on health data specifically.
    </p>
    <p>
        How
      {' '}
      <strong>Roche</strong>
      {' '}
and those we share data with collect, manage and analyze data including
        de-identification,
        anonymization should be transparent to reinforce our commitment to data privacy. Roche needs access
        to high-quality, interoperable data to realize PHC. Policy that enables access to and sharing of
        data is key, as well as policy that supports implementation of data quality and interoperability
        standards.
    </p>
    <span>
                You can address your questions about data privacy to
      <br />
      <a href="https://global.privacy@roche.com">global.privacy@roche.com</a>
.
    </span>
  </>
);

function Policy() {
  const content = (
    <div className="partners-policy d-flex align-items-center justify-content-center">
      <div className="detail-map">
        <img src={mapImage} alt="detail map" />
      </div>
      <MainContent content={mainContent} navOptions={navOptions} />
    </div>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} title="Partners" color="yellow" />
  );
}

export default Policy;
