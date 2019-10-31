import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import prevIcon from '../../assets/atoms/arrow-left-wide.svg';
import nextIcon from '../../assets/atoms/arrow-right-wide.svg';

function MainContent(props) {
  const {
    content, navOptions,
  } = props;

  const [state, setState] = useState(false);
  const [link, setLink] = useState('');

  const handlePrevClick = () => {
    const activeIndex = navOptions.findIndex((option) => option.active === true);
    if (activeIndex !== 0) {
      setLink(navOptions[activeIndex - 1].link);
      setState(true);
    }
    console.log('prev clicked');
  };

  const handleNextClick = () => {
    const activeIndex = navOptions.findIndex((option) => option.active === true);
    if (activeIndex !== navOptions.length - 1) {
      setLink(navOptions[activeIndex + 1].link);
      setState(true);
    }
    console.log('next clicked');
  };

  if (state) {
    return <Redirect exact to={link} />;
  }

  const { title } = navOptions.find((option) => option.active === true);

  const navButtonStyle = {
    display: navOptions.find((option) => option.active === true).level === 2 && 'none',
  };

  return (
    <div className="main-content">
      <div className="main-content-header d-flex align-items-center justify-content-between">
        <button type="button" className="btn btn-primary nav-button" onClick={handlePrevClick} style={navButtonStyle}>
          <img src={prevIcon} alt="prev icon" />
        </button>
        <div className="main-content-title">{title}</div>
        <button type="button" className="btn btn-primary nav-button" onClick={handleNextClick} style={navButtonStyle}>
          <img src={nextIcon} alt="next icon" />
        </button>
      </div>
      <div className="main-content-body">
        {content}
      </div>
    </div>
  );
}

MainContent.propTypes = {
  content: PropTypes.node,
  navOptions: PropTypes.array.isRequired,
};

MainContent.defaultProps = {
  content: '',
};

export default MainContent;
