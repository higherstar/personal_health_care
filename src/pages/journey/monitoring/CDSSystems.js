import React from 'react';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import mapImage from '../../../assets/common/monitoring.png';
import cdsDescImage from '../../../assets/pages/journey/cds-desc.png';
import customerImage from '../../../assets/pages/journey/customer-impact.png';
import businessImage from '../../../assets/pages/journey/business-impact.png';
import connectionIcon from '../../../assets/atoms/connection-icon-red.png';
import navifyImage from '../../../assets/pages/journey/navify-btn.png';

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
    active: false,
  },
  {
    id: 4,
    level: 3,
    title: 'CDS Systems',
    activeMenu: 2,
    parentTitle: 'Personalised Remote Monitoring & Care',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/monitoring/cds-systems',
    active: true,
  },
  {
    id: 5,
    level: 3,
    title: 'Digital Health (SaMD)',
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
      Increased volumes of healthcare data are now available to both HCPs and patients. This
      overwhelming growth in healthcare data is making clinical decisions more complex. High-quality Clinical
      Decision Support (CDS) leverages objective health data and analytics to improve individual patient
      outcomes by enabling more confident clinical decisions in real time at the point of care. Most CDS
      solution are currently in Oncology, followed by Neuroscience and Ophthalmology—all areas of interest
      for Roche.
    </p>
    <img
      className="main-content-image d-none d-md-block d-sm-none"
      src={cdsDescImage}
      alt="cds desc"
    />
    <br />
    <h2>
      Why it is important for PHC
    </h2>
    <p>
      <strong>Improved access & personalized care</strong>
      <br />
      CDS systems have the potential to improve
      both healthcare provider and patient experiences as well as to enable a shared decision
      making between HCPs and their patients. High quality CDS systems should also act as Patient
      Decision Support by providing relevant information and including a patient interface.
    </p>
    <img
      className="main-content-image d-none d-sm-none d-md-block"
      src={customerImage}
      alt="customer"
    />
    <p>
      CDS systems will also impact pharmaceutical industries by influencing how products
      are represented at the time of clinical decision making.
    </p>
    <img
      className="main-content-image d-none d-sm-none d-md-block"
      src={businessImage}
      alt="business"
    />
    <strong className="d-none d-sm-none d-md-block">Click button below to see:</strong>
    <div className="connection-button d-flex align-items-center">
      <img src={connectionIcon} alt="connection icon" />
      Connections with Other PHC Topics
    </div>
    <br />
    <h2>
      What Roche is doing in this area
    </h2>
    <p>
      At Roche Pharma, our vision is that high-quality CDS systems improve individual patient
      outcomes by supporting personalized clinical decisions in the clinical setting.
    </p>
    <p>
      At Roche Pharma, our vision is that high-quality CDS systems improve individual patient
      outcomes by supporting personalized clinical decisions in the clinical setting.
      <br />
      1. CDS systems are of high quality.
      <br />
      2. We are prepared to operate in an environment where CDS has significant influence on clinical
      care.
      <br />
      However, in order to maintain our objectivity and credibility, Roche Pharma is not independently
      developing or commercializing CDS systems.
    </p>
    <div className="d-flex">
      <div className="col-lg-8">
        <p>
          Roche Diagnostics is further developing the CDS system NAVIFY.
          The NAVIFY Decision Support Portfolio consists of a cross-diagnostics platform that hosts
          an ecosystems of workflow products, apps and services. It is comprised of:
        </p>
      </div>
      <div className="col-lg-4 text-content-img img-floodlight">
        <img className="main-content-image" src={navifyImage} alt="navify" />
      </div>
    </div>
    <li>
      <strong>NAVIFY Tumor Board</strong>
      , a could-based software solution that streamlines and
      standardizes preparation, facilitation and documentation of oncology treatment decisions;
      oncology care teams can more easily upload patient records from all diagnostic disciplines
      to one dashboard. Having complete patient diagnostic information in one location helps
      experts review all relevant files quickly and align on the best possible treatment plan
      for each patients
    </li>
    <li>
      <strong>NAVIFY Clinical Trial Match</strong>
      {' '}
      and
      <strong>NAVIFY Publication Search</strong>
      {' '}
      make
      it
      easier to pull relevant reference information from global databases.
    </li>
    <br />
    <h2>
      Key drivers/considerations
    </h2>
    <li>
      <strong>High-quality CDS: </strong>
      The impact of CDS on patients, healthcare providers and the
      business is dependent on the quality of CDS.
      <sup>1</sup>
    </li>
    <li>
      <strong>Objectivity </strong>
      is essential to preserve the integrity of CDS systems and
      pharmaceutical
      credibility.
      <sup>1</sup>
    </li>
  </>
);

function MonitoringCDSSystems() {
  const content = (
    <div className="monitoring-cds-systems page-wrapper d-flex align-items-center justify-content-center">
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

export default MonitoringCDSSystems;
