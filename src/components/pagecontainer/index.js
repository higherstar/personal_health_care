import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TopBar from '../topbar';
import SideBar from '../sidebar';
import backgroundImage from '../../assets/common/background.png';

function PageContainer(props) {
  const {
    navOptions,
    page,
    title,
    color,
    isMobile,
    mobileCollapsed,
    handleMenuClick,
  } = props;

  const [collapsed, setCollapsed] = useState(false);
  const collapseSideBar = () => {
    setCollapsed(!collapsed);
  };

  const pageContainerStyle = {
    height: 'calc(100vh - 70px)',
  };

  const pageContentStyle = {
    width: collapsed ? 'calc(100vw - 93px)' : 'calc(100vw - 318px)',
    left: collapsed ? '93px' : '318px',
  };

  const pageContentMobileStyle = {
    width: '100vw',
    left: mobileCollapsed ? 0 : 254,
  };

  return (
    <>
      <div className="page-container" style={isMobile ? pageContainerStyle : null}>
        <div className="background-image">
          <img src={backgroundImage} alt="background" />
        </div>
        <TopBar
          title={title}
          color={color}
          isMobile={isMobile}
          collapsed={isMobile ? mobileCollapsed : collapsed}
          setCollapsed={collapseSideBar}
        />
        <div className="side-bar-wrapper">
          <SideBar
            navOptions={navOptions}
            isMobile={isMobile}
            collapsed={isMobile ? mobileCollapsed : collapsed}
            color={color}
          />
        </div>
        <div className="page-content" style={isMobile ? pageContentMobileStyle : pageContentStyle}>
          {isMobile && !mobileCollapsed && (
            <div className="page-content-cover" onClick={handleMenuClick} />
          )}
          {page}
        </div>
      </div>
    </>
  );
}

PageContainer.propTypes = {
  navOptions: PropTypes.array.isRequired,
  page: PropTypes.node.isRequired,
  title: PropTypes.string,
  color: PropTypes.string,
  isMobile: PropTypes.bool,
  mobileCollapsed: PropTypes.bool,
  handleMenuClick: PropTypes.func,
};

PageContainer.defaultProps = {
  title: '',
  color: '',
  isMobile: false,
  mobileCollapsed: false,
  handleMenuClick: () => null,
};

export default PageContainer;
