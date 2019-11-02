import React, { useState } from 'react';

import PageContainer from '../../../components/pagecontainer';
import MainContent from '../../../components/maincontent';
import ImageModal from '../../../components/modals/ImageModal';
import mapImage from '../../../assets/common/roche.png';
import engineImage from '../../../assets/pages/enablers/phc-engine.png';
import acceleratingImage from '../../../assets/pages/enablers/phc-accelerating.png';

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
    title: 'ROZLYTREK',
    activeMenu: 3,
    parentTitle: 'Roche Initiatives',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/roches-initiatives/rozlytrek',
    active: false,
  },
];

function Context() {
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
        className="main-content-image d-none d-sm-none d-md-block"
        src={engineImage}
        onClick={() => openImageModal(engineImage)}
        alt="engine"
      />
      <br />
      <h2>
        Accelerating Personalised Healthcare Internally and Externally
      </h2>
      <br />
      <img
        className="main-content-image d-none d-sm-none d-md-block"
        src={acceleratingImage}
        onClick={() => openImageModal(acceleratingImage)}
        alt="accelerating"
      />
    </>
  );

  const content = (
    <div className="roche-context d-flex align-items-center justify-content-center">
      <div className="detail-map">
        <img src={mapImage} alt="detail map" />
      </div>
      <ImageModal open={imageOpen} image={image} handleCloseClick={handleCloseClick} />
      <MainContent content={mainContent} navOptions={navOptions} />
    </div>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} title="Roche initiatives" color="yellow" />
  );
}

export default Context;
