import React, { useState } from 'react';
import PropTypes from 'prop-types';
import from from '../assets/atoms/toggle_plus.png';
import to from '../assets/atoms/toggle_minus.png';

function ExpandButton(props) {
  const {
    header, content, className, handleChange,
  } = props;

  const [state, setState] = useState(true);
  const onClick = () => {
    setState(!state);
    handleChange(state);
  };

  const buttonStyle = {
    width: '36px',
    height: '36px',
    background: 'transparent',
    borderRadius: '20px',
    cursor: 'pointer',
    zIndex: 1,
  };

  const imageStyle = {
    width: '45px',
    position: 'absolute',
  };

  return (
    <div className={`expand-button position-absolute ${className}`}>
      <div
        onClick={onClick}
        className="d-flex align-items-center justify-content-center position-relative custom-button"
        style={buttonStyle}
      >
        <img src={state ? from : to} alt="toggle from" style={imageStyle} />
      </div>
      { !state && (
        <div className="expand-content">
          <div className="expand-content-title">
            <strong>{header}</strong>
          </div>
          {content}
        </div>
      )}
    </div>
  );
}

ExpandButton.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.string,
  handleChange: PropTypes.func,
};

ExpandButton.defaultProps = {
  header: '',
  content: '',
  className: '',
  handleChange: () => null,
};

export default ExpandButton;
