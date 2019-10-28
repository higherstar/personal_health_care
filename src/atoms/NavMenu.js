import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import connect from 'react-redux/es/connect/connect';
import searchIcon from '../assets/atoms/search-icon.svg';

function NavMenu(props) {
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


  const imageStyle = {
    width: '23px',
    marginRight: '2px',
    marginLeft: '1px',
  };

  const contentStyle = {
    width: collapsed ? '40px' : '280px',
    height: '40px',
    background: '#71C6FF',
    borderRadius: '20px',
    transition: '0.4s all ease',
    cursor: 'pointer',
  };

  const labelStyle = {
    width: '100%',
    fontSize: '20px',
    color: 'white',
    marginLeft: '48px',
  };


  return (
    <div className={`d-flex align-items-center ${className}`} style={contentStyle}>
      <Button onClick={onClick} className="custom-button">
        <img src={searchIcon} alt="search icon" style={imageStyle} />
      </Button>
      { !collapsed && (
        <>
          {state ? (
            <span onClick={onClick} style={labelStyle}>SEARCH</span>
          ) : (<Input className="custom-input" type="text" placeholder="Search" />)}
        </>
      )}
    </div>
  );
}

NavMenu.propTypes = {
  className: PropTypes.string,
  collapsed: PropTypes.bool.isRequired,
};

NavMenu.defaultProps = {
  className: 'search-button',
};

const mapStateToProps = (store) => ({
  collapsed: store.sideBar.collapsed,
});

export default connect(
  mapStateToProps,
)(NavMenu);
