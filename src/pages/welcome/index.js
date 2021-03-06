import React, { useState } from 'react';
import { Player, BigPlayButton } from 'video-react';
import PropTypes from 'prop-types';

import PageContainer from '../../components/pagecontainer';
import DropDown from '../../atoms/DropDown';
import CustomModal from '../../components/modals/CustomModal';
import mapImage from '../../assets/maps/map-background.png';
import video from '../../assets/video/phc.mp4';


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
    link: '/phc/future-patient-journey',
    title: 'FUTURE PATIENT JOURNEY',
    top: 140,
    active: false,
    subMenus: [],
  },
  {
    id: 2,
    level: 1,
    link: '/phc/systems-enablers',
    title: 'SYSTEMS ENABLERS',
    top: 180,
    active: false,
    subMenus: [],
  },
  {
    id: 3,
    level: 1,
    link: '/phc/abbreviation',
    title: 'ABBREVIATION LIST',
    top: 220,
    active: false,
    subMenus: [],
  },
  {
    id: 4,
    level: 1,
    link: '/phc/acknowledgements',
    title: 'ACKNOWLEDGEMENTS',
    top: 260,
    active: false,
    subMenus: [],
  },
];

const journeyOptions = [
  {
    className: 'diagnosis-dropdown',
    title: 'Early Personalised Diagnosis',
    subMenus: [
      'Overview',
      'Diagnostics',
      'Genomics',
      'Advanced Imaging',
      'Digital Pathology',
      'CDS Systems',
      'Digital Health and SaMD',
    ],
    subMenuLinks: [
      '/phc/future-patient-journey/diagnosis/overview',
      '/phc/future-patient-journey/diagnosis/diagnostics',
      '/phc/future-patient-journey/diagnosis/genomics',
      '/phc/future-patient-journey/diagnosis/advanced-imaging',
      '/phc/future-patient-journey/diagnosis/digital-pathology',
      '/phc/future-patient-journey/diagnosis/cds-systems',
      '/phc/future-patient-journey/diagnosis/digital-health',
    ],
  },
  {
    className: 'monitoring-dropdown',
    title: 'Personalised Remote Monitoring & Care',
    subMenus: [
      'Overview',
      'Diagnostics',
      'Genomics',
      'Advanced Imaging',
      'CDS Systems',
      'Digital Health and SaMD',
    ],
    subMenuLinks: [
      '/phc/future-patient-journey/monitoring/overview',
      '/phc/future-patient-journey/monitoring/diagnostics',
      '/phc/future-patient-journey/monitoring/genomics',
      '/phc/future-patient-journey/monitoring/advanced-imaging',
      '/phc/future-patient-journey/monitoring/cds-systems',
      '/phc/future-patient-journey/monitoring/digital-health',
    ],
  },
  {
    className: 'data-dropdown',
    title: 'Data & Insights',
    subMenus: [
      'Overview',
      'Real-World Data',
      'Advanced Analytics',
    ],
    subMenuLinks: [
      '/phc/future-patient-journey/data/overview',
      '/phc/future-patient-journey/data/real-world-data',
      '/phc/future-patient-journey/data/advanced-analytics',
    ],
  },
  {
    className: 'care-dropdown',
    title: 'Personalised Care Plan',
    subMenus: [
      'Overview',
      'Diagnostics',
      'CDS Systems',
      'Digital Health and SaMD',
    ],
    subMenuLinks: [
      '/phc/future-patient-journey/care/overview',
      '/phc/future-patient-journey/care/diagnostics',
      '/phc/future-patient-journey/care/cds-systems',
      '/phc/future-patient-journey/care/digital-health',
    ],
  },
  {
    className: 'access-dropdown',
    title: 'Rapid Access to Personalised Interventions',
    subMenus: [
      'Overview',
      'Diagnostics',
      'CDS Systems',
      'Digital Health and SaMD',
      'Value-based Healthcare',
    ],
    subMenuLinks: [
      '/phc/future-patient-journey/access/overview',
      '/phc/future-patient-journey/access/diagnostics',
      '/phc/future-patient-journey/access/cds-systems',
      '/phc/future-patient-journey/access/digital-health',
      '/phc/future-patient-journey/access/value-based-healthcare',
    ],
  },
];

const enablersOptions = [
  {
    className: 'roche-dropdown',
    title: 'Roche Initiatives',
    subMenus: [
      'Context',
      'Showcases',
      'Shining Towers',
      'Examples',
    ],
    subMenuLinks: [
      '/phc/systems-enablers/roches-initiatives/context',
      '/phc/systems-enablers/roches-initiatives/showcases',
      '/phc/systems-enablers/roches-initiatives/shining-towers',
      '/phc/systems-enablers/roches-initiatives/examples',
    ],
  },
  {
    className: 'partners-dropdown',
    title: 'Partners',
    subMenus: [
      'Stakeholders',
      'Policy',
      'PHC IX/Technology',
      'Patient Partnerships',
    ],
    subMenuLinks: [
      '/phc/systems-enablers/partner/stakeholders',
      '/phc/systems-enablers/partner/policy',
      '/phc/systems-enablers/partner/phc-it',
      '/phc/systems-enablers/partner/patient-partnerships',
    ],
  },
];

function Welcome(props) {
  const { isMobile, mobileCollapsed, handleMenuClick } = props;

  const [modalOpen, setModalOpen] = useState(true);

  const handleCloseClick = () => {
    setModalOpen(false);
  };


  const modalContent = (
    <div className="welcome-modal">
      <h2>Welcome to The Personalised Healthcare-Enabled Patient Journey</h2>
      <p>
        The complexity of Personalised Healthcare (PHC) calls for us to be systems thinkers with the ability
        to think and act from a whole system perspective and make decisions in light of the long-term health
        of the whole system. This map will provide a broad picture view and exploration of components of
        the PHC ecosystem, the interconnectedness of the system at play, and how you can engage with PHC.
      </p>
      <h2>Personalised Healthcare at Roche</h2>
      <span>
        Before diving into the PHC systems map, learn about why PHC is important and Roche’s PHC vision and
        strategy on the
        {' '}
        <a target="_blank" rel="noopener noreferrer" href="https://phcportal.roche.com/">
        PHC portal
        </a>
.
      </span>
      <hr />
      <h2>How We Built the PHC-Enabled Patient Journey</h2>
      <p>
        This systems map is a collaborative initiative brought to you by Medical and Commercial, and received
        insights from PD, Access, Compliance and Legal. This site will be updated on a half-yearly basis.
        This systems map is built around the future patient journey that is fully personalised.
        It includes key PHC concepts that are relevant for each step of a patient’s care, as well as
        key system enablers that are important to keep in mind. Check out the video below to learn
        about how we envision the future patient journey to be different from the existing one and
        how we built this site.
      </p>
      <br />
      <div className="welcome-videos" style={{ width: isMobile ? '100%' : '50%', minWidth: isMobile ? 'unset' : 500 }}>
        <Player src={video}>
          <BigPlayButton position="center" />
        </Player>
      </div>
      <br />
      <br />
      <p>
        We invite you to dive in and learn more,
        <br />
        - Wei-Ping Kuo, Competency Development
      </p>
      <div
        className="explore-button d-flex align-items-center justify-content-center"
        onClick={handleCloseClick}
        style={{ width: isMobile ? '100%' : '40%', minWidth: isMobile && 'unset' }}
      >
        <span style={{ fontSize: isMobile ? 16 : 20 }}>Explore the PHC-Enabled Patient Journey</span>
      </div>
      <div
        className="disclaimer"
        style={{ position: isMobile ? 'relative' : 'absolute', borderRadius: isMobile ? 0 : '0 0 10px 10px' }}
      >
        <span>
            THE IMPLEMENTATION OF ANY STRATEGY OR ACTIVITY IS SUBJECT TO AND CONDITIONAL
            UPON REVIEW AND APPROVAL BY RELEVANT BUSINESS DECISION-MAKERS AND LEGAL/REGULATORY
            PARTNERS OF THE LOCAL AFFILIATE.
        </span>
      </div>
    </div>
  );

  const content = (
    <div
      className="welcome page-wrapper d-flex align-items-center justify-content-center"
      onClick={!mobileCollapsed ? handleMenuClick : undefined}
    >
      <div className={`${isMobile ? 'mobile-background-map' : 'background-map'}`}>
        <img src={mapImage} alt="background map" />
        <DropDown options={journeyOptions} color="blue" isMobile={isMobile} />
        <DropDown options={enablersOptions} color="yellow" isMobile={isMobile} />
      </div>
      <CustomModal isMobile={isMobile} open={modalOpen} content={modalContent} handleCloseClick={handleCloseClick} />
    </div>
  );

  return (
    <PageContainer
      page={content}
      navOptions={navOptions}
      isMobile={isMobile}
      mobileCollapsed={mobileCollapsed}
      handleMenuClick={handleMenuClick}
      title="Welcome"
      color="blue"
    />
  );
}

Welcome.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mobileCollapsed: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default Welcome;
