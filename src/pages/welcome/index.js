import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import PageContainer from '../../components/pagecontainer';
import mapImage from '../../assets/maps/map-background.png';
import CustomModal from '../../components/modals/CustomModal';
import videoImage1 from '../../assets/pages/welcome/videoImage1.png';
import videoImage2 from '../../assets/pages/welcome/videoImage2.png';
import videoImage3 from '../../assets/pages/welcome/videoImage3.png';

const navOptions = [
  {
    id: 0,
    level: 1,
    link: '/phc/welcome',
    title: 'WELCOME',
    top: 100,
    active: true,
    subMenus: [],
  },
  {
    id: 1,
    level: 1,
    link: '/phc/introduction',
    title: 'INTRODUCTION',
    top: 140,
    active: false,
    subMenus: [],
  },
  {
    id: 2,
    level: 1,
    link: '/phc/changing-journey',
    title: 'CHANGING JOURNEY',
    top: 180,
    active: false,
    subMenus: [],
  },
  {
    id: 3,
    level: 1,
    link: '/phc/future-patient-journey',
    title: 'FUTURE PATIENT JOURNEY',
    top: 220,
    active: false,
    subMenus: [],
  },
  {
    id: 4,
    level: 1,
    link: '/phc/systems-enablers',
    title: 'SYSTEMS ENABLERS',
    top: 260,
    active: false,
    subMenus: [],
  },
  {
    id: 5,
    level: 1,
    link: '/phc/abbreviation',
    title: 'ABBREVIATION LIST',
    top: 300,
    active: false,
    subMenus: [],
  },
  {
    id: 6,
    level: 1,
    link: '/phc/acknowledgements',
    title: 'ACKNOWLEDGEMENTS',
    top: 340,
    active: false,
    subMenus: [],
  },
];

const videos = [videoImage1, videoImage2, videoImage3];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function Welcome() {
  const [modalOpen, setModalOpen] = useState(true);

  const handleCloseClick = () => {
    setModalOpen(false);
  };

  const modalContent = (
    <div className="welcome-modal">
      <h3>Welcome to The Personalised Healthcare Systems Map</h3>
      <p>
        The complexity of Personalised Healthcare (PHC) calls for us to be systems thinkers with the ability
        to think and act from a whole system perspective and make decisions in light of the long-term health
        of the whole system. This map will provide a broad picture view and exploration of components of
        the PHC ecosystem, the interconnectedness of the system at play, and how you can engage with PHC.
      </p>
      <h3>Personalised Healthcare at Roche</h3>
      <p>
        Before diving into the PHC systems map, learn about why PHC is important and Roche’s PHC vision and
        strategy on the PHC portal.
      </p>
      <h3>How we built the PHC Systems Map</h3>
      <p>
        The PHC systems map is built around the
        {' '}
        <strong>future patient journey that is fully personalized.</strong>
        {' '}
        It includes key PHC concepts that are relevant for each step of a patient’ care as well as key system enablers
        that are important to keep in mind. Check out the video below to learn about how we envision the
        future patient journey to be different from the existing one and how we built the PHC systems map.
      </p>
      <div className="welcome-videos">
        <Slider {...settings}>
          {videos.map((video, index) => (
            <img src={video} alt="video" key={`video_${index}`} />
          ))}
        </Slider>
      </div>
      <div className="explore-button d-flex align-items-center justify-content-center" onClick={handleCloseClick}>
        <span>EXPLORE THE PHC SYSTEMS MAP</span>
      </div>
    </div>
  );

  const content = (
    <div className="welcome page-wrapper d-flex align-items-center justify-content-center">
      <div className="background-map">
        <img src={mapImage} alt="background map" />
      </div>
      <CustomModal open={modalOpen} content={modalContent} />
    </div>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} title="Welcome" color="blue" />
  );
}

export default Welcome;