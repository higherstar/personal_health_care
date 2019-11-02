import React from 'react';
import { Link } from 'react-router-dom';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import mapImage from '../../../assets/common/monitoring.png';
import connectionIcon from '../../../assets/atoms/connection-icon-red.png';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Overview',
    activeMenu: 2,
    parentTitle: 'Personalised Remote Monitoring & Care',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/monitoring/overview',
    active: false,
  },
  {
    id: 1,
    level: 3,
    title: 'Diagnostics',
    activeMenu: 2,
    parentTitle: 'Personalised Remote Monitoring & Care',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/monitoring/diagnostics',
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'Genomics',
    activeMenu: 2,
    parentTitle: 'Personalised Remote Monitoring & Care',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/monitoring/genomics',
    active: true,
  },
  {
    id: 3,
    level: 3,
    title: 'Advanced Imaging',
    activeMenu: 2,
    parentTitle: 'Personalised Remote Monitoring & Care',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/monitoring/advanced-imaging',
    active: false,
  },
  {
    id: 4,
    level: 3,
    title: 'CDS Systems',
    activeMenu: 2,
    parentTitle: 'Personalised Remote Monitoring & Care',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/monitoring/cds-systems',
    active: false,
  },
  {
    id: 5,
    level: 3,
    title: 'Digital Health (SaMD)',
    activeMenu: 2,
    parentTitle: 'Personalised Remote Monitoring & Care',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/monitoring/digital-health',
    active: false,
  },
];

const mainContent = (
  <>
    <h2>Description</h2>
    <p>
      Genomic profiling is a broad term that refers to the sequencing and analysis of genomic alterations
      (base substitutions, insertions and deletions, copy number alterations, and rearrangements) and
      biomarkers that are known to be relevant in a disease.
      <br />
      <br />
      At the molecular level, the expression of certain genes is used as biomarker to determine the
      appropriate therapy for cancer patients. Biomarkers are thus a key component of Personalized
      Healthcare approaches. Appropriate biomarkers are also essential to design clinical studies and
      to define their intended or expected outcome. Diagnostic methods such as Next-Generation Sequencing
      (NGS) and Comprehensive Genomic Profiling (CGP) aim at identifying and quantifying disease-relevant
      biomarkers.
      <br />
      <br />
      At Roche, we are developing our genomic diagnostics capability, including biomarkers, Next-Generation
      Sequencing (NGS) and Comprehensive Genomic Profiling (CGP) to further enable personalized
      healthcare (PHC).
      <br />
      <br />
      Roche Sequencing Solutions offers best in-class Next-Generation Sequencing (NGS) products.
      Clinical NGS can involve one single gene to many genes and provides clinicians with information
      to assist in treatment selection [internal hyperlink to CDS in Care], thus enabling personalized
      healthcare (PHC). Advanced reports, such as those FMI deliver, provide information including
      clinical trials, treatments to avoid and potential resistance gene of relevance.
      <br />
      <br />
      Comprehensive Genomic Profiling (CGP) is a type of genomic profiling that involves large gene
      panels that detect all classes of genomic alterations and biomarkers, providing a holistic view to
      healthcare providers of appropriate treatments [internal hyperlink to CDS page in Care]
      (targeted or immunotherapy) and potential clinical trials.
    </p>
    <h2>
      Why it is important for PHC
    </h2>
    <p>
      Roche is leveraging NGS/CGP in several ways to promote PHC.
    </p>
    <p>
      <strong>
        Improved access & personalized care
      </strong>
      Foundation Medicine (FMI) is leading the understanding and use of CGP in the clinical setting,
      establishing new standards for
      {' '}
      <Link to="/phc/future-patient-journey/diagnosis/diagnostics">advanced diagnostics</Link>
      {' '}
      and laying the
      foundation for pan-tumor targeted therapy, which
      cannot be delivered with current technology.
      <br />
      Advanced comprehensive clinical-genomic databases can inform treatment decisions through clinical
      decision (CDS) systems [link to CDS page under Care] using the power
      of
      {' '}
      <Link to="/phc/systems-enablers/value-based-healthcare">Meaningful data at scale (MDAS)</Link>
      {' '}
      and
      {' '}
      <Link
        to="/phc/future-patient-journey/data/advanced-analytics"
      >
        Advanced Analytics
      </Link>
    </p>
    <strong className="d-none d-md-block d-sm-none">Click button below to see:</strong>
    <div className="connection-button d-flex align-items-center">
      <img src={connectionIcon} alt="connection icon" />
      Connections with Other PHC Topics
    </div>
    <br />
    <h2>
      What Roche is doing in this area
    </h2>
    <p>
      Roche is expanding its “Omics and Biomarkers” capabilities. Moreover, the Omics Team
      collaborate closely
      with
      {' '}
      <Link to="a/phc/future-patient-journey/data/advanced-analytics">Advanced Analytics</Link>
      , and other teams to
      derive novel
      disease and mode of action (MoA) specific insights to inform drug development.
      <br />
      The CUPISCO trial is an example of the use of CGP in combination with a patient-centric
      decision-making process by a Molecular Tumor Board to provide a highly-specific treatment
      decision for each patient.2 Click here to learn more about the
      {' '}
      <a href="cupisco.html">CUPISCO trial.</a>
    </p>
    <br />
    <h2>
      Key drivers/considerations
    </h2>
    <span>
The general use of genomics as diagnostics tools along the patient journey depends on:
      <strong>Advanced diagnostics funding – </strong>
Level of funding of NGS tests by the healthcare system
                as diagnostic tool
      <li>
        <strong>Testing adoption - </strong>
Level of adoption of biomarker and NGS tests and CGP in
                  diagnostic practice
      </li>
      <li>
        <strong>Advanced diagnostics funding – </strong>
Level of funding of biomarker and NGS tests by the
                  healthcare system as diagnostic tool
      </li>
      <li>
        <strong>Regulatory perspective – </strong>
Existence of pathway for the approval of
                  molecularly-informed therapies 3  [internal hyperlink to regulatory policy]
      </li>
      <li>
        <strong>Payer acceptance – </strong>
Level of reimbursement of molecularly-informed therapies
                  [internal hyperlink to the Stakeholders page under Enablers]
      </li>
    </span>
  </>
);

function MonitoringGenomics() {
  const content = (
    <div className="monitoring-genomics page-wrapper d-flex align-items-center justify-content-center">
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
      title="Continuous & remote patient management"
      color="blue"
    />
  );
}

export default MonitoringGenomics;
