import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import arrowRight from '../assets/atoms/arrow-dropdown.svg';

const backgroundColor = (color) => {
  switch (color) {
    case 'blue':
      return '#0066CC';
    case 'yellow':
      return '#ED8B00';
    default:
      return '#FFFFFF';
  }
};

function DropDown(props) {
  const {
    color,
    options,
  } = props;

  const [state, setState] = useState(options.map((option) => ({
    id: option.className,
    collapsed: true,
  })));

  const isCollapsed = (option) => state.find((s) => s.id === option.className).collapsed;

  const onClick = (option) => {
    const newState = state.find((s) => s.id === option.className);
    newState.collapsed = !isCollapsed(option);

    setState([
      ...state,
      newState,
    ]);
  };

  const buttonStyle = {
    width: '36px',
    height: '36px',
    background: `${backgroundColor(color)}`,
    borderRadius: '20px',
    boxShadow: '0 0 3px 0 black',
    cursor: 'pointer',
    position: 'absolute',
    left: '-18px',
  };

  const imageStyle = (option) => {
    return {
      width: '13px',
      position: 'absolute',
      marginLeft: isCollapsed(option) && '1px',
      marginTop: !isCollapsed(option) && '1px',
      transform: !isCollapsed(option) && 'rotate(90deg)',
    };
  };

  const titleStyle = {
    border: `3px solid ${backgroundColor(color)}`,
    color: backgroundColor(color),
  };

  const listStyle = (option) => {
    return {
      display: isCollapsed(option) && 'none',
    };
  };

  return (
    <>
      {options.map((option) => (
        <div className={`d-flex align-items-center custom-dropdown ${option.className}`} key={option.className}>
          <div
            onClick={() => onClick(option)}
            className="d-flex align-items-center justify-content-center drop-button"
            style={buttonStyle}
          >
            <img src={arrowRight} alt="dropdown icon" style={imageStyle(option)} />
          </div>
          <div className="dropdown-title" style={titleStyle} onClick={() => onClick(option)}>
            {option.title}
          </div>
          <div className="custom-dropdown-list position-absolute" style={listStyle(option)}>
            {option.subMenus.map((subMenu, index) => (
              <Link to={option.subMenuLinks[index]} key={option.subMenuLinks[index]}>
                {subMenu}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

DropDown.propTypes = {
  color: PropTypes.string,
  options: PropTypes.array,
};

DropDown.defaultProps = {
  color: '',
  options: [],
};

export default DropDown;
