import React from 'react';
import { Link } from 'react-router-dom';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import mapImage from '../../../assets/common/monitoring.png';
import connectionIcon from '../../../assets/atoms/connection-icon-red.png';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Overview',
    activeMenu: 2,
    parentTitle: 'Personalised Remote Monitoring & Care',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/monitoring/overview',
    active: false,
  },
  {
    id: 1,
    level: 3,
    title: 'Diagnostics',
    activeMenu: 2,
    parentTitle: 'Personalised Remote Monitoring & Care',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/monitoring/diagnostics',
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'Genomics',
    activeMenu: 2,
    parentTitle: 'Personalised Remote Monitoring & Care',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/monitoring/genomics',
    active: false,
  },
  {
    id: 3,
    level: 3,
    title: 'Advanced Imaging',
    activeMenu: 2,
    parentTitle: 'Personalised Remote Monitoring & Care',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/monitoring/advanced-imaging',
    active: true,
  },
  {
    id: 4,
    level: 3,
    title: 'CDS Systems',
    activeMenu: 2,
    parentTitle: 'Personalised Remote Monitoring & Care',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/monitoring/cds-systems',
    active: false,
  },
  {
    id: 5,
    level: 3,
    title: 'Digital Health(SaMD)',
    activeMenu: 2,
    parentTitle: 'Personalised Remote Monitoring & Care',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/monitoring/digital-health',
    active: false,
  },
];

const mainContent = (
  <>
    <h2>Description</h2>
    <p>
      Advanced imaging refers to the use of computer algorithms to analyze digital outputs of X-rays,
      computed tomography
      (CT), ultrasound, magnetic resonance imaging (MRI) and positron emission tomography (PET) that are used
      for medical diagnosis.
      <sup>1</sup>
      {' '}
      Click
      <Link to="/phc/future-patient-journey/data/advanced-analytics">here</Link>
      {' '}
      to learn more.
    </p>
    <h2>
      Why it is important & connection to our PHC vision and strategy (see PHC vision & strategy diagram on
      the left)
    </h2>
    <p>
      <strong>Smarter & more efficient R&D - </strong>
      By automating time-consuming & costly processes
      (e.g., secondary imaging reads & IRFs), this effort will result in significantly faster trials,
      while more accurate quantification of disease burden will enable robust cohort matching for use in
      synthetic control arm studies.
      <sup>2</sup>
    </p>
    <p>
      <strong>Improved access & personalized care - </strong>
      Development of automated algorithms can provide
      better and more accurate measurements of disease than currently available to help predict progression
      and response to therapy.
      <sup>2</sup>
      <br />
      These could deliver significant savings to health systems, or allow emerging health
      systems to deliver advanced care with a lower investment in infrastructure and other system resources.
    </p>
    <br />
    <strong className="d-none d-md-block d-sm-none">Click button below to see:</strong>
    <div className="connection-button d-flex align-items-center">
      <img src={connectionIcon} alt="connection icon" />
      Connections with Other PHC Topics
    </div>
    <div className="diagnosis-second-section" />
    <h2>
      What Roche is doing in this area
    </h2>
    <span>
                At Roche, we are focusing on curating and analyzing clinical images collected across the three
      {' '}
      <Link
        to="/phc/systems-enablers/roches-initiatives/showcases"
      >
                showcases
      </Link>
Ophthalmology, Cancer Immunotherapy, and Multiple Sclerosis to develop automated algorithms
                for more accurate predictions for disease
                progression and response to therapy. This automation will result in:
      <li>
                  Faster trials
      </li>
      <li>
                  More accurate quantification of disease burden
      </li>
      <li>
                  More robust cohort matching to synthetic control arm studies
      </li>
                We are also developing imaging-based biomarkers. This include:
      <li>
                  Full automation of existing endpoints that are used to assess efficacy in clinical trials
      </li>
      <li>
                  Novel prognostics and predictive imaging-based
        {' '}
        <Link to="/phc/future-patient-journey/diagnosis/genomics">biomarkers</Link>
      </li>
    </span>
    <p>
      The multi-functional PHC IX Imaging team is developing and implementing a Global Imaging Platform
      with tools for scientists and others to store, curate and analyze imaging data. The team is currently
      leading a pilot program to deploy and drive adoption within Roche of a production-ready system.
    </p>
    <br />
    <h2>Key drivers/considerations</h2>
    <p>
      <strong>Data Sharing/Privacy - </strong>
      When sharing images externally with 3rd parties
      (and even internally), there is a need to take data privacy into consideration. It matters to
      consider privacy, security, transparency, and patients control to opt out of any aspect at any
      time. The
      {' '}
      <Link to="/phc/systems-enablers/partner/policy">Data Privacy team</Link>
      {' '}
      can help determine the
      right level of privacy required before data can be shared.
    </p>
    <p>
      <strong>Data policy development – </strong>
      Regulation and guidance are needed to ensure
      collection of
      {' '}
      <Link to="/phc/future-patient-journey/data/real-world-data">high-quality data and interoperability</Link>
      {' '}
      of
      systems to facilitate sharing, all the while protecting patient privacy.
    </p>
    <p>
      <strong>Contracts - </strong>
      When entering into partnerships with commercial companies and academic
      institutions, be aware of complex intellectual property(IP) negotiations. Important to have both
      Legal and Partnering take a proactive lead to put a contract in place that meets the needs
      of the project.
    </p>
    <p>
      <strong>Complex data - </strong>
      The scale of the imaging data requires close collaboration and
      coordination with The multi-functional
      {' '}
      <Link to="/phc/systems-enablers/partner/patient-partnerships">
        PHC
        IX/Technology
      </Link>
      {' '}
      and imaging science.
    </p>
  </>
);

function MonitoringAdvancedImaging() {
  const content = (
    <div className="monitoring-advanced-imaging page-wrapper d-flex align-items-center justify-content-center">
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
      title="Continuous & remote patient management"
      color="blue"
    />
  );
}

export default MonitoringAdvancedImaging;
