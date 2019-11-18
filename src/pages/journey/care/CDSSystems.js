import React, { useState } from 'react';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import ConnectionModal from '../../../components/modals/ConnectionModal';
import ImageModal from '../../../components/modals/ImageModal';
import DropDown from '../../../atoms/DropDown';
import mapImage from '../../../assets/common/care.png';
import cdsDescImage from '../../../assets/pages/journey/cds-desc.png';
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
    active: true,
  },
  {
    id: 3,
    level: 3,
    title: 'Digital Health and SaMD',
    activeMenu: 2,
    parentTitle: 'Personalised Care Plan',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/care/digital-health',
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

function CareCDSSystems() {
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
        Increased volumes of healthcare data are now available to both HCPs and patients. This
        overwhelming growth in healthcare data is making clinical decisions more complex. High-quality Clinical
        Decision Support (CDS) leverages objective health data and analytics to improve individual patient
        outcomes by enabling more confident clinical decisions in real time at the point of care. Most CDS
        solution are currently in Oncology, followed by Neuroscience and Ophthalmology—all areas of interest
        for Roche.
      </p>
      <span>
      Most CDS solutions are currently in Oncology, followed by Neuroscience and Ophthalmology—all
      areas of interest for Roche. For more information, please visit our
        {' '}
        <span>CDS systems module.</span>
      </span>
      <br />
      <br />
      <p>
        In the future, we can imagine having patient interface in CDS systems and dedicated
        patient decision support tools to help patients
        {' '}
        <strong>actively participate and their care plan.</strong>
      </p>
      <img
        className="main-content-image d-none d-md-block d-sm-none"
        src={cdsDescImage}
        onClick={() => openImageModal(cdsDescImage)}
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
        onClick={() => openImageModal(customerImage)}
        alt="customer"
      />
      <p>
        CDS systems will also impact pharmaceutical industries by influencing how products
        are represented at the time of clinical decision making.
      </p>
      <img
        className="main-content-image d-none d-sm-none d-md-block"
        src={businessImage}
        onClick={() => openImageModal(businessImage)}
        alt="business"
      />
      <strong className="d-none d-sm-none d-md-block">Click button below to see:</strong>
      <div className="connection-button d-flex align-items-center" onClick={openConnectionModal}>
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
    <div className="care-cds-systems page-wrapper d-flex align-items-center justify-content-center">
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
      title="Personalised care plan"
      color="blue"
    />
  );
}

export default CareCDSSystems;
