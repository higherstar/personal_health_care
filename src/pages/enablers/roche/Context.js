import React from 'react';
import PageContainer from '../../../components/pagecontainer';

const navOptions = [
  {
    id: 0,
    level: 3,
    title: 'Context',
    activeMenu: 3,
    parentTitle: 'Roche Initiatives',
    link: '/phc/systems-enablers/roches-initiatives/context',
    active: true,
  },
  {
    id: 1,
    level: 3,
    title: 'Showcases',
    activeMenu: 3,
    parentTitle: 'Roche Initiatives',
    link: '/phc/systems-enablers/roches-initiatives/showcases',
    active: false,
  },
  {
    id: 2,
    level: 3,
    title: 'Shining Towers',
    activeMenu: 3,
    parentTitle: 'Roche Initiatives',
    link: '/phc/systems-enablers/roches-initiatives/shining-towers',
    active: false,
  },
  {
    id: 3,
    level: 3,
    title: 'ROZLYTREK',
    activeMenu: 3,
    parentTitle: 'Roche Initiatives',
    link: '/phc/systems-enablers/roches-initiatives/rozlytrek',
    active: false,
  },
];

function Context() {
  const content = (
    <h1>Context</h1>
  );

  return (
    <PageContainer page={content} navOptions={navOptions} />
  );
}

export default Context;
