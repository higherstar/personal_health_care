import React from 'react';
import PropTypes from 'prop-types';

import frameImage from '../../assets/pages/enablers/roche-framework.png';

function ImageModal(props) {
  const {
    open, header, image, className, handleCloseClick,
  } = props;

  const handleClose = () => {
    handleCloseClick();
  };

  const modalStyle = {
    display: !open ? 'none' : 'flex',
  };

  return (
    <div className={`image-modal custom-modal-wrapper ${className}`} style={modalStyle} onClick={handleClose}>
      <div className="custom-modal-container phc-container">
        <div className="custom-modal-header d-flex align-items-center justify-content-start">
          {header}
          <button type="button" className="btn btn-primary close-button" onClick={handleClose}>
            <span>&times;</span>
          </button>
        </div>
        <div
          className="custom-modal-content d-flex justify-content-center align-items-center flex-md-wrap"
          onClick={(e) => e.stopPropagation()}
        >
          <img className={`${image === frameImage && 'framework-image'}`} src={image} alt="modal" />
        </div>
      </div>
    </div>
  );
}

ImageModal.propTypes = {
  open: PropTypes.bool.isRequired,
  header: PropTypes.node,
  image: PropTypes.node,
  className: PropTypes.string,
  handleCloseClick: PropTypes.func,
};

ImageModal.defaultProps = {
  header: '',
  image: '',
  className: '',
  handleCloseClick: () => null,
};

export default ImageModal;
