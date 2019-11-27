import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PageContainer from '../../../components/pagecontainer';
import MainContent from '../../../components/maincontent';
import mapImage from '../../../assets/common/partners.png';
import descriptionImage from '../../../assets/pages/enablers/patient-partnerships-description.png';
import lifecycleImage from '../../../assets/pages/enablers/product-lifecycle.png';
import pillarsImage from '../../../assets/pages/enablers/strategic-pillars.png';
import tacticsImage from '../../../assets/pages/enablers/tactics-overview.png';
import ImageModal from '../../../components/modals/ImageModal';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Stakeholders',
    activeMenu: 3,
    parentTitle: 'Partners',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/partner/stakeholders',
    active: false,
  },
  {
    id: 1,
    level: 3,
    title: 'Policy',
    activeMenu: 3,
    parentTitle: 'Partners',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/partner/policy',
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'PHC IX/Technology',
    activeMenu: 3,
    parentTitle: 'Partners',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/partner/phc-it',
    active: false,
  },
  {
    id: 3,
    level: 3,
    title: 'Patient Partnerships',
    activeMenu: 3,
    parentTitle: 'Partners',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/partner/patient-partnerships',
    active: true,
  },
];

function PatientPartnership(props) {
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
      <h2>Description</h2>
      <p>
        Our goal is to amplify patients’ voice in shaping the future of personalised healthcare by
        orchestrating Roche patient partnerships, both internally and externally.
      </p>
      <img
        className="main-content-image"
        src={descriptionImage}
        onClick={() => openImageModal(descriptionImage)}
        alt="description"
      />
      <br />
      <h2>
        Patient Partnership in PHC
      </h2>
      <p>
        PHC is important because of its potential to improve the health and wellbeing of people
        living with different conditions. Key benefits for patients include better prediction of
        those who are at risk of disease, earlier diagnosis, more targeted treatment and care,
        earlier detection and management of side effects, improved quality of life and enhanced
        health and wellbeing.
      </p>
      <p>
        Despite advances that have been made to date, much work is needed to ensure that patients have access
        to the potentially transformative benefits of PHC, Patient communities have an important role to play
        in advancing the PHC agenda.
      </p>
      <h2>
        Strategic Pillars (2019 – 2021)
      </h2>
      <img
        className="main-content-image"
        src={pillarsImage}
        onClick={() => openImageModal(pillarsImage)}
        alt="pillars"
      />
      <br />
      <h2>
        Tactics Overview (2019 – 2021)
      </h2>
      <img
        className="main-content-image"
        src={tacticsImage}
        onClick={() => openImageModal(tacticsImage)}
        alt="tactics"
      />
      <br />
      <h2>
        Patient Partnership along the molecule lifecycle
      </h2>
      <p>
        Patient partnerships play a pivotal role to inform, optimize and improve the outcomes of our
        programs across the value chain. Different partnership activities alongside other stakeholders
        can achieve differing goals along the value chain.
      </p>
      <p>
        <strong>
          Goals of patient partnership across the value chain:
        </strong>
        <br />
        Along the product life cycle, Patient Partnership leads and supports cross-functional
        teams & activities.
      </p>
      <img
        className="main-content-image"
        src={lifecycleImage}
        onClick={() => openImageModal(lifecycleImage)}
        alt="lifecycle"
      />
      <br />
      <span>
        To learn more, check out the
        {' '}
        <a target="_blank" rel="noopener noreferrer" href="https://sites.google.com/roche.com/patient-partnership/home">
        Integrated Patient Partnership (iPP) Community
        </a>
.
      </span>
    </>
  );

  const content = (
    <div className="partners-patient-partnerships d-flex align-items-center justify-content-center">
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
      title="Partners"
      color="yellow"
    />
  );
}

PatientPartnership.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mobileCollapsed: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default PatientPartnership;
