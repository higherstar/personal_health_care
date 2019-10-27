import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../topbar';
import SideBar from '../sidebar';
import backgroundImage from '../../assets/common/background.png';

function PageContainer(props) {
  const { page } = props;

  return (
    <>
      <div className="page-container">
        <div className="background-image">
          <img src={backgroundImage} alt="background" />
        </div>
        <TopBar title="WELCOME" color="blue" />
        <div className="side-bar-wrapper">
          <SideBar />
        </div>
        <div className="page-content" style={{ width: 'calc(100vw - 318px)' }}>
          {page}
        </div>
      </div>
    </>
  );
}

PageContainer.propTypes = {
  page: PropTypes.node.isRequired,
};

export default PageContainer;
