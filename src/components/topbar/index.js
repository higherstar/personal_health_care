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
    title, color, collapsed, setCollapsed,
  } = props;

  const handleCollapse = (collapse) => {
    setCollapsed(collapse);
  };

  return (
    <div
      className="top-bar d-flex align-items-center justify-content-center"
      style={{ background: backgroundColor(color) }}
    >
      <div className="side-bar-header d-flex align-items-center">
        <ToggleButton
          handleChange={handleCollapse}
          className="collapse-button"
          color="white"
          from={arrowLeft}
          to={arrowRight}
          border
        />
        {!collapsed ? (<span>Collapse the Navigation</span>)
          : (<span>Open the Navigation</span>)}
      </div>
      <span>{title}</span>
    </div>
  );
}

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};

export default TopBar;
