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
    case 'red':
      return '#E40046';
    default:
      return '#FFFFFF';
  }
};

function DropDown(props) {
  const {
    color,
    type,
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

  const buttonStyle = (option) => {
    const isDataInsights = type === 'journey' && option.className === 'data-dropdown';
    const background = isDataInsights && color === 'blue'
      ? `${backgroundColor('red')}`
      : `${backgroundColor(color)}`;

    return {
      width: '36px',
      height: '36px',
      background: isDataInsights && color === 'red' ? `${backgroundColor('blue')}` : background,
      borderRadius: '20px',
      boxShadow: '0 0 3px 0 black',
      cursor: 'pointer',
      position: 'absolute',
      left: '-18px',
    };
  };

  const imageStyle = (option) => ({
    width: '13px',
    position: 'absolute',
    marginLeft: isCollapsed(option) && '1px',
    marginTop: !isCollapsed(option) && '1px',
    transform: !isCollapsed(option) && 'rotate(90deg)',
  });

  const titleStyle = (option) => {
    const isDataInsights = type === 'journey' && option.className === 'data-dropdown';
    const borderColor = isDataInsights && color === 'blue'
      ? `3px solid ${backgroundColor('red')}`
      : `3px solid ${backgroundColor(color)}`;

    return {
      border: isDataInsights && color === 'red'
        ? `3px solid ${backgroundColor('blue')}`
        : borderColor,
      color: color === 'red' ? backgroundColor('blue') : backgroundColor(color),
    };
  };

  const listStyle = (option) => ({
    display: isCollapsed(option) && 'none',
  });

  return (
    <>
      {options.map((option) => (
        <div className={`d-flex align-items-center custom-dropdown ${option.className}`} key={option.className}>
          <div
            onClick={() => onClick(option)}
            className="d-flex align-items-center justify-content-center drop-button"
            style={buttonStyle(option)}
          >
            <img src={arrowRight} alt="dropdown icon" style={imageStyle(option)} />
          </div>
          <div
            className="dropdown-title d-flex align-items-center"
            style={titleStyle(option)}
            onClick={() => onClick(option)}
          >
            <span>{option.title}</span>
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
  type: PropTypes.string,
  options: PropTypes.array,
};

DropDown.defaultProps = {
  color: '',
  type: '',
  options: [],
};

export default DropDown;
