import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CustomModal(props) {
  const {
    open, header, content, closeButton, handleCloseClick,
  } = props;

  const [closed, setClosed] = useState(!open);
  const handleClose = () => {
    setClosed(true);
    handleCloseClick();
  };

  const modalStyle = {
    display: !open || closed ? 'none' : 'block',
  };

  return (
    <div className="custom-modal-wrapper" style={modalStyle}>
      <div className="custom-modal-container phc-container">
        <div className="custom-modal-header d-flex align-items-center justify-content-start">
          {header}
          {closeButton && (
            <button type="button" className="btn btn-primary close-button" onClick={handleClose}>
              <span>&times;</span>
            </button>
          )}
        </div>
        <div className="custom-modal-content d-flex justify-content-between align-items-start flex-md-wrap">
          {content}
        </div>
      </div>
    </div>
  );
}

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  content: PropTypes.node,
  header: PropTypes.node,
  closeButton: PropTypes.bool,
  handleCloseClick: PropTypes.func,
};

CustomModal.defaultProps = {
  content: '',
  header: '',
  closeButton: true,
  handleCloseClick: () => null,
};

export default CustomModal;
