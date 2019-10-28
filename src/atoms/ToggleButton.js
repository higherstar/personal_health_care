import React, { useState } from 'react';
import PropTypes from 'prop-types';

const backgroundColor = (color) => {
  switch (color) {
    case 'blue':
      return '#0066CC';
    case 'yellow':
      return '#ED8B00';
    case 'white':
      return '#FFFFFF';
    default:
      return '#FFFFFF';
  }
};

function ToggleButton(props) {
  const {
    color, border, from, to, className, handleChange,
  } = props;

  const [state, setState] = useState(true);
  const onClick = () => {
    setState(!state);
    handleChange(state);
  };

  const buttonStyle = {
    width: '36px',
    height: '36px',
    background: `${backgroundColor(color)}`,
    border: border && '4px solid #71C6FF',
    borderRadius: '20px',
    cursor: 'pointer',
  };

  const imageStyle = {
    width: '10px',
    position: 'absolute',
    marginLeft: state ? '-1px' : '1px',
  };

  return (
    <div
      onClick={onClick}
      className={`d-flex align-items-center justify-content-center custom-button ${className}`}
      style={buttonStyle}
    >
      <img src={state ? from : to} alt="toggle from" style={imageStyle} />
    </div>
  );
}

ToggleButton.propTypes = {
  color: PropTypes.string.isRequired,
  border: PropTypes.bool,
  from: PropTypes.node.isRequired,
  to: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

ToggleButton.defaultProps = {
  border: false,
};

export default ToggleButton;
