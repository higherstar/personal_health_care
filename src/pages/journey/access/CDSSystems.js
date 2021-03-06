import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import ConnectionModal from '../../../components/modals/ConnectionModal';
import ImageModal from '../../../components/modals/ImageModal';
import DropDown from '../../../atoms/DropDown';
import mapImage from '../../../assets/common/access.png';
import customerImage from '../../../assets/pages/journey/customer-impact.png';
import businessImage from '../../../assets/pages/journey/business-impact.png';
import connectionIcon from '../../../assets/atoms/connection-icon-red.png';
import navifyImage from '../../../assets/pages/journey/navify-btn.png';
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
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'CDS Systems',
    activeMenu: 2,
    parentTitle: 'Rapid Access to Personalised Interventions',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/access/cds-systems',
    active: true,
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
      'Digital Health and SaMD',
    ],
    subMenuLinks: [
      '/phc/future-patient-journey/care/overview',
      '/phc/future-patient-journey/care/diagnostics',
      '/phc/future-patient-journey/care/cds-systems',
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

function AccessCDSSystems(props) {
  const { isMobile, mobileCollapsed, handleMenuClick } = props;

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
    setImageOpen(false);
    setConnectionOpen(false);
  };

  const mainContent = (
    <>
      <h2>Description</h2>
      <p>
        Increased volumes of healthcare data are now available to both healthcare providers (HCPs) and patients. This
        overwhelming growth in healthcare data is making clinical decisions more complex. We define a CDS system
        as a tool that enables objective personalised care decisions in the clinical setting by leveraging
        patient-specific data and analytics to support patient and provider decision making, and ultimately
        improve clinical outcomes.
        <br />
        Most CDS solutions are currently in Oncology, followed by Neuroscience and Ophthalmology—all
        areas of interest for Roche. For more information, please visit
        our “CDS systems” module from the
        {' '}
        <a target="_blank" rel="noopener noreferrer" href="https://go.roche.com/PHCStarterPack">
          PHC Pharma Starter Pack
        </a>
        .
        <br />
        In the future, we can imagine having patient interface in CDS systems and dedicated
        patient decision support tools to help patients
        {' '}
        <strong>actively participate and their care plan.</strong>
      </p>
      <h2>
        Why it is important for PHC
      </h2>
      <p>
        <strong>Improved access & personalised care</strong>
        <br />
        CDS systems have the potential to improve
        both healthcare provider and patient experiences as well as to enable a shared decision
        making between HCPs and their patients. High quality CDS systems should also act as Patient
        Decision Support by providing relevant information and including a patient interface.
      </p>
      <img
        className="main-content-image"
        src={customerImage}
        onClick={() => openImageModal(customerImage)}
        alt="customer"
      />
      <br />
      <p>
        CDS systems will also impact pharmaceutical industries by influencing how products
        are represented at the time of clinical decision making.
      </p>
      <img
        className="main-content-image"
        src={businessImage}
        onClick={() => openImageModal(businessImage)}
        alt="business"
      />
      <hr />
      <strong>Click button below to see:</strong>
      <div className="connection-button d-flex align-items-center" onClick={openConnectionModal}>
        <img src={connectionIcon} alt="connection icon" />
        Connections with Other PHC Topics
      </div>
      <hr />
      <h2>
        What Roche is doing in this area
      </h2>
      <span>
        At Roche Pharma, our vision is that high-quality CDS systems improve individual patient
        outcomes by supporting personalised clinical decisions in the clinical setting.
        <br />
        Roche’s Global Pharma CDS strategy was developed to ensure that:
        <li>CDS systems are of high quality</li>
        <li>
We are prepared to operate in an environment where CDS has significant influence on clinical
          care
        </li>
        However, in order to maintain our objectivity and credibility, Roche Pharma is not independently
        developing or commercializing CDS systems.
      </span>
      <hr />
      <div className="d-flex">
        <div className="col-lg-8 pl-0">
          <span>
            Roche Diagnostics is further developing the CDS system NAVIFY.
            The NAVIFY Decision Support Portfolio consists of a cross-diagnostics platform that hosts
            an ecosystems of workflow products, apps and services. It is comprised of:
          </span>
        </div>
        <div className="col-lg-4 mt-2 d-none d-lg-flex d-sm-none align-items-center text-content-img img-floodlight">
          <img className="main-content-image" src={navifyImage} alt="navify" />
        </div>
      </div>
      <div className="col-sm-12 d-lg-none d-sm-block text-content-img img-floodlight">
        <img className="main-content-image" src={navifyImage} alt="navify" />
        <hr />
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
        {' '}
        <strong>NAVIFY Publication Search</strong>
        {' '}
        make
        it
        easier to pull relevant reference information from global databases
      </li>
      <hr />
      <h2>
        Key drivers/considerations
      </h2>
      <li>
        <strong>High-quality CDS: </strong>
        The impact of CDS on patients, healthcare providers and the
        business is dependent on the quality of CDS.
      </li>
      <li>
        <strong>Objectivity </strong>
        is essential to preserve the integrity of CDS systems and
        pharmaceutical
        credibility.
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
          <img src={cdsConnection} alt="cds connection" />
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
    <div className="access-cds-systems page-wrapper d-flex align-items-center justify-content-center">
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
      <ImageModal open={imageOpen} image={image} handleCloseClick={handleCloseClick} />
      <MainContent content={mainContent} navOptions={navOptions} />
    </div>
  );

  return (
    <PageContainer
      page={content}
      navOptions={navOptions}
      title="Rapid Access to Personalised Interventions"
      color="blue"
      isMobile={isMobile}
      mobileCollapsed={mobileCollapsed}
      handleMenuClick={handleMenuClick}
    />
  );
}

AccessCDSSystems.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mobileCollapsed: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default AccessCDSSystems;
