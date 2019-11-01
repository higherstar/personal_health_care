import React from 'react';

import PageContainer from '../../../components/pagecontainer/index';
import MainContent from '../../../components/maincontent';
import mapImage from '../../../assets/common/diagnosis.png';
import connectionIcon from '../../../assets/atoms/connection-icon-red.png';

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
    title: 'Digital Health(SaMD)',
    activeMenu: 2,
    parentTitle: 'Early Personalised Diagnosis',
    parentLink: '/phc/future-patient-journey',
    link: '/phc/future-patient-journey/diagnosis/digital-health',
    active: true,
  },
];

const mainContent = (
  <>
    <h2>Description</h2>
    <span>
In our PHC engine, Digital Health is a type of Meaningful Data at Scale (MDAS). At Roche, it is
                defined as clinically grade data from digital devices that inform R&D or clinical care
                for the Roche Disease Areas of Focus.
      <sup>3</sup>
      <br />
              One example of a Digital Health solution is the FDA-approved mySugr app, which is the most widely
              used mobile app for diabetes. It provides patients with immediate access to certified diabetes
              educators when necessary based on algorithmic detection of problematic glucose patterns.
      <br />
              At Roche, there are four archetypes of Digital Health, which are as follows:
      <li>
        <strong>Digital Biomarkers: </strong>
Community and regulator-accepted endpoints and outcomes
                that redefine our understanding of the disease.
      </li>
      <li>
        <strong>Digital Care Solutions: </strong>
Integrated ecosystem of Digital Health solutions
                for ongoing disease management in routine care.
      </li>
      <li>
        <strong>Digital Therapeutics: </strong>
Software-based disease treatments and rehabilitations
                that are prescribed by HCPs.
      </li>
      <li>
        <strong>Smart drug delivery systems: </strong>
Connected drug administration and delivery
                systems to enhance health outcomes of patients.
      </li>
    </span>
    <br />
    <h2>
Why it is important
    </h2>
    <li>
        Digital Health solutions can solve unmet medical and patient needs along the patient journey.
        There are applications of Digital Health solutions at every step of the patient journey,
        such as at screening and diagnosis; disease management, monitoring and adherence to therapy;
        and, patient satisfaction, quality of life and survival.
    </li>
    <li>
        Digital Health solutions have the potential to enable more efficient research cycles through
        the refinement of clinical trial eligibility criteria and more sensitive endpoints.
    </li>
    <br />
    <h2>
Why it is important for PHC
    </h2>
    <p>
          Digital Health is a key component of our personalized healthcare strategy. It allows us to
          learn from real-world patient experiences and data, to speed up medical research, to provide
          better advice to physicians and patients and to develop new ways of assessing value in healthcare.
          Ultimately, it accelerates and enhances our ability to understand a patient’s unique disease and
          individualize treatment to meet their needs.
    </p>
    <strong className="d-none d-md-block d-sm-none">Click button below to see:</strong>
    <div className="connection-button d-flex align-items-center">
      <img src={connectionIcon} alt="connection icon" />
      Connections with Other PHC Topics
    </div>
    <div className="diagnosis-second-section" />
    <br />
    <h2>
What Roche is doing in this area
    </h2>
    <li>
      <strong>Oncology: </strong>
The digital patient monitoring program consists of a modular remote
            monitoring ecosystem for improving interaction between patients and the care team, and capturing
            patient-reported outcomes. It also involves a partnership with hospitals and Kaiku Health to
            unify Real-World Data (RWD) on patients.
    </li>
    <li>
      <strong>Ophthalmology: </strong>
The myVsion Track (mVT® ) app is a home vision monitoring for
            track vision improvements/worsening in patients with age-related macular degeneration (AMD)
            and Diabetic Eye Disease. The mVT® Portal for HCPs helps to manage patients.
    </li>
    <li>
      <strong>Multiple Sclerosis: </strong>
Floodlight aims to allow people with Multiple
            Sclerosis (MS), physicians, and researchers to monitor MS and health over time using a smartphone,
            with the ultimate goal of creating practical tools to improve the lives of people living with MS.
    </li>
    <br />
    <h2>
Key considerations of Digital Health
    </h2>
    <span>
      <strong>Regulations with respect to Software as a Medical Device (SaMD)</strong>
      <li>
Certain digital health solutions run with software intended to be used for medical purposes and
                that can perform these purposes without being part of a hardware medical device. In this case,
                this software is called Software as a Medical Device (SaMD)
      </li>
      <li>
Any software that is intended to be used for one or more medical purposes will very likely enter
                the SaMD space. This means that the development, maintenance and operation of the software should
                be done according to the same specific quality standards, that are higher than other types of software.
      </li>
    </span>
    <span>
      <strong>Adoption of Digital Health Solutions</strong>
      <li>
                  Once a digital health solution has received the appropriate approvals, adopting it in clinical
                  practice can pose certain challenges to healthcare professionals, patients, regulators,
                  industry/R&D and payers.
      </li>
      <li>
                  For example, patients may be concerned about data misuse, which can prevent them from using
                  digital health solutions.
      </li>
    </span>
  </>
);

function DiagnosisDigitalHealth() {
  const content = (
    <div className="journey-digital-health page-wrapper d-flex align-items-center justify-content-center">
      <div className="detail-map">
        <img src={mapImage} alt="detail map" />
      </div>
      <MainContent content={mainContent} navOptions={navOptions} />
    </div>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} title="Early, personalised diagnosis" color="blue" />
  );
}

export default DiagnosisDigitalHealth;
