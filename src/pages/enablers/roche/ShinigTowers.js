import React from 'react';

import PageContainer from '../../../components/pagecontainer';
import MainContent from '../../../components/maincontent';
// import ImageModal from '../../../components/modals/ImageModal';
import mapImage from '../../../assets/common/roche.png';
// import ecosystemImage from '../../../assets/pages/enablers/roche-ecosystem.png';
// import mvpImage from '../../../assets/pages/enablers/roche-mvp.png';
// import phcImage from '../../../assets/pages/enablers/roche-phc.png';
// import solutionImage from '../../../assets/pages/enablers/roche-phc-solutions.png';
// import worldImage from '../../../assets/pages/enablers/roche-world-map.png';
// import assetsImage from '../../../assets/pages/enablers/roche-assets.png';
// import diagnosticsImage from '../../../assets/pages/enablers/roche-diagnostic.png';
// import businessImage from '../../../assets/pages/enablers/roche-business.png';

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
    title: 'ROZLYTREK',
    activeMenu: 3,
    parentTitle: 'Roche Initiatives',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/roches-initiatives/rozlytrek',
    active: false,
  },
];

function ShiningTowers() {
//   const [image, setImage] = useState('');
//   const [imageOpen, setImageOpen] = useState(false);
//
//   const openImageModal = (image) => {
//     setImage(image);
//     setImageOpen(true);
//   };
//
//   const handleCloseClick = () => {
//     setImageOpen(false);
//   };
//
//   const mainContent = (
//     <>
//       <h2>Description</h2>
//       <p>
//         Shining Towers are initiatives that will help
//         <strong>
//           accelerate the development of a full PHC
//           clinical ecosystem.
//         </strong>
//         <sup>1</sup>
//       </p>
//       <img
//         className="main-content-image d-none d-md-block d-sm-none"
//         src={ecosystemImage}
//         onClick={() => openImageModal(ecosystemImage)}
//         alt="ecosystem"
//       />
//       <span>
// We are building local PHC cases to speed up access to advanced diagnostics and treatment.
//         <sup>2</sup>
//                 We are leveraging RWE to enable innovative reimbursement models. To do so, we need to:
//         <li>Increase use of genomic profiling</li>
//         <li>Increase availability of molecularly-guided therapy option (MGTO)</li>
//         <li>Design trials adapted to PHC</li>
//         <li>Foster discussion among all relevant stakeholders</li>
//       </span>
//       <br />
//       <h2>
//         Shining Towers integrated solutions process
//         <sup>1</sup>
//       </h2>
//       <p>
//         We need to establish minimal viable product (MVP) infrastructures
//         before integrating Roche PHC solutions.
//       </p>
//       <br />
//       <p>
//         1-Achieve partner agreements to
//         {' '}
//         <strong>implement MVP components</strong>
//         (Roche PHC assets not mandatory):
//       </p>
//       <div className="d-flex image-description-list">
//         <div className="col-lg-6">
//           <li>CGP adoption</li>
//           <li>MTB/CDS</li>
//           <li>RWD capture</li>
//           <li>Access to therapy</li>
//         </div>
//         <div className="col-lg-6 text-content-img img-floodlight">
//           <img src={mvpImage} alt="mvp" className="main-content-image" />
//         </div>
//       </div>
//       <p>
//         2-Through co-creation, identify opportunities to
//         <strong>augment and expand with Roche assets:</strong>
//       </p>
//       <div className="d-flex image-description-list">
//         <div className="col-lg-6">
//           <li>Digital pathology</li>
//           <li>FMI/Avenio + other tests</li>
//           <li>Enhanced Navify engagement</li>
//           <li>Imaging</li>
//           <li>Preferred RWD partner solutions</li>
//         </div>
//         <div className="col-lg-6 text-content-img img-floodlight">
//           <img src={assetsImage} alt="assets" className="main-content-image" />
//         </div>
//       </div>
//       <p>
//         3-Execute and implement
//         <strong>integrated PHC solutions</strong>
//         {' '}
//         by:
//         <sup>1</sup>
//       </p>
//       <div className="d-flex image-description-list">
//         <div className="col-lg-6">
//           <li>Developing guidance for solution integration</li>
//           <li>Creating playbooks for PHC market development</li>
//           <li>Tailoring PHC solutions to market needs</li>
//           <li>Cycling insights back to the organization for continual development</li>
//         </div>
//         <div className="col-lg-6 text-content-img img-floodlight">
//           <img src={phcImage} alt="phc" className="main-content-image" />
//         </div>
//       </div>
//       <br />
//       <h2>Shining Towers in the PHC strategy</h2>
//       <p>
//         Shining Towers aim at
//         <strong>
//           demonstrating the usefulness PHC integrated solutions.
//           <sup>1</sup>
//         </strong>
//       </p>
//       <p>Current business of Diagnostic solutions & medicines</p>
//       <img
//         className="main-content-image d-none d-sm-none d-md-block"
//         src={diagnosticsImage}
//         onClick={() => openImageModal(diagnosticsImage)}
//         alt="diagnostics"
//       />
//       <p>Leveraging MDAS to enhance current business</p>
//       <img
//         className="main-content-image d-none d-sm-none d-md-block"
//         src={businessImage}
//         onClick={() => openImageModal(businessImage)}
//         alt="business"
//       />
//       <p>Establishing integrated PHC solutions</p>
//       <img
//         className="main-content-image d-none d-sm-none d-md-block"
//         src={solutionImage}
//         onClick={() => openImageModal(solutionImage)}
//         alt="solution"
//       />
//       <p>
//         <strong>Shining Tower initiatives</strong>
//         launched in 10 countries around the World will
//         enable
//         critical business drivers.
//         <sup>1</sup>
//         {' '}
//         Each initiative aim at demonstrating the
//         feasibility of PHC and integrates PHC solutions.[Potential visual: World map with hotspots
//         to
//         reveal which initiative is ongoing in a particular country/region]
//       </p>
//       <img
//         className="main-content-image d-none d-sm-none d-md-block"
//         src={worldImage}
//         onClick={() => openImageModal(worldImage)}
//         alt="world"
//       />
//     </>
//   );

  const mainContent = (
    <h1 className="text-center">
      Content Coming Soon
    </h1>
  );

  const content = (
    <div className="roche-shining-towers d-flex align-items-center justify-content-center">
      <div className="detail-map">
        <img src={mapImage} alt="detail map" />
      </div>
      {/* <ImageModal open={imageOpen} image={image} handleCloseClick={handleCloseClick} /> */}
      <MainContent content={mainContent} navOptions={navOptions} />
    </div>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} title="Roche initiatives" color="yellow" />
  );
}

export default ShiningTowers;
