import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageContainer from '../../../components/pagecontainer';
import MainContent from '../../../components/maincontent';
import ImageModal from '../../../components/modals/ImageModal';
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
    title: 'Example of PHC in action: ROZLYTREK',
    activeMenu: 3,
    parentTitle: 'Roche Initiatives',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/roches-initiatives/rozlytrek',
    active: false,
  },
];

function ShiningTowers() {
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
        Shining Towers are initiatives that will help
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
          <Link to="/phc/future-patient-journey/diagnosis/diagnostics">diagnostics</Link>
          {' '}
done more frequently along with an ncreased
          use of
          <Link to="/phc/future-patient-journey/diagnosis/genomics">genomic profiling</Link>
        </li>
        <li>Increase availability of molecularly-guided therapy option (MGTO)</li>
        <li>Design trials adapted to PHC</li>
        <li>
Foster discussion among all relevant
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
      <br />
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
        onClick={() => openImageModal(worldMapImage)}
        alt="worldMapImage"
      />
    </>
  );

  const content = (
    <div className="roche-shining-towers d-flex align-items-center justify-content-center">
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

export default ShiningTowers;
