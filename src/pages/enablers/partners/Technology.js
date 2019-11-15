import React from 'react';
import { Link } from 'react-router-dom';

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
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'PHC IX/Technology',
    activeMenu: 3,
    parentTitle: 'Partners',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/partner/phc-it',
    active: true,
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
    <h2>Description & why it is important for PHC</h2>
    <p>
Our goal is to empower R&D and the business with a
      <strong>
fit-for-purpose, scalable and sustainable
      technology ecosystem
      </strong>
      {' '}
to deliver on personalized healthcare (PHC)’s mission to bring the right
      treatment to each patient and to improve Personalized Patient Care & Access.
    </p>
    <p>
      We enable the development of highly-sophisticated algorithms and support the processing
      of
      {' '}
      <Link to="/phc/future-patient-journey/data/advanced-analytics">integrated analysis</Link>
      {' '}
of
      clinical,
      {' '}
      <Link to="/phc/future-patient-journey/diagnosis/genomics">genomics</Link>
,
      <Link to="/phc/future-patient-journey/diagnosis/advanced-imaging">imaging</Link>
      {' '}
and digital data sets.
    </p>
    <p>
      To support the PHC vision and generate meaningful insights from increasing volumes of
      internal and external multi-modal data, we are building a
      leading-edge
      {' '}
      <Link to="/phc/future-patient-journey/data/advanced-analytics">Advanced Analytics</Link>
      {' '}
and meaningful
      data at scale (
      <Link to="/phc/future-patient-journey/data/real-world-data">MDAS</Link>
) platform
      (
      <a href="https://www.apollo.com/">Apollo</a>
).
      <br />
      Through automation, we enable data scientists to derive insights faster and more efficiently
      <strong>by reducing turnaround time from months to minutes</strong>
.
      <br />
      We are also engaging the entire Roche scientific community, external academics and
      crowdsourcing innovative ideas via Challenges and Hackathons hosted on the Apollo platform.
      Apollo implements FAIR principles (findability, accessibility, interoperability, and reusability)
      enabling Roche scientists and external partners to share data and collaborate on insight generation.
      We define the technology roadmap and implement the capabilities required to enable our
      mission to improve Personalized Patient Care & Access.
    </p>
    <h2>Connection to our PHC Vision and Strategy</h2>
    <span>
The PHC IX/Technology team supports the entire PHC strategy with through Apollo:
      <li>Multi-Modal Real World Data and Global Imaging Platform</li>
      <li>Data Challenges Platform</li>
      <li>Collaboration Platforms</li>
      <li>PHC Portals, Websites, and Dashboards</li>
      <li>Novel/Retail Ecosystems</li>
      <li>Federated Data Acquisition & Processes</li>
      <li>Automated Intelligent ETL and Curation</li>
      <li>PHC Advanced Analytics Platform</li>
      <li>
        <Link to="/phc/future-patient-journey/diagnosis/digital-health">Digital Health</Link>
        {' '}
Apps and Sensors Platform
      </li>
    </span>
    <br />
    <h2>
Example of initiatives PHC IX/Technology supports
    </h2>
    <span>
The PHC IX/Technology team supports
      the
      {' '}
      <Link to="/phc/systems-enablers/roches-initiatives/shining-towers">
Shining
                Towers
      </Link>
      {' '}
initiative in several ways:
      <li>
                  Accelerating the development of PHC ecosystem to make PHC a reality by implementing the required
                  infrastructure, access and funding models, policies, and clinical practice.
      </li>
      <li>
                  Implementing Apollo to enable the Croatian Oncology Database
      </li>
      <li>
                  Roche Advanced Analytics Network (RAAN): Building RAAN technology capabilities on Apollo and
                  enabling RAAN challenges, analytics capabilities, and data collaboration across Roche.
      </li>
    </span>
  </>
);

function Technology() {
  const content = (
    <div className="partners-it d-flex align-items-center justify-content-center">
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

export default Technology;
