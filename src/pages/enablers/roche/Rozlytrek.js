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
    active: false,
  },
  {
    id: 3,
    level: 3,
    title: 'Example of PHC in Action: ROZLYTREK',
    activeMenu: 3,
    parentTitle: 'Roche Initiatives',
    parentLink: '/phc/systems-enablers',
    link: '/phc/systems-enablers/roches-initiatives/rozlytrek',
    active: true,
  },
];

const mainContent = (
  <>
    <h2>Rozlytrek (entrectinib)</h2>
    <p>Quote from Head of Roche Pharma, Bill Anderson, on Rozlytrek:</p>
    <span>
“Rozlytrek represents everything that we stand for when it comes to personalised healthcare (PHC).
                In fact it
      {'\''}
s a medicine that is impossible without PHC! Here’s why:
      <li>
In the past we worked to treat a specific tumor type, for example lung cancer or breast cancer,
                  and where possible added a companion diagnostic. With Rozlytrek we have a medicine that is tumor
                  agnostic, meaning we focus on a cancer’s genomic alterations rather than in which organ the
                  cancer started in the body. In the case of Rozlytrek we are targeting tumors with mutations
                  in ROS1 or NTRK genes.
      </li>
      <li>
Because these rare mutations occur in numerous tumor types, molecular profiling and next-generation
                  sequencing play an essential role in identifying individuals who can benefit, and this has
                  implications for how we work with healthcare systems to bring this medicine to market. Unless
                  we establish molecular profiling as part of the standard of care, many patients will never have
                  the chance to benefit from Rozlytrek. And having seen remarkable response rates, particularly in
                  patients whose cancer has spread to the brain, we are compelled to see this through.
      </li>
      <li>
PHC, in the form of real-world data, was also essential to the Rozlytrek clinical development
                  approach. In one of our studies it was not feasible to include a comparator arm due to the rarity
                  of the patient group we were studying — so we developed an external control arm using Flatiron
                  data to compare the Rozlytrek treated patients against a real-world cohort treated with the standard
                  of care. This comparative real-word data have been submitted to authorities with our filings
                  in the US, Japan and Europe and are a great example of making research more efficient and providing
                  a better option for participants; since all received Rozlytrek, none received placebo."
      </li>
    </span>
    <br />
    <span>
Check out the media release of
      <a href="https://www.roche.com/media/releases/med-cor-2019-08-16.htm">
        {' '}
FDA’s approval Roche’s Rozlytrek
                  (entrectinib) for people with ROS1-positive, metastatic non-small cell lung cancer and NTRK
                  gene fusion-positive solid tumours.
      </a>
    </span>
  </>
);

function Rozlytrek() {
  const content = (
    <div className="enablers-roche roche-rozlytrek d-flex align-items-center justify-content-center">
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

export default Rozlytrek;
