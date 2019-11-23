import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PageContainer from '../../../components/pagecontainer';
import MainContent from '../../../components/maincontent';
import ImageModal from '../../../components/modals/ImageModal';
import mapImage from '../../../assets/common/roche.png';
import engineImage from '../../../assets/pages/enablers/phc-engine.png';
import acceleratingImage from '../../../assets/pages/enablers/phc-accelerating.png';
import assessmentImage from '../../../assets/pages/enablers/assessment.png';
import strategyImage from '../../../assets/pages/enablers/strategy-tool.png';
import marketImage from '../../../assets/pages/enablers/market.png';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Context',
    activeMenu: 3,
    parentTitle: 'Roche Initiatives',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/roches-initiatives/context',
    active: true,
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
    active: false,
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

function Context(props) {
  const { isMobile, mobileCollapsed, handleMenuClick } = props;

  const [image, setImage] = useState('');
  const [imageOpen, setImageOpen] = useState(false);

  const openImageModal = (image) => {
    setImage(image);
    setImageOpen(true);
  };

  const handleCloseClick = () => {
    setImageOpen(false);
  };

  const mainContent = (
    <>
      <h2>Achieving a fully enabled PHC engine</h2>
      <p>
        We recognize that fully embedded PHC capabilities won’t happen instantaneously.
        Instead, we see
        this
        {' '}
        <strong>transformation towards a fully enabled PHC engine</strong>
        , as shown below:
      </p>
      <img
        className="main-content-image"
        src={engineImage}
        onClick={() => openImageModal(engineImage)}
        alt="engine"
      />
      <br />
      <p>
        Note that this is dependent on your local PHC landscape. Check out the PHC Landscape Assessment and the
        PHC Strategy Builder presented further down in this section.
      </p>
      <h2>
        Accelerating Personalised Healthcare Internally and Externally
      </h2>
      <br />
      <img
        className="main-content-image"
        src={acceleratingImage}
        onClick={() => openImageModal(acceleratingImage)}
        alt="accelerating"
      />
      <div className="disclaimer">
        <span>
          THE IMPLEMENTATION OF ANY STRATEGY OR ACTIVITY IS SUBJECT TO AND CONDITIONAL
          UPON REVIEW AND APPROVAL BY RELEVANT BUSINESS DECISION-MAKERS AND LEGAL/REGULATORY
          PARTNERS OF THE LOCAL AFFILIATE.
        </span>
      </div>
      <br />
      <h2>
        Develop your PHC strategy with the Landscape Assessment and Strategy Builder
      </h2>
      <a href="https://sites.google.com/gene.com/phc-affiliate-hub/home/tools-resources/strategy-builder">
        <strong>PHC Market Maturity Self Assessment </strong>
      </a>
      <img
        className="main-content-image"
        src={assessmentImage}
        onClick={() => openImageModal(assessmentImage)}
        alt="assessmentImage"
      />
      <br />
      <a href="https://sites.google.com/gene.com/phc-affiliate-hub/home/tools-resources/strategy-builder?authuser">
        <strong>PHC Strategy Builder</strong>
      </a>
      <img
        className="main-content-image"
        src={strategyImage}
        onClick={() => openImageModal(strategyImage)}
        alt="strategyImage"
      />
      <br />
      <h2>
        Develop you PHC strategy with the Landscape Assessment and Strategy Builder
      </h2>
      <br />
      <strong>
PHC in your market
      </strong>
      <img
        className="main-content-image"
        src={marketImage}
        alt="marketImage"
        onClick={() => openImageModal(marketImage)}
      />
    </>
  );

  const content = (
    <div className="enablers-roche roche-context d-flex align-items-center justify-content-center">
      <div className="detail-map">
        <img src={mapImage} alt="detail map" />
      </div>
      <ImageModal open={imageOpen} image={image} handleCloseClick={handleCloseClick} />
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

Context.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mobileCollapsed: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default Context;
