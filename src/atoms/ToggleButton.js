import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    color, border, from, to,
  } = props;

  const Button = styled.button`
  width: 36px;
  height: 36px;
  background: ${backgroundColor(color)};
  ${border && 'border: 4px solid #71C6FF;'}
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

  const imageStyle = {
    width: '9px',
  };

  const [state, setState] = useState(true);
  const onClick = () => {
    setState(!state);
  };

  return (
    <Button onClick={onClick}>
      <img src={state ? from : to} alt="toggle from" style={imageStyle} />
    </Button>
  );
}

ToggleButton.propTypes = {
  color: PropTypes.string.isRequired,
  border: PropTypes.bool,
  from: PropTypes.node.isRequired,
  to: PropTypes.node.isRequired,
};

ToggleButton.defaultProps = {
  border: false,
};

export default ToggleButton;
