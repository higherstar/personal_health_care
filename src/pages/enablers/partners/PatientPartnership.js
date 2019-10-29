import React from 'react';
import PageContainer from '../../../components/pagecontainer';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Stakeholders',
    link: '/phc/systems-enablers/partner/stakeholders',
    active: false,
  },
  {
    id: 1,
    level: 3,
    title: 'Policy',
    link: '/phc/systems-enablers/partner/policy',
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'PHC IX/Technology',
    link: '/phc/systems-enablers/partner/phc-it',
    active: false,
  },
  {
    id: 3,
    level: 3,
    title: 'Patient Partnership',
    link: '/phc/systems-enablers/partner/patient-partnership',
    active: true,
  },
];

function PatientPartnership() {
  const content = (
    <h1>Patient Partnership</h1>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} />
  );
}

export default PatientPartnership;
