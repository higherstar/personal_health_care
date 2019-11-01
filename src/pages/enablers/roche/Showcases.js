import React from 'react';

import PageContainer from '../../../components/pagecontainer';
import MainContent from '../../../components/maincontent';
import mapImage from '../../../assets/common/roche.png';

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
    active: true,
  },
  {
    id: 2,
    level: 3,
    title: 'Shining Towers',
    activeMenu: 3,
    parentTitle: 'Roche Initiatives',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/roches-initiatives/shining-towers',
    active: false,
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

const mainContent = (
  <>
    <p>Showcases are examples of PHC initiatives in R&D.</p>
    <p>
      <span>Neuroscience showcase – </span>
Striving to understand Multiple Sclerosis (MS)
      disease progression will enable everyone to deliver better care, improve patient outcomes and accelerate
      the next generation of MS therapies. By building real-world, large and deep datasets that integrate
      clinical, digital, imaging and genomic data, and applying advanced analytics, we aim to find
      clinically meaningful new perspectives into the disease. From this we will develop new tools to
      better measure and manage MS.
    </p>
    <p>
      <span>Ophthalmology showcase – </span>
To predict and prevent disease progression
      and vision loss in patients with age-related macular degeneration and diabetic retinopathy,
      we are building MDAS by curating imaging, genetics, and clinical data to better predict treatment
      responses, dosing, and progression to advanced disease. We are also leveraging recent advances
      in machine learning to analyze these datasets and develop algorithms for both disease detection
      and progression.
    </p>
    <p>
      <span>Oncology showcase – </span>
We are leveraging MDAS and advanced analytics in
      cancer immunotherapy to identify early predictors of treatment benefit and toxicity, develop
      alternative endpoints, and understand the mechanisms of resistance/escape. We are also integrating
      and harmonizing data sets from multiple clinical trials through efforts such as EDIS. Full genomic
      analysis and advanced imaging with these data sets is generating insights that inform initial
      pilot studies, such as development of novel combination therapies.
    </p>
  </>
);

function Showcases() {
  const content = (
    <div className="roche-showcases d-flex align-items-center justify-content-center">
      <div className="detail-map">
        <img src={mapImage} alt="detail map" />
      </div>
      <MainContent content={mainContent} navOptions={navOptions} />
    </div>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} title="Roche initiatives" color="yellow" />
  );
}

export default Showcases;
