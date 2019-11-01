import React from 'react';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import mapImage from '../../../assets/common/care.png';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Overview',
    activeMenu: 2,
    parentTitle: 'Personalised Care Plan',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/care/overview',
    active: true,
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
    active: false,
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
    <h2>
      “[The average oncologist] would have to read 29 hours each work day to stay abreast of new insights…”
    </h2>
    <p>
      <strong>Individual treatment selection becomes more challenging </strong>
      as the volume, variety,
      and depth of health data increases and advances in diagnostics and imaging provide deeper
      insights into patients and their disease.
    </p>
    <span>
      <strong>
        Clinical Decision Support (CDS) systems empower the healthcare provider
        (HCP) and patient to make an informed and confident decision
      </strong>
      {' '}
      Clinical Decision
      Support (CDS) systems empower the healthcare provider
      (HCP) and patient to make an informed and confident decision
      <li>
        An integrated and customized view of a patient’s clinical profile (including for tumor boards)
      </li>
      <li>
        Guideline and pathway recommendations,
      </li>
      <li>
        Relevant clinical trials and publications,
      </li>
      <li>
        Relevant coverage and reimbursement information.
      </li>
    </span>
    <p>
      Moreover, CDS Systems are increasingly evolving to provide information on pools
      of relevant patients with similar profiles, their treatment plan and outcomes.
    </p>
    <p>
      <strong>Artificial Intelligence and Machine Learning tools</strong>
      {' '}
      can further assist the
      HCP in
      <strong>selecting personalized care plans through CDS systems</strong>
      {' '}
      as the volume
      and quality of real-world data (RWD) increases.
    </p>
  </>
);

function CareOverview() {
  const content = (
    <div className="care-overview page-wrapper d-flex align-items-center justify-content-center">
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

export default CareOverview;
