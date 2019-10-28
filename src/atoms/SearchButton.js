import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import connect from 'react-redux/es/connect/connect';
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
    className,
    collapsed,
  } = props;

  const [state, setState] = useState(true);
  const onClick = () => {
    setState(!state);
    // handleChange(state);
  };

  useEffect(() => {
    setState(true);
  }, [collapsed]);

  const contentStyle = {
    width: collapsed ? '40px' : '280px',
    height: '40px',
    background: '#71C6FF',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: '0.4s all ease',
  };

  const labelStyle = {
    width: '100%',
    fontSize: collapsed ? 0 : '20px',
    color: 'white',
    marginLeft: '48px',
    transition: '0.4s all ease',
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
      {state ? (
        <span onClick={onClick} style={labelStyle}>SEARCH</span>
      ) : (<input className="custom-input" type="text" placeholder="Search" style={inputStyle} />)}
    </div>
  );
}

SearchButton.propTypes = {
  className: PropTypes.string,
  collapsed: PropTypes.bool.isRequired,
};

SearchButton.defaultProps = {
  className: 'search-button',
};

const mapStateToProps = (store) => ({
  collapsed: store.sideBar.collapsed,
});

export default connect(
  mapStateToProps,
)(SearchButton);
