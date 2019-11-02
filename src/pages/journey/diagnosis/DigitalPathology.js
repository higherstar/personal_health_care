import React from 'react';
// import { Link } from 'react-router-dom';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
// import ConnectionModal from '../../../components/modals/ConnectionModal';
import mapImage from '../../../assets/common/diagnosis.png';
// import connectionIcon from '../../../assets/atoms/connection-icon-red.png';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Overview',
    activeMenu: 2,
    parentTitle: 'Early Personalised Diagnosis',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/diagnosis/overview',
    active: false,
  },
  {
    id: 1,
    level: 3,
    title: 'Diagnostics',
    activeMenu: 2,
    parentTitle: 'Early Personalised Diagnosis',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/diagnosis/diagnostics',
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'Genomics',
    activeMenu: 2,
    parentTitle: 'Early Personalised Diagnosis',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/diagnosis/genomics',
    active: false,
  },
  {
    id: 3,
    level: 3,
    title: 'Advanced Imaging',
    activeMenu: 2,
    parentTitle: 'Early Personalised Diagnosis',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/diagnosis/advanced-imaging',
    active: false,
  },
  {
    id: 4,
    level: 3,
    title: 'Digital Pathology',
    activeMenu: 2,
    parentTitle: 'Early Personalised Diagnosis',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/diagnosis/digital-pathology',
    active: true,
  },
  {
    id: 5,
    level: 3,
    title: 'CDS Systems',
    activeMenu: 2,
    parentTitle: 'Early Personalised Diagnosis',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/diagnosis/cds-systems',
    active: false,
  },
  {
    id: 6,
    level: 3,
    title: 'Digital Health (SaMD)',
    activeMenu: 2,
    parentTitle: 'Early Personalised Diagnosis',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/diagnosis/digital-health',
    active: false,
  },
];

function DiagnosisDigitalPathology() {
//   const [connectionOpen, setConnectionOpen] = useState(false);
//
//   const openConnectionModal = () => {
//     setConnectionOpen(true);
//   };
//
//   const handleCloseClick = () => {
//     setConnectionOpen(false);
//   };
//
//   const mainContent = (
//     <>
//       <h2>Description</h2>
//       <p>
//         Digital pathology is the collection, management, sharing, and interpretation of pathology
//         information in a digital environment.
//         <sup>1</sup>
//         We have formed a Pharma-Diagnostics partnership to accelerate Digital Pathology for PHC objectives
//         in both divisions through curation, image analysis, and
//         {' '}
//         <Link to="/phc/future-patient-journey/data/advanced-analytics">
//           advanced
//           analytics
//         </Link>
//         . We will identify resources for curation and uploading images
//         and data, identify image analysis technology (e.g. deep learning and machine
//         learning) and algorithms, and build a metadata analysis pipeline with genomics
//         and outcomes. Click
//         {' '}
//         <Link to="/phc/future-patient-journey/data/advanced-analytics">here</Link>
//         {' '}
//         to learn more.
//       </p>
//       <h2>
//         Why it is important for PHC
//       </h2>
//       <p>
//         <strong>Smarter & more efficient R&D – </strong>
//         Digital pathology can generate insights with
//         the potential to collate histological features with prognosis, outcomes, disease biology, treatment.
//       </p>
//
//       <strong className="d-none d-md-block d-sm-none">Click button below to see:</strong>
//       <div className="connection-button d-flex align-items-center" onClick={openConnectionModal}>
//         <img src={connectionIcon} alt="connection icon" />
//         Connections with Other PHC Topics
//       </div>
//       <div className="diagnosis-second-section" />
//       <br />
//       <h2>
//         What Roche is doing in this area
//       </h2>
//       <span>
// A Pharma-Dia collaboration at Roche is working to curate, analyze and apply advanced
//                 analytics to digital pathology images to produce novel insights during the drug
//                 development process.
//         <sup>1</sup>
//         <br />
//                 We have strategic objectives/OKRs to build and enhance the PHC platform:
//         <li>
//                   Finalize relevant readouts [TILs quantity and location, location and quantity of PD-L1
//                   scores in tumor cells (both SP263 and SP142) and immune cells (SP142 only)] for the
//                   IMpower150 cohort and make them available for further analysis
//         </li>
//         <li>
//                   H&E images and algorithm segmentation for tumor infiltrating lymphocytes will be viewable by
//                   scientists Roche-wide in the IRISe [external link to PHC portal under advanced analytics
//                   capability] digital pathology viewer for the IMpower150 biomarker evaluable population
//         </li>
//         <li>
//                   MATLAB segmentation algorithm for tumor stroma complete in lung adenocarcinoma
//                   (H&E) and applied to the IMpower150 dataset
//         </li>
//       </span>
//       <br />
//       <h2>
//         Key drivers/considerations
//       </h2>
//       <li>
//         Collaboration between Pharma and DIA can combine Roche in-house data and DIA’s
//         technology to produce novel insights.
//       </li>
//       <li>
//         Expands new business models for diagnostics
//       </li>
//       <li>
//         Similar to imaging, Digital Pathology may help overcome challenges in developing healthcare
//         systems through application of cloud-based and lighter resource models
//       </li>
//     </>
//   );

  const mainContent = (
    <h1 className="text-center">
      Content Coming Soon
    </h1>
  );


  const content = (
    <div className="journey-digital-pathology page-wrapper d-flex align-items-center justify-content-center">
      <div className="detail-map">
        <img src={mapImage} alt="detail map" />
      </div>
      {/* <ConnectionModal open={connectionOpen} handleCloseClick={handleCloseClick} /> */}
      <MainContent content={mainContent} navOptions={navOptions} />
    </div>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} title="Early, personalised diagnosis" color="blue" />
  );
}

export default DiagnosisDigitalPathology;
