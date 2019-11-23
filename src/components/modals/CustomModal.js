import React from 'react';
import PropTypes from 'prop-types';

function CustomModal(props) {
  const {
    open, isMobile, header, content, closeButton, handleCloseClick,
  } = props;

  const handleClose = () => {
    handleCloseClick();
  };

  const modalStyle = {
    display: open ? 'flex' : 'none',
    height: isMobile ? 'calc(100vh - 70px)' : 'calc(100vh - 112px)',
  };

  const modalContentStyle = {
    height: isMobile ? '100%' : 'calc(100% - 60px)',
  };

  const closeButtonMobileStyle = {
    right: -14,
    top: -14,
  };

  return (
    <div className="custom-modal-wrapper" style={modalStyle}>
      <div className="custom-modal-container phc-container">
        <div className="custom-modal-header d-flex align-items-center justify-content-start">
          {header}
          {closeButton && (
            <button
              type="button"
              className="btn btn-primary close-button"
              onClick={handleClose}
              style={isMobile ? closeButtonMobileStyle : null}
            >
              <span>&times;</span>
            </button>
          )}
        </div>
        <div
          className="custom-modal-content d-flex justify-content-center align-items-center flex-md-wrap"
          style={modalContentStyle}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool,
  content: PropTypes.node,
  header: PropTypes.node,
  closeButton: PropTypes.bool,
  handleCloseClick: PropTypes.func,
};

CustomModal.defaultProps = {
  isMobile: false,
  content: '',
  header: '',
  closeButton: true,
  handleCloseClick: () => null,
};

export default CustomModal;
