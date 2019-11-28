import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import ConnectionModal from '../../../components/modals/ConnectionModal';
import DropDown from '../../../atoms/DropDown';
import mapImage from '../../../assets/common/monitoring.png';
import connectionIcon from '../../../assets/atoms/connection-icon-red.png';
import zoomOutIcon from '../../../assets/pages/journey/journey-zoom-out.png';
import journeyConnection from '../../../assets/pages/journey/others-zoom-map.png';
import zoomInIcon from '../../../assets/pages/journey/journey-zoom-in.png';
import connection from '../../../assets/pages/journey/connections/advanced-imaging.png';

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
    title: 'Digital Health and SaMD',
    activeMenu: 2,
    parentTitle: 'Personalised Remote Monitoring & Care',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/monitoring/digital-health',
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

function MonitoringAdvancedImaging(props) {
  const { isMobile, mobileCollapsed, handleMenuClick } = props;

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
        Advanced imaging refers to the use of computer algorithms to analyze digital outputs of X-rays,
        computed tomography
        (CT), ultrasound, magnetic resonance imaging (MRI) and positron emission tomography (PET) that are used
        for medical diagnosis.
        To learn more, check out the “Meaningful Data at Scale, Advanced Analytics, and Realizing Value” module from the
        {' '}
        <a target="_blank" rel="noopener noreferrer" href="https://go.roche.com/PHCStarterPack">
          PHC Pharma Starter Pack
        </a>
        .
      </p>
      <h2>
        Why it is important in PHC
      </h2>
      <p>
        How Roche is leveraging advances in imaging:
      </p>
      <p>
        <strong>Smarter & more efficient R&D </strong>
        <br />
        By automating time-consuming & costly processes
        (e.g., secondary imaging reads & IRFs), this effort will result in significantly faster trials,
        while more accurate quantification of disease burden will enable robust cohort matching for use in
        synthetic control arm studies, as well as reducing costs associated with trials.
      </p>
      <p>
        <strong>Improved access & personalised care </strong>
        <br />
        Development of automated algorithms can provide
        better and more accurate measurements of disease than currently available to help predict progression
        and response to therapy.
        <br />
        These could deliver significant savings to healthcare systems, or allow emerging healthcare systems
        to deliver advanced care with a lower investment in infrastructure and other system resources.
      </p>
      <strong>Click button below to see:</strong>
      <div className="connection-button d-flex align-items-center" onClick={openConnectionModal}>
        <img src={connectionIcon} alt="connection icon" />
        Connections with Other PHC Topics
      </div>
      <div className="diagnosis-second-section" />
      <br />
      <h2>
        What Roche is doing in this area
      </h2>
      <span>
        <strong>Imaging</strong>
        <br />
                At Roche, we are focusing on curating and analyzing clinical images collected across the three
        {' '}
        <Link
          to="/phc/systems-enablers/roches-initiatives/showcases"
        >
                showcases
        </Link>
        {' '}
        (Ophthalmology, Cancer Immunotherapy, and Multiple Sclerosis), and Multiple Sclerosis to
        develop automated algorithms
                for more accurate predictions for disease
                progression and response to therapy.
        <br />
        This automation will result in:
        <li>
                  Faster trials
        </li>
        <li>
                  More accurate quantification of disease burden
        </li>
        <li>
                  More robust cohort matching to synthetic control arm studies
        </li>
        <br />
                We are also developing imaging-based biomarkers. This include:
        <li>
                  Full automation of existing endpoints that are used to assess efficacy in clinical trials
        </li>
        <li>
                  Novel prognostics and predictive imaging-based biomarkers
        </li>
      </span>
      <p>
        Efforts are underway to obtain Real-World Data (RWD) to expand the utility of some of these endpoints
        beyond standard clinical trials.
      </p>
      <strong>Global Imaging Platform</strong>
      <p>
        Develop and implement a global imaging platform with tools for scientists and other to store,
        curate and analyze imaging data.
      </p>
      <p>
        PHC IX Imaging is a multi-functional team driving the design and launch of a cross-pharma,
        cross-TA at-scale image acquisition, storage and exchange platform. The team successfully
        completed a Proof of Concept in June 2019 and is currently leading a Pilot program to deploy
        and drive adoption within Roche of a production-ready system. The Pilot will demonstrate
        ingestions of multiple large data sets from across pharmaceutical areas and includes
        stakeholder participation from across the company.
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
        <Link to="/phc/systems-enablers/partner/phc-it">
          PHC
          IX/Technology
        </Link>
        {' '}
        and imaging science.
      </p>
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
          <div className="zoom-in-map position-absolute d-md-none d-sm-block">
            <div className="custom-modal-header">
              <img src={connectionIcon} alt="connection icon" className="zoom-in-icon" />
              <div className="connection-title zoom-out">
                <h2>Connections to the PHC-Enabled Patient Journey</h2>
              </div>
            </div>
            <DropDown
              color="red"
              type="journey"
              options={dropdownOptions}
              isMobile={isMobile}
            />
            <img src={journeyConnection} alt="cds connection zoom out" />
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
    <div className="monitoring-advanced-imaging page-wrapper d-flex align-items-center justify-content-center">
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
      title="PERSONALISED REMOTE MONITORING & CARE"
      color="blue"
      isMobile={isMobile}
      mobileCollapsed={mobileCollapsed}
      handleMenuClick={handleMenuClick}
    />
  );
}

MonitoringAdvancedImaging.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mobileCollapsed: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default MonitoringAdvancedImaging;
