import React from 'react';
import PropTypes from 'prop-types';

// import image from '../../assets/pages/journey/cds-desc.png';

function ImageModal(props) {
  const {
    open, header, image, handleCloseClick,
  } = props;

  const handleClose = () => {
    handleCloseClick();
  };

  const modalStyle = {
    display: !open ? 'none' : 'block',
  };

  return (
    <div className="image-modal custom-modal-wrapper" style={modalStyle}>
      <div className="custom-modal-container phc-container">
        <div className="custom-modal-header d-flex align-items-center justify-content-start">
          {header}
          <button type="button" className="btn btn-primary close-button" onClick={handleClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className="custom-modal-content d-flex justify-content-center align-items-center flex-md-wrap">
          <img src={image} alt="modal" />
        </div>
      </div>
    </div>
  );
}

ImageModal.propTypes = {
  open: PropTypes.bool.isRequired,
  header: PropTypes.node,
  image: PropTypes.node,
  handleCloseClick: PropTypes.func,
};

ImageModal.defaultProps = {
  header: '',
  image: '',
  handleCloseClick: () => null,
};

export default ImageModal;
