import React from 'react';
import PropTypes from 'prop-types';

import PageContainer from '../../components/pagecontainer';
import CustomModal from '../../components/modals/CustomModal';
import mapImage from '../../assets/maps/map-background.png';

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
  // {
  //   id: 1,
  //   level: 1,
  //   link: '/phc/introduction',
  //   title: 'INTRODUCTION',
  //   top: 140,
  //   active: false,
  //   subMenus: [],
  // },
  // {
  //   id: 2,
  //   level: 1,
  //   link: '/phc/changing-journey',
  //   title: 'CHANGING JOURNEY',
  //   top: 180,
  //   active: false,
  //   subMenus: [],
  // },
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
    active: true,
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

const modalHeader = (
  <div className="reference-title d-flex">
    Abbreviation List
  </div>
);

const modalContent = (
  <div className="abbreviation-content">
    <div className="reference-content d-flex justify-content-between align-items-start flex-wrap">
      <p>
        <span>AA: </span>
        Advanced Analytics
      </p>
      <p>
        <span>AI: </span>
        Artificial Intelligence
      </p>
      <p>
        <span>CDS: </span>
        Clinical Decision Support
      </p>
      <p>
        <span>CDx: </span>
        Companion Diagnostics
      </p>
      <p>
        <span>CGP: </span>
        Comprehensive Genomic Profiling*
      </p>
      <p>
        <span>CoDx: </span>
        Complementary Diagnostics
      </p>
      <p>
        <span>ctDNA: </span>
        Circulating Tumor DNA
      </p>
      <p>
        <span>CUP: </span>
        Carcinoma of Unknown Primary
      </p>
      <p>
        <span>EDIS: </span>
        Enhanced Data and Insight Sharing
      </p>
      <p>
        <span>EHR: </span>
        Electronic Health Record
      </p>
      <p>
        <span>EMA: </span>
        European Medicines Agency
      </p>
      <p>
        <span>ESMO: </span>
        European Society for Medical Oncology
      </p>
      <p>
        <span>F.A.I.R.: </span>
        Findable, Accessible, Interoperable, and Reusable
      </p>
      <p>
        <span>FDA: </span>
        Food and Drug Administration
      </p>
      <p>
        <span>FISH: </span>
        Fluorescence In Situ Hybridization
      </p>
      <p>
        <span>FMI: </span>
        Foundation Medicine
      </p>
      <p>
        <span>H&E: </span>
        Hematoxylin & Eosin
      </p>
      <p>
        <span>HCPs: </span>
        Healthcare Providers
      </p>
      <p>
        <span>HER2: </span>
        Receptor tyrosine-protein kinase erbB-2
      </p>
      <p>
        <span>HTA: </span>
        Health Technology Assessment
      </p>
      <p>
        <span>IEEPO: </span>
        International Experience Exchange with Patient Organisations
      </p>
      <p>
        <span>IHC: </span>
        Immunohistochemistry
      </p>
      <p>
        <span>IMDRF: </span>
        International Medical Device Regulators Forum
      </p>
      <p>
        <span>IP: </span>
        Intellectual Property
      </p>
      <p>
        <span>IRISe: </span>
        IRIS Enterprise
      </p>
      <p>
        <span>KVV: </span>
        Health Insurance Ordinance (Switzerland)
      </p>
      <p>
        <span>MDAS: </span>
        Meaningful Data at Scale*
      </p>
      <p>
        <span>MGTO: </span>
        Molecularly-Guided Therapy Option
      </p>
      <p>
        <span>MoA: </span>
        Mode of Action
      </p>
      <p>
        <span>MRI: </span>
        Magnetic Resonance Imaging
      </p>
      <p>
        <span>MS: </span>
        Multiple Sclerosis
      </p>
      <p>
        <span>MVP: </span>
        Minimal Viable Product
      </p>
      <p>
        <span>NCCN: </span>
        National Comprehensive Cancer Network
      </p>
      <p>
        <span>NGS: </span>
        Next-Generation Sequencing
      </p>
      <p>
        <span>NICE: </span>
        National Institute for Health and Care Excellence
      </p>
      <p>
        <span>NTRK: </span>
        Neurotrophic Tyrosine Receptor Kinase
      </p>
      <p>
        <span>OKRs: </span>
        Objectives and Key Results
      </p>
      <p>
        <span>PD-L1: </span>
        Programmed Death-Ligand 1
      </p>
      <p>
        <span>PET: </span>
        Positron Emission Tomography
      </p>
      <p>
        <span>PCR: </span>
        Polymerase Chain Reaction
      </p>
      <p>
        <span>PHC: </span>
        Personalised Healthcare*
      </p>
      <p>
        <span>PPC&A: </span>
        Personalised Patient Care and Access*
      </p>
      <p>
        <span>PRM: </span>
        Personalised Reimbursement Models*
      </p>
      <p>
        <span>PRO: </span>
        Patient-Reported Outcome
      </p>
      <p>
        <span>R&D: </span>
        Research and Development
      </p>
      <p>
        <span>RAAN: </span>
        Roche Advanced Analytics Network
      </p>
      <p>
        <span>RSI: </span>
        Roche Science Infrastructure
      </p>
      <p>
        <span>RWD: </span>
        Real-World Data
      </p>
      <p>
        <span>RWE: </span>
        Real-World Evidence
      </p>
      <p>
        <span>SaMD: </span>
        Software as Medical Device
      </p>
      <p>
        <span>VBHC: </span>
        Value-Based HealthCare
      </p>
    </div>
    <div className="roche-specific">
      *
      <a href="https://sites.google.com/gene.com/phc-affiliate-hub/home/tools-resources?authuser=0">
        Roche-specific terms
      </a>
    </div>
  </div>
);

function Abbreviation(props) {
  const { isMobile, mobileCollapsed, handleMenuClick } = props;

  const content = (
    <div
      className="abbreviation d-flex align-items-center justify-content-center"
      onClick={!mobileCollapsed && handleMenuClick}
    >
      <div className="background-map">
        <img src={mapImage} alt="background map" />
      </div>
      <CustomModal open content={modalContent} closeButton={false} header={modalHeader} />
    </div>
  );

  return (
    <PageContainer
      page={content}
      navOptions={navOptions}
      isMobile={isMobile}
      mobileCollapsed={mobileCollapsed}
      handleMenuClick={handleMenuClick}
      title="Abbreviation List"
      color="blue"
    />
  );
}

Abbreviation.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mobileCollapsed: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default Abbreviation;
