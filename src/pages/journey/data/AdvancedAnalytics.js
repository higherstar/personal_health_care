import React from 'react';
import PropTypes from 'prop-types';

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
    active: false,
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
    active: true,
  },
];

const mainContent = (
  <>
    <h2>Description</h2>
    <p>
To generate value from MDAS, we employ advanced analytics and sophisticated techniques to gain
      deeper insights or make predictions. Technologies, such as machine learning and artificial
      intelligence, show the promise for wide reaching impact. At Roche, we are building algorithms using
      Artificial Intelligence (AI) and machine learning to help us make faster, more accurate, and more
      precise decisions based on insights and predictions generated from Meaningful Data at Scale.
      We are also integrating data from multiple sources and types.
    </p>
    <h2>Why it is important in PHC</h2>
    <p>
We are enabling the use of Advanced Analytics (AA) to generate evidence/insights from MDAS to
        create value for R&D and patient care and access.
    </p>
    <h2>
What Roche is doing in this area
    </h2>
    <span>
      <strong>Enhanced Data and Insight Sharing (EDIS)</strong>
      {' '}
is a project at Roche that aims to
          make our internal data Findable, Accessible, Interoperable, and Reusable (F.A.I.R.).
          This will facilitate data management and sharing.
      <br />
      <strong>Roche Advanced Analytics Network (RAAN) </strong>
was launched in mid-2017 (with 300+ members)
                to connect advanced analytics experts across Roche. It established the RAAN
                Advisory Group and sponsored the RAAD Challenge (130+ teams participating). Its objectives are:
      <br />
      <li>
                  To foster knowledge sharing and further strengthen our advanced analytics expertise across
                  the organization
      </li>
      <li>
                  To identify ad address business questions that can be solved using advanced analytics
      </li>
      <strong>Advanced Analytics Academic Collaborations </strong>
will become a Fit-for-Purpose Academic
                Outreach Model, matching the complexity of Roche’s business needs with the right level of engagement
                and specific technical expertise.
      <br />
      <strong>PHC IX Data and Analytics </strong>
is an extensible cloud platform solution built to
                acquire, confirm, curate, process, and expose various data sources in a controlled, secure,
                reliable, and globally accessible location for advanced analytics purposes. The combination of
                getting the right data and analytics tools together in one platform will allow us to take a
                significant step forward putting Roche at the forefront of our drive to deliver PHC toe very patient.
      <br />
                The
      {' '}
      <strong>Challenges Platform </strong>
provides challenge-specific infrastructure and guidance for
                communities wanting to run data challenges.
    </span>
    <hr />
    <h2>Key drivers/considerations</h2>
    <span>
      <strong>Key Learnings</strong>
      <li>Roche has strong existing AA capabilities, however they are fragmented</li>
      <li>Lots of enthusiasm & interest in AA across the organization</li>
      <li>
We can better leverage this expertise to help answer business questions,
                  establish external connections and evaluate opportunities
      </li>
      <li>
Roche is well positioned to build academic partnerships to continue to strengthen its AA
                  capabilities & enhance our brand as leader in this field
      </li>
    </span>
    <hr />
    <span>
      <strong>Watch-Outs</strong>
      <li>Data is the bottleneck and should be the core focus initially</li>
      <li>Attracting and retaining AA talent is challenging - highly competitive</li>
      <li>
Fast moving environment - easy to fall behind with emerging methodologies and technologies
                  if not proactive
      </li>
      <li>
Need to ensure we keep on fostering an environment of learning and communication between
                  departments to drive our AA capabilities
      </li>
      <li>
Sometimes challenging to coordinate RAAN activities across the globe & keep 400+ people engaged
                  and utilized.  Also this is a volunteer driven network.
      </li>
    </span>
  </>
);

function AdvancedAnalytics(props) {
  const { isMobile, mobileCollapsed, handleMenuClick } = props;

  const content = (
    <div className="data-advanced-analytics page-wrapper d-flex align-items-center justify-content-center">
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
      isMobile={isMobile}
      mobileCollapsed={mobileCollapsed}
      handleMenuClick={handleMenuClick}
    />
  );
}

AdvancedAnalytics.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mobileCollapsed: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default AdvancedAnalytics;
