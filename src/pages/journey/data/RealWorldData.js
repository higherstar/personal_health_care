import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import ConnectionModal from '../../../components/modals/ConnectionModal';
import ImageModal from '../../../components/modals/ImageModal';
import DropDown from '../../../atoms/DropDown';
import mapImage from '../../../assets/common/data.png';
import connectionIcon from '../../../assets/atoms/connection-icon-red.png';
import benefitImage from '../../../assets/pages/journey/rwd-benefit.png';
import rocheImage from '../../../assets/pages/journey/real-world-roche.png';
import rocheUseImage from '../../../assets/pages/journey/real-world-roche-use.png';
import rwdConnection from '../../../assets/pages/journey/connections/real-world-data.png';
import zoomOutIcon from '../../../assets/pages/journey/journey-zoom-out.png';
import journeyConnection from '../../../assets/pages/journey/data-zoom-map.png';
import zoomInIcon from '../../../assets/pages/journey/journey-zoom-in.png';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Overview',
    activeMenu: 2,
    parentTitle: 'Data & Insights',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/data/overview',
    active: false,
  },
  {
    id: 1,
    level: 3,
    title: 'Real-World Data',
    activeMenu: 2,
    parentTitle: 'Data & Insights',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/data/real-world-data',
    active: true,
  },
  {
    id: 2,
    level: 3,
    title: 'Advanced Analytics',
    activeMenu: 2,
    parentTitle: 'Data & Insights',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/data/advanced-analytics',
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

function RealWorldData(props) {
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
        <strong>Real-World Data (RWD)</strong>
        {' '}
        is defined as data relating to patient health routinely
        collected from a variety of sources outside of traditional controlled clinical interventional
        trials, under real-life clinical practice.
      </p>
      <p>
        The evidence derived from the analysis and/or synthesis of RWD is
        called
        {' '}
        <strong>Real-World Evidence (RWE)</strong>
        .
      </p>
      <p>
        RWD can be collected from various sources such as electronic/medical health records,
        Digital Health solutions, pharmacy claims, insurance claims, disease and product registries,
        diagnostics/genomics databases, hospitals/outpatient visits, health surveys and patient-reported
        outcomes (PROs), non-investigational studies, social media, etc.
      </p>
      <span>
        To learn more, check out the “Introduction to Real-World Data” modules from the
        {' '}
        <a target="_blank" rel="noopener noreferrer" href="https://go.roche.com/PHCStarterPack">
          PHC Pharma Starter Pack
        </a>
        .
      </span>
      <hr />
      <h2>
        Why it is important for PHC
      </h2>
      <span>
        <strong>Bridge evidence gaps of randomized control trials (RCTs)</strong>
        <li>
          RCTs in general have low generalizability. Although the exact numbers vary by publications, in
          Oncology, it is estimated that only 3-4% of patients participate in clinical trials.
          Ultimately, these lead to evidence gaps in treatments and patient outcomes
          in the real-world setting. However, RWD provides a much larger and more heterogeneous patient pool.
        </li>
        <li>
          As smaller and smaller patient sub-populations are being identified (e.g. genomic alteration
          subtypes in rare cancers), it is becoming challenging to run RCTs.
          Supplementary data sources, such as RWD, are needed to understand patient
          characteristics and treatment effectiveness.
        </li>
        <li>
          For rare diseases, placebo-controlled studies are sometimes infeasible or unethical,
          which further highlights the need for RWD.
        </li>
        <li>
          At the time of regulatory approval, there are many questions left unanswered by RCT data.
          RWD can play a key role in addressing some of those knowledge gaps.
        </li>
        <li>
          RWD can help to save costs and time as compared to RCTs, thereby accelerating patient access to the drug.
        </li>
      </span>
      <br />
      <p>
        <strong>Smarter & more efficient R&D</strong>
        <br />
        Insights from RWD can provide knowledge on how treatment decisions are made in the real-world
        and what treatment options are currently available. This can potentially fuel new research
        questions that can lead to smarter and more efficient R&D.
      </p>
      <p>
        <strong>Benefits to Stakeholders</strong>
      </p>
      <img
        className="main-content-image"
        src={benefitImage}
        onClick={() => openImageModal(benefitImage)}
        alt="benefit"
      />
      <hr />
      <span>
PHC is a shared mission at Roche and RWD is a critical component of PHC because:
        <li>
RWD is a source of Meaningful Data at Scale (MDAS). MDAS is comprised of large amounts of high-quality,
          complementary, longitudinal data across broad patient populations. Therefore, it
          enables an understanding of patient and disease heterogeneity and its relevance to
          clinical outcomes at an unprecedented resolution.
        </li>
        <li>
Downstream use of RWE in regulatory/Health Technology Assessment (HTA)/payer decision making can also
          facilitate and support the approvals of novel PHC solutions.
        </li>
      </span>
      <br />
      <h2>
        What Roche is doing in this area
      </h2>
      <p>
        Roche’s RWD assets span sources including platforms,
        registries, and genomic databases.
      </p>
      <img
        className="main-content-image"
        src={rocheImage}
        onClick={() => openImageModal(rocheImage)}
        alt="roche"
      />
      <hr />
      <p>
        Roche is using RWD to advance Research, Regulatory, Access, Medical and Commercial objectives.
      </p>
      <img
        className="main-content-image"
        src={rocheUseImage}
        onClick={() => openImageModal(rocheUseImage)}
        alt="roche use"
      />
      <hr />
      <strong>Click button below to see:</strong>
      <div className="connection-button d-flex align-items-center" onClick={openConnectionModal}>
        <img src={connectionIcon} alt="connection icon" />
        Connections with Other PHC Topics
      </div>
      <br />
      <h2>
        Key considerations of using RWD
      </h2>
      <li>
        Harmonizing data from multiple sources while retaining data comprehensiveness
      </li>
      <li>
        Ensuring similar data quality and compatibility
      </li>
      <li>
        Extracting meaningful information from unstructured data
        (e.g., physician notes or genomic testing reports)
      </li>
      <li>
        Validating RWD endpoints
      </li>
      <li>
        Identifying and accounting for biases
      </li>
      <li>
        Guaranteeing consent, patient privacy and confidentiality
      </li>
      <li>
        Securing needed resources for planning, educating, collecting / upkeeping data, quality control,
        etc.
      </li>
      <li>
        Establishing sources of high-quality RWD in ex-US markets
      </li>
      <li>
        Establishing regulatory guidance on data standards and quality, which is needed for the generation and
        analysis of RWD/RWE. Alignment with external stakeholders on these standards is also required.
      </li>
    </>
  );

  const [zoomOut, setZoomOut] = useState(true);
  const handleZoomClick = () => {
    setZoomOut(!zoomOut);
  };

  const connectionContent = (
    <>
      {zoomOut ? (
        <>
          <img src={rwdConnection} alt="cds connection" />
          <div
            className="zoom-out-button position-absolute d-flex align-items-center justify-content-center"
            onClick={() => handleZoomClick()}
          >
            <div className="col-lg-6 d-flex align-items-center p-0">
              <span>Click to see connections to the PHC-Enabled Patient Journey</span>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <img src={zoomOutIcon} alt="zoom out" />
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
              color="blue"
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
              color="blue"
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

  const content = (
    <div className="data-real-world-data page-wrapper d-flex align-items-center justify-content-center">
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
      title="Data & Insights"
      color="blue"
      isMobile={isMobile}
      mobileCollapsed={mobileCollapsed}
      handleMenuClick={handleMenuClick}
    />
  );
}

RealWorldData.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mobileCollapsed: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default RealWorldData;
