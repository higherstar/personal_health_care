import React from 'react';
import PageContainer from '../../../components/pagecontainer';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Stakeholders',
    activeMenu: 3,
    parentTitle: 'Partners',
    link: '/phc/systems-enablers/partner/stakeholders',
    active: true,
  },
  {
    id: 1,
    level: 3,
    title: 'Policy',
    activeMenu: 3,
    parentTitle: 'Partners',
    link: '/phc/systems-enablers/partner/policy',
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'PHC IX/Technology',
    activeMenu: 3,
    parentTitle: 'Partners',
    link: '/phc/systems-enablers/partner/phc-it',
    active: false,
  },
  {
    id: 3,
    level: 3,
    title: 'Patient Partnership',
    activeMenu: 3,
    parentTitle: 'Partners',
    link: '/phc/systems-enablers/partner/patient-partnership',
    active: false,
  },
];

function StakeHolders() {
  const content = (
    <h1>Stakeholders</h1>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} />
  );
}

export default StakeHolders;
