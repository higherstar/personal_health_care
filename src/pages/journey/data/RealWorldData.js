import React, { useState } from 'react';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import ConnectionModal from '../../../components/modals/ConnectionModal';
import ImageModal from '../../../components/modals/ImageModal';
import mapImage from '../../../assets/common/data.png';
import connectionIcon from '../../../assets/atoms/connection-icon-red.png';
import benefitImage from '../../../assets/pages/journey/rwd-benefit.png';
import rocheImage from '../../../assets/pages/journey/real-world-roche.png';
import rocheUseImage from '../../../assets/pages/journey/real-world-roche-use.png';

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

function RealWorldData() {
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
        <strong>Real-World Evidence (RWE)</strong>
        .
      </p>
      <p>
        RWD can be collected from various sources such as electronic/medical health records,
        Digital Health solutions, pharmacy claims, insurance claims, disease and product registries,
        diagnostics/omics databases, hospitals/outpatient visits, health surveys and patient-reported
        outcomes (PROs), non-investigational studies, social media, etc.
      </p>
      <h2>
        Why it is important for PHC
      </h2>
      <p>
        <strong>Bridge evidence gaps of randomized control trials (RCTs)- </strong>
        The discovery of smaller
        and smaller patient sub-populations (e.g., rare cancer-driving genomic alterations) is making
        it unfeasible to run RCTs. Supplementary data sources, such as RWD, are needed to understand
        patient characteristics and treatment effectiveness. The heterogeneity of patient populations
        means that RCT data have low generalizability. This also leads to evidence gaps in treatments
        and patient outcomes in the real-world setting. However, RWD provides a much larger and more
        heterogeneous patient pool. RCTs are costly and time-consuming as compared to RWD.
      </p>
      <p>
        <strong>Smarter & more efficient R&D – </strong>
        Insights from RWD can provide learnings,
        such as treatment decisions in the real-world setting and molecularly-guided treatment
        options (MGTO). This can potentially fuel new research questions that can lead to smarter
        and more efficient R&D.
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
      <span>
RWD is a key component of our PHC vision and strategy because:
        <li>
                  RWD is a source of Meaningful Data at Scale (MDAS). MDAS combines high quality, high volume
                  of data per patient with the number of patients covered. In other words, MDAS is comprised
                  of
          {' '}
          <strong>deep, longitudinal data from broad patient populations</strong>
.
        </li>
        <li>
                  RWD fuels the PHC engine with continuous learning from every patient
          {'\''}
        s experience to create both a
                  high-resolution view of each patient and treatments personalized to each patient
          {'\''}
        s needs.
        </li>
        <li>
                  Downstream use of RWE in regulatory / Health Technology Assessment (HTA) / payer
                  decision-making can also
          {' '}
          <strong>facilitate and support the approvals of novel PHC solutions</strong>
        </li>
      </span>
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
      <p>
        Roche is using RWD to advance Research, Regulatory, Access, Medical and Commercial objectives.
        <sup>5</sup>
      </p>
      <div className="d-flex flex-row">
        <div className="d-flex justify-content-center align-items-center">
          <div className="color-box image-description-color-global" />
          <p className="color-description">Global use cases of RWD</p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="color-box image-description-color-regional" />
          <p className="color-description">Global/Regional</p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="color-box image-description-color-local" />
          <p className="color-description">
            Local use cases of RWD in close collaboration with Global on e.g., messaging-strategy
          </p>
        </div>
      </div>
      <img
        className="main-content-image d-none d-sm-none d-md-block"
        src={rocheUseImage}
        onClick={() => openImageModal(rocheUseImage)}
        alt="roche use"
      />
      <br />
      <strong className="d-none d-sm-none d-md-block">Click button below to see:</strong>
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
        Taking into consideration the lack of sources of high-quality RWD in ex-US markets
      </li>
      <li>
        Taking into consideration that the market for structured / curated data is nascent
      </li>
      <li>
        Taking into consideration the possibility of immature consensus of defining regulatory-grade
        RWD and levels of quality that are fit-for-purpose
      </li>
    </>
  );

  const content = (
    <div className="data-real-world-data page-wrapper d-flex align-items-center justify-content-center">
      <div className="detail-map">
        <img src={mapImage} alt="detail map" />
      </div>
      <ConnectionModal open={connectionOpen} handleCloseClick={handleCloseClick} />
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
    />
  );
}

export default RealWorldData;
