import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import ConnectionModal from '../../../components/modals/ConnectionModal';
import DropDown from '../../../atoms/DropDown';
import mapImage from '../../../assets/common/access.png';
import connectionIcon from '../../../assets/atoms/connection-icon-red.png';
import zoomOutIcon from '../../../assets/pages/journey/journey-zoom-out.png';
import journeyConnection from '../../../assets/pages/journey/others-zoom-map.png';
import zoomInIcon from '../../../assets/pages/journey/journey-zoom-in.png';
import connection from '../../../assets/pages/journey/connections/diagnostics.png';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Overview',
    activeMenu: 2,
    parentTitle: 'Rapid Access to Personalised Interventions',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/access/overview',
    active: false,
  },
  {
    id: 1,
    level: 3,
    title: 'Diagnostics',
    activeMenu: 2,
    parentTitle: 'Rapid Access to Personalised Interventions',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/access/diagnostics',
    active: true,
  },
  {
    id: 2,
    level: 3,
    title: 'CDS Systems',
    activeMenu: 2,
    parentTitle: 'Rapid Access to Personalised Interventions',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/access/cds-systems',
    active: false,
  },
  {
    id: 3,
    level: 3,
    title: 'Digital Health and SaMD',
    activeMenu: 2,
    parentTitle: 'Rapid Access to Personalised Interventions',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/access/digital-health',
    active: false,
  },
  {
    id: 4,
    level: 3,
    title: 'Value-Based Healthcare',
    activeMenu: 2,
    parentTitle: 'Rapid Access to Personalised Interventions',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/access/value-based-healthcare',
    active: false,
  },
];

const dropdownOptions = [
  {
    className: 'diagnosis-dropdown',
    title: 'Early Personalised Diagnosis',
    subMenus: [
      'Overview',
      'Diagnostics',
      'Genomics',
      'Advanced Imaging',
      'Digital Pathology',
      'CDS Systems',
      'Digital Health and SaMD',
    ],
    subMenuLinks: [
      '/phc/future-patient-journey/diagnosis/overview',
      '/phc/future-patient-journey/diagnosis/diagnostics',
      '/phc/future-patient-journey/diagnosis/genomics',
      '/phc/future-patient-journey/diagnosis/advanced-imaging',
      '/phc/future-patient-journey/diagnosis/digital-pathology',
      '/phc/future-patient-journey/diagnosis/cds-systems',
      '/phc/future-patient-journey/diagnosis/digital-health',
    ],
  },
  {
    className: 'monitoring-dropdown',
    title: 'Personalised Remote Monitoring & Care',
    subMenus: [
      'Overview',
      'Diagnostics',
      'Genomics',
      'Advanced Imaging',
      'CDS Systems',
      'Digital Health and SaMD',
    ],
    subMenuLinks: [
      '/phc/future-patient-journey/monitoring/overview',
      '/phc/future-patient-journey/monitoring/diagnostics',
      '/phc/future-patient-journey/monitoring/genomics',
      '/phc/future-patient-journey/monitoring/advanced-imaging',
      '/phc/future-patient-journey/monitoring/cds-systems',
      '/phc/future-patient-journey/monitoring/digital-health',
    ],
  },
  {
    className: 'data-dropdown',
    title: 'Data & Insights',
    subMenus: [
      'Overview',
      'Real-World Data',
      'Advanced Analytics',
    ],
    subMenuLinks: [
      '/phc/future-patient-journey/data/overview',
      '/phc/future-patient-journey/data/real-world-data',
      '/phc/future-patient-journey/data/advanced-analytics',
    ],
  },
  {
    className: 'care-dropdown',
    title: 'Personalised Care Plan',
    subMenus: [
      'Overview',
      'Diagnostics',
      'CDS Systems',
      'MGTOs',
      'Digital Health and SaMD',
    ],
    subMenuLinks: [
      '/phc/future-patient-journey/care/overview',
      '/phc/future-patient-journey/care/diagnostics',
      '/phc/future-patient-journey/care/cds-systems',
      '/phc/future-patient-journey/care/mgtos',
      '/phc/future-patient-journey/care/digital-health',
    ],
  },
  {
    className: 'access-dropdown',
    title: 'Rapid Access to Personalised Interventions',
    subMenus: [
      'Overview',
      'Diagnostics',
      'CDS Systems',
      'Digital Health and SaMD',
      'Value-based Healthcare',
    ],
    subMenuLinks: [
      '/phc/future-patient-journey/access/overview',
      '/phc/future-patient-journey/access/diagnostics',
      '/phc/future-patient-journey/access/cds-systems',
      '/phc/future-patient-journey/access/digital-health',
      '/phc/future-patient-journey/access/value-based-healthcare',
    ],
  },
];

function AccessDiagnostics() {
  const [connectionOpen, setConnectionOpen] = useState(false);

  const openConnectionModal = () => {
    setConnectionOpen(true);
  };

  const handleCloseClick = () => {
    setConnectionOpen(false);
  };

  const mainContent = (
    <>
      <h2>Description</h2>
      <p>
        Diagnostic tools are used to detect diseases or other conditions, and can be used to monitor a
        person’s overall health to help cure, treat, or prevent diseases. Moreover, they may support
        precision medicine to identify patients who are likely to benefit from specific treatments or therapies.
        <br />
        Roche is a pioneer and leader in diagnostics, including many technologies in common clinical practice
        today. Ensuring that patients have access to the right diagnostic at the right time at initial
        diagnosis, monitoring, and at recurrence or progression is a core element of the changes we are
        driving with personalised healthcare (PHC).
      </p>
      <h2>Why it is important for PHC</h2>
      <span>
        <strong>Smarter and more efficient R&D</strong>
        <br />
                To support Roche’s PHC efforts, our diagnostics tool offering is evolving as do the diagnostic
                technology. We are invested in developing PHC-enabling diagnostic tools, such as:
        <li>
          <strong>Next generation sequencing</strong>
          {' '}
          (NGS) based solutions such as ctDNA-based platforms (liquid biopsy) that may help
          to support earlier identification of at-risk patients and treatment or disease monitoring
        </li>
        <li>
          <strong>Digital pathology</strong>
          {' '}
          solutions that may support novel ways to augment current diagnostic algorithms and leverage
          machine learning to develop novel ways of identifying which patients may respond to certain treatment
        </li>
      </span>
      <p>
        <br />
        <strong>Improved access & personalized care</strong>
        <br />
      </p>
      <span>
        <strong>What it means for patients</strong>
        <br />
              Utilization of the right diagnostic tools may support:
        <li>
                Selection of the most appropriate patient treatment group
        </li>
        <li>
                Minimization of sides effects
        </li>
        <li>
                Maximization of efficacy.
        </li>
        <li>
Roche makes these diagnostics available to more patients faster through its commercial
                  expertise and unmatched global reach.
        </li>
      </span>
      <span>
        <strong>What it means for health systems</strong>
        <br />
        Diagnostic tools are critical to supporting personalised care and access. Diagnostic
        tools provide information and data that:
      </span>
      <br />
      <span>
        <strong>1. Companion diagnostics </strong>
        (CDx): May be predictive of patient response to a
        specific treatment and are required by the drug label for the safe and effective use of a therapy.
      </span>
      <br />
      <span>
        <strong>2. Complementary diagnostics </strong>
        (CoDx): Not required by a drug label, but support
        treatment decision making by providing useful information about a patient
        {'\''}
        s prognosis or
        likelihood of responding to certain therapies
      </span>
      <br />
      <br />
      <strong className="d-none d-md-block d-sm-none">Click button below to see:</strong>
      <div className="connection-button d-flex align-items-center" onClick={openConnectionModal}>
        <img src={connectionIcon} alt="connection icon" />
        Connections with Other PHC Topics
      </div>
      <br />
      <div className="diagnosis-second-section" />
      <h2>
        What Roche is doing in this area
      </h2>
      <p>
        Roche pioneered the use of CDx with the launch of HER2 for the Roche cancer drug Herceptin. Today,
        Roche Tissue Diagnostics is
        the
        {' '}
        <strong>
          global partner of choice for CDx, collaborating with more
          than 30 additional pharmaceutical companies
        </strong>
        {' '}
        to investigate and develop innovative
        predictive diagnostics identifying those patients who are more likely to respond to specific therapies.
      </p>
      <span>
        To learn more, check out the
        {' '}
        <a href="https://roche.csod.com/ui/lms-learning-details/app/course/
        f4373aea-146c-47fc-8d5c-b8ede371e1d6"
        >
“Diagnostics in Personalised Healthcare”
        </a>
        {' '}
        module
        from the PHC Pharma Starter Pack.
      </span>
      <br />
      <br />
      <h2>Key drivers/considerations</h2>
      <li>
        <strong>Fast turnaround time for results</strong>
        {' '}
        from ordering a diagnostic to obtaining results is
        a key consideration in use to support timely decision making for patients
      </li>
      <li>
        <strong>Actionability of results </strong>
        {' '}
        is critical to uptake of diagnostic testing
        - i.e. the information provided by test results should impact treatment decision making
      </li>
      <li>
        <strong>Broad access to quality testing </strong>
        {' '}
        is imperative to ensure patients can be identified for
        appropriate treatment. This is especially important where alternatives do not exist and/or markers
        being tested for are very rare, such as with NTRK testing for
        {' '}
        <Link to="/phc/systems-enablers/roches-initiatives/rozlytrek">
          Rozlytrek.
        </Link>
      </li>
      <li>
        <strong>Level of funding </strong>
        {' '}
        of advanced diagnostics by healthcare systems
        is a key consideration as it may greatly vary across countries and regions
      </li>
    </>
  );

  const [zoomOut, setZoomOut] = useState(true);
  const handleZoomClick = () => {
    setZoomOut(!zoomOut);
  };

  const connectionHeader = (
    <>
      {!zoomOut && (
        <>
          <img src={connectionIcon} alt="connection icon" className="zoom-in-icon" />
          <div className="connection-title zoom-out">
            <h2>Connections to the PHC-Enabled Patient Journey</h2>
          </div>
        </>
      )}
    </>
  );

  const connectionContent = (
    <>
      {zoomOut ? (
        <>
          <img src={connection} alt="cds connection" />
          <div
            className="zoom-out-button position-absolute d-flex align-items-center justify-content-center"
            onClick={() => handleZoomClick()}
          >
            <div className="col-lg-6 d-flex align-items-center p-0">
              {' '}
              <span>Click to see connections to the PHC-Enabled Patient Journey</span>
              {' '}
            </div>
            {' '}
            <div className="col-lg-6 d-flex align-items-center">
              {' '}
              <img src={zoomOutIcon} alt="zoom out" />
              {' '}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="zoom-in-map position-relative">
            <DropDown
              color="red"
              type="journey"
              options={dropdownOptions}
            />
            <img src={journeyConnection} alt="cds connection zoom out" />
          </div>
          <div
            className="zoom-out-button position-absolute d-flex align-items-center justify-content-center"
            onClick={() => handleZoomClick()}
          >
            <div className="col-lg-6 d-flex align-items-center">
              {' '}
              <span>
                {' '}
                Back to
                <br />
                {' '}
                interconnections
                {' '}
              </span>
              {' '}
            </div>
            <div className="col-lg-6">
              <img src={zoomInIcon} alt="zoom in" />
            </div>
          </div>
        </>
      )}
    </>
  );

  const content = (
    <div className="access-diagnostics page-wrapper d-flex align-items-center justify-content-center">
      <div className="detail-map">
        <img src={mapImage} alt="detail map" />
      </div>
      <ConnectionModal
        header={connectionHeader}
        content={connectionContent}
        className={zoomOut ? 'zoom-out' : 'zoom-in'}
        open={connectionOpen}
        handleCloseClick={handleCloseClick}
      />
      <MainContent content={mainContent} navOptions={navOptions} />
    </div>
  );

  return (
    <PageContainer
      page={content}
      navOptions={navOptions}
      title="Rapid Access to Personalised Interventions"
      color="blue"
    />
  );
}

export default AccessDiagnostics;
