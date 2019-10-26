import React from 'react';
import TopBar from '../../components/topbar';

function HomePage() {
  return (
    <>
      <TopBar title="WELCOME" color="blue" />
      <div className="home-page">
        <h1>HomePage</h1>
      </div>
    </>
  );
}

export default HomePage;
