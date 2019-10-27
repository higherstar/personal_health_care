import React from 'react';
import PageContainer from '../../components/pagecontainer';

const content = (
  <h1>Homepage</h1>
);

function HomePage() {
  return (
    <PageContainer page={content} />
  );
}

export default HomePage;
