import React, { useState } from 'react';

import PageContainer from '../../../components/pagecontainer';
import MainContent from '../../../components/maincontent';
import mapImage from '../../../assets/common/enablers.png';
import frameImage from '../../../assets/pages/enablers/roche-framework.png';
import frameDescImage from '../../../assets/pages/enablers/roche-framework-description.png';
import vbhcImage from '../../../assets/pages/enablers/vbhc-description.png';
import ImageModal from '../../../components/modals/ImageModal';

const navOptions = [
  {
    id: 0,
    level: 1,
    link: '/phc/welcome',
    title: 'WELCOME',
    top: 100,
    active: false,
    subMenus: [],
  },
  {
    id: 1,
    level: 2,
    link: '/phc/introduction',
    title: 'INTRODUCTION',
    top: 140,
    active: false,
    subMenus: [],
  },
  {
    id: 2,
    level: 2,
    link: '/phc/changing-journey',
    title: 'CHANGING JOURNEY',
    top: 180,
    active: false,
    subMenus: [],
  },
  {
    id: 3,
    level: 2,
    link: '/phc/future-patient-journey',
    title: 'FUTURE PATIENT JOURNEY',
    top: 220,
    active: false,
    subMenus: [],
  },
  {
    id: 4,
    level: 2,
    link: '/phc/systems-enablers',
    title: 'SYSTEMS ENABLERS',
    top: 260,
    active: true,
    activeSubMenu: 1,
    subMenuLinks: [
      '/phc/systems-enablers/partners',
      '/phc/systems-enablers/value-based-healthcare',
      '/phc/systems-enablers/roches-initiatives',
    ],
    subMenus: [
      'Partners',
      'Value-based Healthcare',
      'Roche Initiatives',
    ],
  },
  {
    id: 5,
    level: 2,
    link: '/phc/abbreviation',
    title: 'ABBREVIATION LIST',
    top: 300,
    active: false,
    subMenus: [],
  },
  {
    id: 6,
    level: 2,
    link: '/phc/acknowledgements',
    title: 'ACKNOWLEDGEMENTS',
    top: 340,
    active: false,
    subMenus: [],
  },
];

function ValueBasedHealthCare() {
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
        Value-Based HealthCare (VBHC) is proposed as a sustainable model, shifting the incentive away from
        treatment volume towards value for patients, providers and healthcare systems.
      </p>
      <p><strong>VBHC focuses on the outcomes that matter to patients.</strong></p>
      <img
        className="main-content-image d-none d-sm-none d-md-block"
        src={vbhcImage}
        onClick={() => openImageModal(vbhcImage)}
        alt="vbhc description"
      />
      <h2>Why it is important</h2>
      <li>
        VBHC aligns with Roche’s core focus on what patients need. This model would ensure
        that
        <strong>outcomes that matter to patients</strong>
        {' '}
        are prioritized.
        In this way, we will be a real healthcare partner and deliver value to our patients beyond just
        treatment and medication, from timely diagnoses to tangible, long-term health results.
      </li>
      <li>
        VBHC will present new healthcare service partnership opportunities to Roche, allowing us to expand
        and improve our offerings. Incorporating VBHC into our ways of working is an innovative step that
        will differentiate ourselves.
      </li>
      <li>
        Emerging technologies are now making the implementation of VBHC possible on a wider scale.
        <sup>1</sup>
        Most importantly, Meaningful Data at Scale (MDAS) will allow Roche to use analytics to inform
        our healthcare offerings. We can use data in predictive models to anticipate the outcomes
        associated with different care cycles, reducing the level of risk for patients, healthcare
        systems, and payers.
      </li>
      <li>
        Value-Based HealthCare is an important transition in healthcare where we can realize our PHC vision.
        By partnering and co-creating with our internal and external stakeholders, we can contribute to
        building sustainable healthcare systems.
      </li>
      <h2>
        Key drivers/considerations
      </h2>
      <span>
        <strong>IT platform, Meaningful Data at Scale (MDAS)</strong>
, and
        <strong>policy</strong>
        {' '}
        all
                play a key role in enabling our success for implementing Value-Based HealthCare.
        <li>
                  We require a robust IT infrastructure that enables patient data to be shared optimally,
                  across borders and services.
        </li>
        <li>
                  Our IT platform must be able to collect MDAS to inform our analyses and algorithms.
                  A rigorous approach to data analysis is essential to implementing VBHC.
        </li>
        <li>
                  Well-designed, clear policies are another crucial component of rolling out our VBHC.
                  We need to minimize regulatory hurdles and ensure that we are able to analyze patients
                  and segment data effectively and responsibly.
        </li>
      </span>
      <h2>Our VBHC@Roche framework</h2>
      <p>Our program is structured to generate insights across key dimensions of our VBHC framework.</p>
      <img
        className="main-content-image d-none d-sm-none d-md-block"
        src={frameImage}
        alt="framework"
      />
      <img
        className="main-content-image d-none d-sm-none d-md-block"
        src={frameDescImage}
        onClick={() => openImageModal(frameDescImage)}
        alt="framework description"
      />
      <span>
To learn more about VBHC, please go to the
        <a href="https://sites.google.com/roche.com/vbhcroche">
                VBHC webpage
        </a>
.
      </span>
    </>
  );

  const content = (
    <div className="enablers-vbhc d-flex align-items-center justify-content-center">
      <div className="detail-map">
        <img src={mapImage} alt="detail map" />
      </div>
      <ImageModal open={imageOpen} image={image} handleCloseClick={handleCloseClick} />
      <MainContent content={mainContent} navOptions={navOptions} />
    </div>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} title="Value-based healthcare" color="yellow" />
  );
}

export default ValueBasedHealthCare;
