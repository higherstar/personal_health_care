import React from 'react';
import PropTypes from 'prop-types';

function ConnectionModal(props) {
  const {
    open, header, content, handleCloseClick,
  } = props;

  const handleClose = () => {
    handleCloseClick();
  };

  const modalStyle = {
    display: !open ? 'none' : 'block',
  };

  return (
    <div className="connection-modal custom-modal-wrapper" style={modalStyle}>
      <div className="custom-modal-container phc-container">
        <div className="custom-modal-header d-flex align-items-center justify-content-start">
          {header}
          <button type="button" className="btn btn-primary close-button" onClick={handleClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className="custom-modal-content d-flex justify-content-center align-items-center flex-md-wrap">
          {content}
        </div>
      </div>
    </div>
  );
}

ConnectionModal.propTypes = {
  open: PropTypes.bool.isRequired,
  content: PropTypes.node,
  header: PropTypes.node,
  handleCloseClick: PropTypes.func,
};

ConnectionModal.defaultProps = {
  content: '',
  header: '',
  handleCloseClick: () => null,
};

export default ConnectionModal;
