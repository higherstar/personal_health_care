import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import PageContainer from '../../../components/pagecontainer';
import MainContent from '../../../components/maincontent';
import ImageModal from '../../../components/modals/ImageModal';
import CustomModal from '../../../components/modals/CustomModal';
import ExpandButton from '../../../atoms/ExpandButton';
import mapImage from '../../../assets/common/roche.png';
import shiningTowersImage from '../../../assets/pages/enablers/shining-towers.png';
import worldMapImage from '../../../assets/pages/enablers/world-map.png';
import assetsOneImage from '../../../assets/pages/enablers/assets-one.png';
import assetsImage from '../../../assets/pages/enablers/assets.png';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Context',
    activeMenu: 3,
    parentTitle: 'Roche Initiatives',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/roches-initiatives/context',
    active: false,
  },
  {
    id: 1,
    level: 3,
    title: 'Showcases',
    activeMenu: 3,
    parentTitle: 'Roche Initiatives',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/roches-initiatives/showcases',
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'Shining Towers',
    activeMenu: 3,
    parentTitle: 'Roche Initiatives',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/roches-initiatives/shining-towers',
    active: true,
  },
  {
    id: 3,
    level: 3,
    title: 'Example of PHC in Action: ROZLYTREK',
    activeMenu: 3,
    parentTitle: 'Roche Initiatives',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/roches-initiatives/rozlytrek',
    active: false,
  },
];

const countryData = [
  {
    number: 1,
    name: 'Australia',
    className: 'australia',
    content: 'End-to-end PHC practice in a pilot ecosystem, driving standard Comprehensive Genomic '
      + 'Profiling (CGP) testing, national coverage of Pharmaceutical Benefits Scheme-listed therapies '
      + 'based upon CGP-identified biomarkers, and pilot co-funding'
      + 'for molecularly guided therapy options',
  },
  {
    number: 2,
    name: 'Croatia',
    className: 'croatia',
    content: 'Governmental funded Foundation Medicine (FMI) profiling of all metastatic cancer '
      + 'patients & access to molecularly guided'
      + 'therapy options and Roche access to corresponding database',
  },
  {
    number: 3,
    name: 'Middle East',
    className: 'middle-east',
    content: 'Key cancer centers and payer commitment to co-fund full PHC ecosystem: FMI results '
      + 'validated by Molecular Tumor '
      + 'Board to enable access to molecularly-guided therapy options (MGTOs) with '
      + 'outcomes collected on Navify real-world data '
      + '(RWD) platform',
  },
  {
    number: 4,
    name: 'Switzerland',
    className: 'switzerland',
    content: 'Enabling MGTOs funding via an expansion of Health Insurance Ordinance (KVV)71 '
      + 'access path and co-creation of (and '
      + 'access to) SAKK RWD platform',
  },
  {
    number: 5,
    name: 'Canada',
    className: 'canada',
    content: 'Large public/private pannership, transforming the healthcare system through '
      + 'innovation with $+40M already committed '
      + 'from industry partners and government enabling RWD acceptance and indication-based pricing',
  },
  {
    number: 6,
    name: 'Italy',
    className: 'italy',
    content: 'Enabling national-level access to molecularly-guided therapy options '
      + '(MGTOs) through expansion of \'648 law',
  },
  {
    number: 7,
    name: 'Korea',
    className: 'korea',
    content: 'Demonstrate clinical and economic value of end-to-end PHC practice in a pilot '
      + 'ecosystem to enable MGTOs funding via '
      + 'an expansion of the \'160 access path and leveraging Molecular Tumor Board, RWD, and CGP',
  },
  {
    number: 8,
    name: 'Germany',
    className: 'germany',
    content: 'Collaboration with Flatiron and three leading cancer centers to establish a common '
      + 'Clinico-Genomic Database to leverage '
      + 'in Personalised Reimbursement Models pilots, RWD regulatory decision-making, '
      + 'clinical recommendation & decision '
      + 'support',
  },
  {
    number: 9,
    name: 'Singapore',
    className: 'singapore',
    content: 'Enabling CGP ubiquity via regional FMI lab & innovative access / public funding to MGTOs',
  },
  {
    number: 10,
    name: 'USA',
    className: 'usa',
    content: 'Utilize the full suite of Roche PHC tools to co-create meaningful partnerships with '
      + 'priority accounts across three distinct '
      + 'provider '
      + 'segments (community practices, academic centers, and risk bearing Integrated '
      + 'Delivery Networks); designed in a manner '
      + 'that can be scaled to similar accounts across these segments by 2021',
  },
];

function ShiningTowers(props) {
  const { isMobile, mobileCollapsed, handleMenuClick } = props;

  const [image, setImage] = useState('');
  const [imageOpen, setImageOpen] = useState(false);
  const [worldMapModalOpen, setWorldMapModalOpen] = useState(false);

  const openImageModal = (image) => {
    setImage(image);
    setImageOpen(true);
  };

  const handleCloseClick = () => {
    setImageOpen(false);
  };

  const handleWorldMapClose = () => {
    setWorldMapModalOpen(false);
  };

  const handleWorldMapOpen = () => {
    setWorldMapModalOpen(true);
  };

  const mainContent = (
    <>
      <h2>Description</h2>
      <p>
        Shining Towers are initiatives that will help
        {' '}
        <strong>
          accelerate the development of a full PHC
          clinical ecosystem.
        </strong>
      </p>
      <img
        className="main-content-image d-none d-sm-none d-md-block"
        src={shiningTowersImage}
        onClick={() => openImageModal(shiningTowersImage)}
        alt="shiningTowersImage"
      />
      <br />
      <span>
We are building local PHC cases to speed up access to advanced diagnostics and treatment.
        We are leveraging
        {' '}
        <Link to="/phc/future-patient-journey/data/real-world-data">
        real-world data (RWE)
        </Link>
        {' '}
        to enable flexible/adaptive access models for PHC treatments, interventions and
        {' '}
        <Link to="/phc/future-patient-journey/care/cds-systems">CDS systems</Link>
        {' '}
that link to actual value delivered while ensuring affordability. To do so, we need to:
        <li>
More precise and earlier
          {' '}
          <Link to="/phc/future-patient-journey/diagnosis/diagnostics">diagnostics</Link>
          {' '}
done more frequently along with an ncreased
          use of
          {' '}
          <Link to="/phc/future-patient-journey/diagnosis/genomics">genomic profiling</Link>
        </li>
        <li>Increase availability of molecularly-guided therapy option (MGTO)</li>
        <li>Design trials adapted to PHC</li>
        <li>
Foster discussion among all relevant
          {' '}
          <Link to="/phc/systems-enablers/partner/stakeholders">stakeholders</Link>
        </li>
        <li>
          Empowerment of patients (& health systems) to choose the right treatment
        </li>
        <li>
          Co-creation of solutions with health systems to support their adaptation to changes of technology,
          data and science, as well as catalyze adoption of new PHC paradigms
        </li>
      </span>
      <br />
      <h2>
        Shining Towers integrated solutions process
      </h2>
      <p>
        We need to establish minimal viable product (MVP) infrastructures
        before integrating Roche PHC solutions.
      </p>
      <p>
        1-Achieve partner agreements to
        {' '}
        <strong>implement MVP components</strong>
        (Roche PHC assets not mandatory):
      </p>
      <div className="d-flex image-description-list">
        <div className="col-lg-6">
          <li>CGP adoption</li>
          <li>MTB/CDS</li>
          <li>RWD capture</li>
          <li>Access to therapy</li>
        </div>
      </div>
      <p>
        2-Through co-creation, identify opportunities to
        {' '}
        <strong>augment and expand with Roche assets:</strong>
      </p>
      <div className="d-flex image-description-list">
        <div className="col-lg-6">
          <li>Digital pathology</li>
          <li>FMI/Avenio + other tests</li>
          <li>Enhanced Navify engagement</li>
          <li>Imaging</li>
          <li>Preferred RWD partner solutions</li>
        </div>
      </div>
      <img
        className="main-content-image d-none d-sm-none d-md-block"
        src={assetsImage}
        onClick={() => openImageModal(assetsImage)}
        alt="assetsImage"
      />
      <br />
      <p>
        3-Execute and implement
        <strong>integrated PHC solutions</strong>
        {' '}
        by:
      </p>
      <div className="d-flex image-description-list">
        <div className="col-lg-6">
          <li>Developing guidance for solution integration</li>
          <li>Creating playbooks for PHC market development</li>
          <li>Tailoring PHC solutions to market needs</li>
          <li>Cycling insights back to the organization for continual development</li>
        </div>
      </div>
      <img
        className="main-content-image d-none d-sm-none d-md-block"
        src={assetsOneImage}
        onClick={() => openImageModal(assetsOneImage)}
        alt="assetsOneImage"
      />
      <br />
      <p>
        <strong>
          Shining Tower initiatives
        </strong>
        {' '}
launched in 10 countries around the World will enable critical business drivers. Each
        initiative aim at demonstrating the feasibility of PHC and integrates PHC solutions.
      </p>
      <img
        className="main-content-image d-none d-sm-none d-md-block"
        src={worldMapImage}
        onClick={() => handleWorldMapOpen()}
        alt="worldMapImage"
      />
    </>
  );

  const worldMapModalContent = (
    <>
      <div className="world-map position-relative">
        <img
          className="world-map-image d-none d-sm-none d-md-block"
          src={worldMapImage}
          alt="worldMapImage"
        />
        {countryData.map((country) => (
          <ExpandButton
            header={country.name}
            content={country.content}
            className={country.className}
          />
        ))}
      </div>
    </>
  );

  const content = (
    <div className="enablers-roche roche-shining-towers d-flex align-items-center justify-content-center">
      <div className="detail-map">
        <img src={mapImage} alt="detail map" />
      </div>
      <ImageModal open={imageOpen} image={image} handleCloseClick={handleCloseClick} />
      <CustomModal
        open={worldMapModalOpen}
        content={worldMapModalContent}
        handleCloseClick={() => handleWorldMapClose()}
      />
      <MainContent content={mainContent} navOptions={navOptions} />
    </div>
  );

  return (
    <PageContainer
      page={content}
      navOptions={navOptions}
      isMobile={isMobile}
      mobileCollapsed={mobileCollapsed}
      handleMenuClick={handleMenuClick}
      title="Roche initiatives"
      color="yellow"
    />
  );
}

ShiningTowers.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mobileCollapsed: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default ShiningTowers;
