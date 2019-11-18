import React, { useState } from 'react';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import ConnectionModal from '../../../components/modals/ConnectionModal';
import ImageModal from '../../../components/modals/ImageModal';
import DropDown from '../../../atoms/DropDown';
import mapImage from '../../../assets/common/diagnosis.png';
import connectionIcon from '../../../assets/atoms/connection-icon-red.png';
import connection from '../../../assets/pages/journey/connections/digital-health.png';
import zoomOutIcon from '../../../assets/pages/journey/journey-zoom-out.png';
import journeyConnection from '../../../assets/pages/journey/others-zoom-map.png';
import zoomInIcon from '../../../assets/pages/journey/journey-zoom-in.png';
import challengeImage from '../../../assets/pages/journey/challenges.png';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Overview',
    activeMenu: 2,
    parentTitle: 'Early Personalised Diagnosis',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/diagnosis/overview',
    active: false,
  },
  {
    id: 1,
    level: 3,
    title: 'Diagnostics',
    activeMenu: 2,
    parentTitle: 'Early Personalised Diagnosis',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/diagnosis/diagnostics',
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'Genomics',
    activeMenu: 2,
    parentTitle: 'Early Personalised Diagnosis',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/diagnosis/genomics',
    active: false,
  },
  {
    id: 3,
    level: 3,
    title: 'Advanced Imaging',
    activeMenu: 2,
    parentTitle: 'Early Personalised Diagnosis',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/diagnosis/advanced-imaging',
    active: false,
  },
  {
    id: 4,
    level: 3,
    title: 'Digital Pathology',
    activeMenu: 2,
    parentTitle: 'Early Personalised Diagnosis',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/diagnosis/digital-pathology',
    active: false,
  },
  {
    id: 5,
    level: 3,
    title: 'CDS Systems',
    activeMenu: 2,
    parentTitle: 'Early Personalised Diagnosis',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/diagnosis/cds-systems',
    active: false,
  },
  {
    id: 6,
    level: 3,
    title: 'Digital Health and SaMD',
    activeMenu: 2,
    parentTitle: 'Early Personalised Diagnosis',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/diagnosis/digital-health',
    active: true,
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

function DiagnosisDigitalHealth() {
  const [image, setImage] = useState('');
  const [imageOpen, setImageOpen] = useState(false);
  const [connectionOpen, setConnectionOpen] = useState(false);

  const openImageModal = (image) => {
    setImage(image);
    setImageOpen(true);
  };


  const openConnectionModal = () => {
    setConnectionOpen(true);
  };

  const handleCloseClick = () => {
    setConnectionOpen(false);
    setImageOpen(false);
  };

  const mainContent = (
    <>
      <h2>Description</h2>
      <span>
        <strong>Digital Health</strong>
        {' '}
can be defined as the use of digital technologies in
        clinical pathways for disease measurement and intervention to improve patient care and outcomes.
        <br />
              One example of a Digital Health solution is the FDA-approved mySugr app, which is the most widely
              used mobile app for diabetes. It provides patients with immediate access to certified diabetes
              educators when necessary based on algorithmic detection of problematic glucose patterns, the app
        provides patients with immediate access to certified diabetes educators when necessary.
        <br />
              At Roche, there are four archetypes of Digital Health, which are as follows:
        <li>
          <strong>Digital Biomarkers: </strong>
Community and regulator-accepted endpoints and outcomes
                that redefine our understanding of the disease.
        </li>
        <li>
          <strong>Digital Care Solutions: </strong>
Integrated ecosystem of Digital Health solutions
                for ongoing disease management in routine care.
        </li>
        <li>
          <strong>Digital Therapeutics: </strong>
Software-based disease treatments and rehabilitations
                that are prescribed by HCPs.
        </li>
        <li>
          <strong>Smart drug delivery systems: </strong>
Connected drug administration and delivery
                systems to enhance health outcomes of patients.
        </li>
      </span>
      <p>
        To learn more, check out
        the
        {' '}
        <a href="external hyperlink to module https://roche.csod.com/ui/lms-learning-details/app/
        course/530ba4c4-5a27-42a2-b2aa-abd7d91cc80d"
        >
        “Digital Health and Software as a Medical Device”
        </a>
        module from the PHC Pharma Starter Pack.
      </p>
      <br />
      <h2>
        Why it is important
      </h2>
      <p>
        <strong>
Smarter & more efficient R&D
        </strong>
        <br />
        Digital Health solutions have the potential to enable more efficient research cycles through
        the refinement of clinical trial eligibility criteria and more sensitive endpoints.
      </p>
      <span>
        Digital Health solutions can solve unmet medical and patient needs along the patient journey.
        There are applications of Digital Health solutions at every step of the patient journey, such as at:
        <li>
Screening and diagnosis
        </li>
        <li>
          Disease management
        </li>
        <li>
          Monitoring and adherence to therapy
        </li>
        Digital Health also supports patient satisfaction, quality of life, and survival.
      </span>
      <br />
      <h2>
        Why it is important for PHC
      </h2>
      <p>
        Digital Health is a key component of our personalized healthcare strategy. It allows us to
        learn from real-world patient experiences and data, to speed up medical research, to provide
        better advice to physicians and patients and to develop new ways of assessing value in healthcare.
        Ultimately, it accelerates and enhances our ability to understand a patient’s unique disease and
        individualize treatment to meet their needs.
      </p>
      <strong className="d-none d-md-block d-sm-none">Click button below to see:</strong>
      <div className="connection-button d-flex align-items-center" onClick={openConnectionModal}>
        <img src={connectionIcon} alt="connection icon" />
        Connections with Other PHC Topics
      </div>
      <div className="diagnosis-second-section" />
      <br />
      <h2>
        What Roche is doing in this area
      </h2>
      <p>
        In
        {' '}
        <strong>Multiple Sclerosis</strong>
        {' '}
(MS), Floodlight™ is an example of a digital biomarker,
        which is an archetype
        of Digital Health solutions. Floodlight™ is a smartphone application that is being developed to
        detect the disease course and progression in MS in the real world by measuring subtle changes in
        cognition and motor function every day. This will give people with MS and HCPs a greater understanding
        of the disease.
      </p>
      <p>
        Floodlight Open is an open, ongoing research project that is searching for new perspectives into
        MS and utilizes the Floodlight™ mobile application. People with MS are asked to contribute their
        data and researchers can access this large-scale dataset for their own work and analysis.
      </p>
      <span>
        We hope that Floodlight™ will provide value in the following ways:
        <br />
        1. Allow for faster and more efficient R&D through novel, regulated grade endpoints
        <br />
        2. Improve MS management in clinical practice
      </span>
      <br />
      <h2>
        Key considerations of Digital Health
      </h2>
      <p>
        Some of the Digital Health solutions fall into a category of medical device called
        software as a medical device (SaMD)
      </p>
      <span>
        <strong>Regulations with respect to Software as a Medical Device (SaMD)</strong>
        <br />
        According to the International Medical Device Regulators Forum (IMDRF), SaMD is defined as
        <strong>
software intended to be used for one or more medical purposes that perform these purposes
          without being part of a hardware medical device
        </strong>
. SaMD is used to inform clinical management,
        drive clinical management, or treat and diagnose diseases. Any of the previously mentioned
        Digital Health archetypes at Roche could be a SaMD.
      </span>
      <p>
        For a Digital Health tool to be used in clinical decision making, it must meet
        the regulatory requirements of a SaMD.
      </p>
      <p>
        Specific requirements and quality standards for SaMDs are necessary to ensure that they s are
        reliable and safe tools. Most of the regulators, such as the US FDA and EMA, already
        have a framework of regulations in place to cover Digital Health products, which includes
        SaMD. Other countries and regions also have their own regulatory frameworks.
      </p>
      <p>
        <strong>
Adoption of Digital Health Solutions
        </strong>
        The table below summarizes the various challenges of adopting Digital Health solutions for payers,
        HCPs, patients, regulators, and industry/R&D.
      </p>
      <img
        className="main-content-image challenge-image d-none d-sm-none d-md-block"
        src={challengeImage}
        onClick={() => openImageModal(challengeImage)}
        alt="roche use"
      />
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
          <img src={connection} alt="cds connection" />
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
    <div className="journey-digital-health page-wrapper d-flex align-items-center justify-content-center">
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
      <ImageModal
        className="digital-health-image-modal"
        open={imageOpen}
        image={image}
        handleCloseClick={handleCloseClick}
      />
      <MainContent content={mainContent} navOptions={navOptions} />
    </div>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} title="Early, personalised diagnosis" color="blue" />
  );
}

export default DiagnosisDigitalHealth;
