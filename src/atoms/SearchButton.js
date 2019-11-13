import React from 'react';
import PropTypes from 'prop-types';

import searchIcon from '../assets/atoms/search-icon.svg';

const buttonStyle = {
  width: '32px',
  height: '32px',
  background: 'white',
  borderRadius: '16px',
  cursor: 'pointer',
  marginLeft: '4px',
  position: 'absolute',
};

const imageStyle = {
  width: '23px',
  marginRight: '2px',
  marginLeft: '1px',
};

function SearchButton(props) {
  const {
    open,
    className,
    collapsed,
    handleClick,
    handleChange,
  } = props;

  const onClick = () => {
    handleClick(!open);
  };

  const contentStyle = {
    width: collapsed ? '40px' : '280px',
    height: '40px',
    background: '#71C6FF',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: '0.3s all ease',
  };

  const labelStyle = {
    width: '100%',
    fontSize: collapsed ? 0 : '20px',
    color: 'white',
    marginLeft: '48px',
    transition: '0.3s all ease',
  };

  const inputStyle = {
    width: 'calc(100% - 42px)',
    border: '0',
    borderRadius: '20px',
    padding: '0 15px',
    marginLeft: '38px',
    marginRight: '4px',
    fontSize: '20px',
    display: collapsed ? 'none' : 'block',
  };

  return (
    <div className={`d-flex align-items-center ${className}`} style={contentStyle}>
      <div
        onClick={onClick}
        className="custom-button d-flex align-items-center justify-content-center"
        style={buttonStyle}
      >
        <img src={searchIcon} alt="search icon" style={imageStyle} />
      </div>
      {!open ? (
        <span onClick={onClick} style={labelStyle}>SEARCH</span>
      ) : (
        <input
          className="custom-input"
          type="text"
          placeholder="SEARCH"
          style={inputStyle}
          onChange={handleChange}
        />
      )}
    </div>
  );
}

SearchButton.propTypes = {
  open: PropTypes.bool,
  className: PropTypes.string,
  collapsed: PropTypes.bool.isRequired,
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
};

SearchButton.defaultProps = {
  open: false,
  className: 'search-button',
  handleClick: null,
  handleChange: null,
};

export default SearchButton;
