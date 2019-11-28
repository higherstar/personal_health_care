import React from 'react';
import PropTypes from 'prop-types';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import mapImage from '../../../assets/common/diagnosis.png';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Overview',
    activeMenu: 2,
    parentTitle: 'Early Personalised Diagnosis',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/diagnosis/overview',
    active: true,
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
    active: false,
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
    title: 'Digital Health and SaMD',
    activeMenu: 2,
    parentTitle: 'Early Personalised Diagnosis',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/diagnosis/digital-health',
    active: false,
  },
];

const mainContent = (
  <>
    <p>
      The goal of early and personalised diagnosis is to
      {' '}
      <strong>reduce</strong>
      {' '}
and
      eventually
      {' '}
      <strong>eliminate misdiagnosis and delayed diagnosis.</strong>
      {' '}
Clinicians in partnership with patients
      are able to select the
      {' '}
      <strong>most appropriate</strong>
      {' '}
      and
      {' '}
      <strong>complete diagnostic work-up leveraging diagnostic guidance tools.</strong>
    </p>
    <span>
      The right diagnostic tools are easily available and reimbursed quickly to ensure
      timely testing. This includes the use of:
      <li>
        Existing and newer “omics” tools in oncology
      </li>
      <li>
        Emerging digital technologies in other diseases
      </li>
      <li>
        An earlier diagnosis to catch disease when it is more treatable or curable
      </li>
    </span>
  </>
);

function DiagnosisOverview(props) {
  const { isMobile, mobileCollapsed, handleMenuClick } = props;

  const content = (
    <div className="journey-overview page-wrapper d-flex align-items-center justify-content-center">
      <div className="detail-map">
        <img src={mapImage} alt="detail map" />
      </div>
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
      title="Early, personalised diagnosis"
      color="blue"
    />
  );
}

DiagnosisOverview.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mobileCollapsed: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default DiagnosisOverview;
