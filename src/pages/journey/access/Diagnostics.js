import React, { useState } from 'react';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import ConnectionModal from '../../../components/modals/ConnectionModal';
import DropDown from '../../../atoms/DropDown';
import mapImage from '../../../assets/common/access.png';
import connectionIcon from '../../../assets/atoms/connection-icon-red.png';
import cdsConnection from '../../../assets/pages/journey/cds-connection-content.png';
import zoomOutIcon from '../../../assets/pages/journey/journey-zoom-out.png';
import journeyConnection from '../../../assets/pages/journey/others-zoom-map.png';
import zoomInIcon from '../../../assets/pages/journey/journey-zoom-in.png';

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
    title: 'Digital Health (SaMD)',
    activeMenu: 2,
    parentTitle: 'Rapid Access to Personalised Interventions',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/access/digital-health',
    active: false,
  },
  {
    id: 4,
    level: 3,
    title: 'Value-based Healthcare',
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
      'Digital Health (SaMD)',
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
      'Digital Health (SaMD)',
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
      'Digital Health (SaMD)',
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
      'Digital Health (SaMD)',
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
          <strong>Companion diagnostics</strong>
          {' '}
          (CDx) help healthcare professionals determine whether a
                particular
                therapeutic product’s benefits to patients will outweigh any potential serious side effects or risks.
        </li>
        <li>
          <strong>Complementary diagnostics</strong>
          {' '}
          inform treatment decisions. They help give healthcare
                professionals
                a better picture of a patient’s overall prognosis or likelihood to respond to different therapies.
        </li>
        <li>
          <strong>Predictive diagnostics</strong>
          {' '}
          provide information about how patients may respond to a
                specific target or therapy.
        </li>
      </span>
      <p>
        <strong>Improved access & personalized care</strong>
        <br />
      </p>
      <span>
        <strong>What it means for patients</strong>
        <br />
              Roche diagnostic tools support:
        <li>
                Selection of the most appropriate patient treatment group
        </li>
        <li>
                Minimization of sides effects
        </li>
        <li>
                Maximization of efficacy.
        </li>
        <span>
Roche makes these diagnostics available to more patients faster through its commercial
                  expertise and unmatched global reach.
        </span>
      </span>
      <p>
        <strong>What it means for health systems</strong>
        <br />
        Roche diagnostic tools that help to improve medical decision making may increase the
        speed and rate of funding for our therapies.
      </p>
      <strong className="d-none d-md-block d-sm-none">Click button below to see:</strong>
      <div className="connection-button d-flex align-items-center" onClick={openConnectionModal}>
        <img src={connectionIcon} alt="connection icon" />
        Connections with Other PHC Topics
      </div>
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
      <h2>Key drivers/considerations</h2>
      <li>
        Fast turnaround time for results could be a driver of diagnostics adoption
      </li>
      <li>
        Successful identification of patients candidate to a targeted Roche medication depends on use of
        appropriate and high-quality testing. Rozlytrek diagnostics strategy is an example of PHC in action.
        It aims at establishing molecular profiling as part of the standard of care, so that many patients
        have the chance to benefit from Rozlytrek.
        [link to press release
        press release
        {' '}
        <a href="https://www.roche.com/media/releases/med-cor-2019-08-16.htm ">
          https://www.roche.com/media/releases/med-cor-2019-08-16.htm
        </a>
        {' '}
        and internal hyperlink to page about Rozlytrek.]
      </li>
      <li>
        Level of funding of advanced diagnostics by the healthcare system as diagnostic tool may greatly
        varies across countries and regions
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
            <h2>Connections to the Systems Map</h2>
          </div>
        </>
      )}
    </>
  );

  const connectionContent = (
    <>
      {zoomOut ? (
        <>
          <img src={cdsConnection} alt="cds connection" />
          <div
            className="zoom-out-button position-absolute d-flex align-items-center justify-content-center"
            onClick={() => handleZoomClick()}
          >
            <div className="col-lg-6">
              Click to see the
              <br />
              Connections in the
              <br />
              PHC Systems Map
            </div>
            <div className="col-lg-6">
              <img src={zoomOutIcon} alt="zoom out" />
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
            <div className="col-lg-6">
              Back to
              <br />
              interconnections
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
