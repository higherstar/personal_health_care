import React, { useState } from 'react';

import PageContainer from '../../../components/pagecontainer';
import MainContent from '../../../components/maincontent';
import ImageModal from '../../../components/modals/ImageModal';
import mapImage from '../../../assets/common/access.png';
import frameImage from '../../../assets/pages/enablers/roche-framework.png';
import frameDescImage from '../../../assets/pages/enablers/roche-framework-description.png';
import vbhcImage from '../../../assets/pages/enablers/vbhc-description.png';

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
    active: false,
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
    active: true,
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
      <span>
        To learn more, check out the
        {' '}
        <a href="https://roche.csod.com/ui/lms-learning-
        details/app/course/5ebef49d-7151-4d92-90b3-f5c216f80438"
        >
        “Value-Based HealthCare”
        </a>
        {' '}
module from the PHC Pharma Starter Pack.
      </span>
      <br />
      <br />
      <h2>Why it is important</h2>
      <li>
        VBHC aligns with Roche’s core focus on what patients need. This model would ensure
        that
        {' '}
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
      <br />
      <h2>
        Key drivers/considerations
      </h2>
      <span>
        <strong>IT platform, Meaningful Data at Scale (MDAS)</strong>
, and
        {' '}
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
      <br />
      <h2>Our VBHC@Roche framework</h2>
      <p>Our program is structured to generate insights across key dimensions of our VBHC framework.</p>
      <img
        className="main-content-image d-none d-sm-none d-md-block"
        src={frameImage}
        onClick={() => openImageModal(frameImage)}
        alt="framework"
      />
      <br />
      <img
        className="main-content-image d-none d-sm-none d-md-block"
        src={frameDescImage}
        onClick={() => openImageModal(frameDescImage)}
        alt="framework description"
      />
      <br />
      <span>
To learn more about VBHC, please go to the
        {' '}
        <a href="https://sites.google.com/roche.com/vbhcroche">
                VBHC webpage
        </a>
.
      </span>
    </>
  );

  const content = (
    <div className="journey-vbhc d-flex align-items-center justify-content-center">
      <div className="detail-map">
        <img src={mapImage} alt="detail map" />
      </div>
      <ImageModal
        className="vbhc-image-modal"
        open={imageOpen}
        image={image}
        handleCloseClick={handleCloseClick}
      />
      <MainContent content={mainContent} navOptions={navOptions} />
    </div>
  );

  return (
    <PageContainer
      page={content}
      navOptions={navOptions}
      title="Rapid Access to Personalised Interventions"
      color="blue"
    />
  );
}

export default ValueBasedHealthCare;
