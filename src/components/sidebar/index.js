import React from 'react';
import ToggleButton from '../../atoms/ToggleButton';
import arrowRight from '../../assets/atoms/arrow-right.svg';
import arrowLeft from '../../assets/atoms/arrow-left.svg';

function SideBar() {
  return (
    <div className="side-bar" style={{ width: '318px' }}>
      <div className="left-band" />
      <div className="side-bar-header">
        <ToggleButton color="white" from={arrowRight} to={arrowLeft} border />
      </div>
      <div className="content" />
      <div className="side-bar-footer" />
    </div>
  );
}

export default SideBar;
