import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';

import TopBar from '../topbar';
import SideBar from '../sidebar';
import backgroundImage from '../../assets/common/background.png';

function PageContainer(props) {
  const { page, collapsed } = props;

  const pageContentStyle = {
    width: collapsed ? 'calc(100vw - 93px)' : 'calc(100vw - 318px)',
    left: collapsed ? '93px' : '318px',
  };

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
        <div className="page-content" style={pageContentStyle}>
          {page}
        </div>
      </div>
    </>
  );
}

PageContainer.propTypes = {
  page: PropTypes.node.isRequired,
  collapsed: PropTypes.bool.isRequired,
};

const mapStateToProps = (store) => ({
  collapsed: store.sideBar.collapsed,
});

export default connect(
  mapStateToProps,
)(PageContainer);
