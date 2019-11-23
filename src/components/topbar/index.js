import React from 'react';
import PropTypes from 'prop-types';

import ToggleButton from '../../atoms/ToggleButton';
import arrowRight from '../../assets/atoms/arrow-right.svg';
import arrowLeft from '../../assets/atoms/arrow-left.svg';

const backgroundColor = (color) => {
  switch (color) {
    case 'blue':
      return '#0066CC';
    case 'yellow':
      return '#ED8B00';
    default:
      return '#0066CC';
  }
};

function TopBar(props) {
  const {
    title, color, collapsed, isMobile, setCollapsed,
  } = props;

  const handleCollapse = (collapse) => {
    setCollapsed(collapse);
  };

  let background = backgroundColor(color);
  let showTitle = true;
  if (title.includes('Abbreviation List') || title.includes('Acknowledgments')) {
    background = 'transparent';
    showTitle = false;
  }

  const titleMobileStyle = {
    fontSize: isMobile ? 20 : 28,
    padding: '5px 10px 5px 10px',
    textAlign: 'center',
  };

  return (
    <div
      className="top-bar d-flex align-items-center justify-content-center"
      style={{ background, height: isMobile ? 'fit-content' : 52 }}
    >
      <div className="side-bar-header d-flex align-items-center">
        {!isMobile && (
          <>
            <ToggleButton
              handleChange={handleCollapse}
              className="collapse-button"
              color="white"
              from={arrowLeft}
              to={arrowRight}
              border
            />
            {!collapsed ? (<span>Collapse the Navigation</span>)
              : showTitle && (<span>Open the Navigation</span>)}
          </>
        )}
      </div>
      {showTitle && (<span style={isMobile ? titleMobileStyle : null}>{title}</span>)}
    </div>
  );
}

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};

export default TopBar;
