import React from 'react';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import mapImage from '../../../assets/common/care.png';
import connectionIcon from '../../../assets/atoms/connection-icon-red.png';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Overview',
    activeMenu: 2,
    parentTitle: 'Personalised Care Plan',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/care/overview',
    active: false,
  },
  {
    id: 1,
    level: 3,
    title: 'Diagnostics',
    activeMenu: 2,
    parentTitle: 'Personalised Care Plan',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/care/diagnostics',
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'CDS Systems',
    activeMenu: 2,
    parentTitle: 'Personalised Care Plan',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/care/cds-systems',
    active: false,
  },
  {
    id: 3,
    level: 3,
    title: 'MGTOs',
    activeMenu: 2,
    parentTitle: 'Personalised Care Plan',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/care/mgtos',
    active: true,
  },
  {
    id: 4,
    level: 3,
    title: 'Digital Health(SaMD)',
    activeMenu: 2,
    parentTitle: 'Personalised Care Plan',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/care/digital-health',
    active: false,
  },
];

const mainContent = (
  <>
    <h2>Description</h2>
    <p>
In oncology, molecularly-guided therapy (MGT) refers to a treatment approach based on each patient
      {'\''}
s
      genomic profile as opposed to the tumor location.
      <sup>1</sup>
    </p>
    <h2>
Why it is important & connection to our PHC vision and strategy (see PHC vision & strategy diagram on
      the left)
    </h2>
    <p>
      <strong>Smarter & more efficient R&D – </strong>
Understanding mechanisms of resistance in cancer
      patients can help to drive faster, smarter and more efficient decision making in cancer
      immunotherapy development and to enable differentiation and expanded access for our therapies.
      <sup>3</sup>
    </p>
    <p>
      <strong>Improved access & personalized care - </strong>
Rather than finding the site of tumor origin,
      which can be costly and time-consuming, it may be more efficient to target gene alteration against
      which an effective therapy already existed.
      <sup>1</sup>
      Giving patients MGT early can potentially prolong survival.
    </p>
    <br />
    <strong className="d-none d-md-block d-sm-none">Click button below to see:</strong>
    <div className="connection-button d-flex align-items-center">
      <img src={connectionIcon} alt="connection icon" />
      Connections with Other PHC Topics
    </div>
    <br />
    <h2>
What Roche is doing in this area
    </h2>
    <p>
      The
      {' '}
      <strong>CUPISCO trial </strong>
is the first of its kind: It combines Comprehensive Genomic
          Profiling (CGP) of each patient’s tumor either by tissue or blood with a patient-centric
          decision-making process by a Molecular Tumor Board for individual cases. Based on these parameters,
          a highly-specific molecularly-guided therapy is designed for each patient.
    </p>
    <br />
    <h2>
Key drivers/considerations
      <sup>1</sup>
    </h2>
    <p>
      <strong>Testing adoption – </strong>
Level of adoption of NGS tests and CGP in diagnostic practice
      <br />
      <strong>Advanced diagnostics funding – </strong>
Level of funding of NGS tests by the healthcare
              system as diagnostic tool
      <br />
      <strong>Advanced diagnostics funding – </strong>
Existence of pathway for the approval of
                molecularly-guided therapies
      <br />
      <strong>Payer acceptance – </strong>
Level of reimbursement of molecularly-guided therapies
    </p>
  </>
);

function MGTOs() {
  const content = (
    <div className="care-mgtos page-wrapper d-flex align-items-center justify-content-center">
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
      title="Personalised care plan"
      color="blue"
    />
  );
}

export default MGTOs;
