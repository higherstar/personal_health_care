import React from 'react';
import PropTypes from 'prop-types';

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
  const { title, color } = props;

  return (
    <div
      className="top-bar d-flex align-items-center justify-content-center"
      style={{ background: backgroundColor(color) }}
    >
      <span>{title}</span>
    </div>
  );
}

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default TopBar;
