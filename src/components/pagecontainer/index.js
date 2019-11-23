import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TopBar from '../topbar';
import SideBar from '../sidebar';
import backgroundImage from '../../assets/common/background.png';

function PageContainer(props) {
  const {
    navOptions, page, title, color, isMobile, mobileCollapsed,
  } = props;

  const [collapsed, setCollapsed] = useState(false);
  const collapseSideBar = () => {
    setCollapsed(!collapsed);
  };

  const pageContentStyle = {
    width: collapsed ? 'calc(100vw - 93px)' : 'calc(100vw - 318px)',
    left: collapsed ? '93px' : '318px',
  };

  const pageContentMobileStyle = {
    width: collapsed ? '100vw' : 'calc(100vw - 318px)',
    left: collapsed ? 0 : '318px',
  };

  return (
    <>
      <div className="page-container">
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
            collapsed={isMobile ? mobileCollapsed : collapsed}
            color={color}
          />
        </div>
        <div className="page-content" style={isMobile ? pageContentMobileStyle : pageContentStyle}>
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
};

PageContainer.defaultProps = {
  title: '',
  color: '',
  isMobile: false,
  mobileCollapsed: false,
};

export default PageContainer;
