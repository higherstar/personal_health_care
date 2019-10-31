import React from 'react';
import PropTypes from 'prop-types';

import prevIcon from '../../assets/atoms/arrow-left-wide.svg';
import nextIcon from '../../assets/atoms/arrow-right-wide.svg';

function MainContent(props) {
  const {
    content,
  } = props;

  const handlePrevClick = () => {
    console.log('prev clicked');
  };

  const handleNextClick = () => {
    console.log('next clicked');
  };

  return (
    <div className="main-content">
      <div className="main-content-header d-flex align-items-center justify-content-between">
        <button type="button" className="btn btn-primary nav-button" onClick={handlePrevClick}>
          <img src={prevIcon} alt="prev icon" />
        </button>
        <div className="main-content-title">Main Content</div>
        <button type="button" className="btn btn-primary nav-button" onClick={handleNextClick}>
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
};

MainContent.defaultProps = {
  content: '',
};

export default MainContent;
