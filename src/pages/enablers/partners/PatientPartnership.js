import React from 'react';

import PageContainer from '../../../components/pagecontainer';
import MainContent from '../../../components/maincontent';
import mapImage from '../../../assets/common/partners.png';
import descriptionImage from '../../../assets/pages/enablers/patient-partnerships-description.png';
import lifecycleImage from '../../../assets/pages/enablers/product-lifecycle.png';
import pillarsImage from '../../../assets/pages/enablers/strategic-pillars.png';
import tacticsImage from '../../../assets/pages/enablers/tactics-overview.png';

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
    active: true,
  },
];

const mainContent = (
  <>
    <h2>Description</h2>
    <p>
Our goal is to amplify patients’ voice in shaping the future of personalized healthcare by
      orchestrating Roche patient partnerships, both internally and externally.
    </p>
    <img
      className="main-content-image d-none d-sm-none d-md-block"
      src={descriptionImage}
      alt="description"
    />
    <h2>
Patient Partnership in PHC
    </h2>
    <p>
PHC is important because of its potential to improve the health and wellbeing of people
          living with different conditions. Key benefits for patients include better prediction of
          those who are at risk of disease, earlier diagnosis, more targeted treatment and care,
          earlier detection and management of side effects, improved quality of life and enhanced
          health and wellbeing.
    </p>
    <p>
          Despite advances that have been made to date, much work is needed to ensure that patients have access
          to the potentially transformative benefits of PHC, Patient communities have an important role to play
          in advancing the PHC agenda.
    </p>
    <h2>
Strategic Pillars (2019 – 2021)
    </h2>
    <img
      className="main-content-image d-none d-sm-none d-md-block"
      src={pillarsImage}
      alt="pillars"
    />
    <br />
    <h2>
Tactics Overview (2019 – 2021)
    </h2>
    <img
      className="main-content-image d-none d-sm-none d-md-block"
      src={tacticsImage}
      alt="tactics"
    />
    <br />
    <h2>
Patient Partnership along the molecule lifecycle
    </h2>
    <p>
Patient partnerships play a pivotal role to inform, optimize and improve the outcomes of our
                      programs across the value chain. Different partnership activities alongside other stakeholders
                      can achieve differing goals along the value chain.
    </p>
    <p>
      <strong>
Goals of patient partnership across the value chain:
      </strong>
      <br />
                      Along the product life cycle, Patient Partnership leads and supports cross-functional
                      teams & activities.
    </p>
    <img
      className="main-content-image d-none d-sm-none d-md-block"
      src={lifecycleImage}
      alt="lifecycle"
    />
    <span>
                To learn more, check out the Integrated Patient Partnership (iPP)
                Community:
      {' '}
      <a href="https://sites.google.com/roche.com/patient-partnership/home">
                https://sites.google.com/roche.com/patient-partnership/home
      </a>
    </span>
  </>
);

function PatientPartnership() {
  const content = (
    <div className="partners-patient-partnerships d-flex align-items-center justify-content-center">
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

export default PatientPartnership;
