import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
    active: true,
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
    <h2>
      Who are the PHC stakeholders and what are their needs?
    </h2>
    <p>
      <span>Patients and caregivers</span>
      {' '}
are increasingly interested in gaining information on their
      health and their genetic make-up. 23+me has a database of 5 million patients. 80% have given
      their consent for their data to be used for research purposes because they recognize the value.
      Most importantly, patients and caregivers want the knowledge and tools to be part of the
      shared decision making about their care.
    </p>
    <p>
      <span>Patients communities and organizations</span>
      {' '}
can impact policies and want to be part
      of the discussions on insights and data sharing.
    </p>
    <p>
      <span>Healthcare providers</span>
      {' '}
(HCPs) are increasingly using
      {' '}
      <Link
        to="/phc/future-patient-journey/data/real-world-data"
      >
      Electronic Health Records
      </Link>
      {' '}
and
      {' '}
      <Link to="/phc/future-patient-journey/monitoring/cds-systems">Decision Support Tools</Link>
.
      {' '}
HCPs
      are in need of reliable tools to assist in their decisions about
      diagnosis, treatment, and patient management. These tools should seamlessly fit in
      their daily practice, providing relevant information when needed.
    </p>
    <p>
      <span>Medical and Scientific societies </span>
      (e.g., ESMO, NCCN, ASCO, etc.) have a key role in
      driving adoption of new PHC technologies.
    </p>
    <p>
      <span>Hospital administrators and staff</span>
      {' '}
are key stakeholders
      for
      {' '}
      <Link to="/phc/future-patient-journey/access/value-based-healthcare">value-based healthcare (VBHC)</Link>
.
    </p>
    <p>
      <span>Regulators</span>
      {' '}
see ways to increase evidence. Several jurisdictions (the US,
      EU, China, and Japan) are beginning to establish
      {' '}
      <Link to="/phc/systems-enablers/partner/policy">
        PHC policies
      </Link>
, strategies and initiatives. They have begun to lay the groundwork for a
      PHC future by adopting policies and making investments to strengthen
      {' '}
      <Link to="/phc/systems-enablers/partner/phc-it">data infrastructure</Link>

, protect
      patient
      {' '}
      <Link to="/phc/systems-enablers/partner/policy">privacy</Link>
, spur innovation and enable the
      use of
      {' '}
      <Link to="/phc/future-patient-journey/data/real-world-data">real-world evidence (RWE)</Link>
      {' '}
 in
      healthcare decision-making.
    </p>
    <p>
      <span>Governments and some payers</span>
—those willing to move toward PHC—are engaged in
      the concept of paying for outcomes and gaining increased budget certainty. Patients and
      their healthcare providers are already beginning to benefit from improved health
      outcomes due to access to a new generation of PHC solutions. Here are a few
      examples of PHC-related activities:
    </p>
    <li>
      FMI recently secured reimbursement from Medicare, the largest payer in the US.
      In the UK, NICE accepted analysis of Flatiron data as basis for
      reducing discount on Tecentriq (visit our Case Study in
      {' '}
      <a target="_blank" rel="noopener noreferrer" href="https://go.roche.com/PHCStarterPack">
        PHC Starter Pack
      </a>
      {' '}
      for more information)
    </li>
    <li>
      Croatia government wants to dramatically decrease its cancer-induced mortality,
      which is one the worst in EU
    </li>
    <li>
      In China, the 2030 government mission is :
      <br />
      <span>
        1.To treat locally 90% of the overall cancer in decreasing medical nomadism
        {' '}
        <br />
        2.15% improvement of the overall survival in cancer
      </span>
    </li>
    <span>
                New PHC paradigm is the only way to achieve those objectives and consequently represents a huge
                opportunity for Roche.
    </span>
    <br />
    <br />
    <p>
      <span>Roche and other industry partners</span>
      {' '}
are part of a consortium focusing on developing
        guidance on incorporating real‑world data as evidence for regulatory approval.
    </p>
  </>
);

function StakeHolders(props) {
  const { isMobile, mobileCollapsed, handleMenuClick } = props;

  const content = (
    <div className="partners-stakeholders d-flex align-items-center justify-content-center">
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
      isMobile={isMobile}
      mobileCollapsed={mobileCollapsed}
      handleMenuClick={handleMenuClick}
      title="Partners"
      color="yellow"
    />
  );
}

StakeHolders.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mobileCollapsed: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default StakeHolders;
