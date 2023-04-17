import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import IconButton from '@mui/material/IconButton';
import sprite from 'shared/icons/sprite.svg';
Modal.setAppElement('#root');

const CustomModal = ({ children, ...props }) => {
  const { isOpen, onClose, action } = props;
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const iconButtonStyles = {
    position: 'absolute',
    padding: '14px',
    top: 0,
    right: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:hover svg': {
      stroke: '#3E85F3',
    },
  };

  const customStyles = {
    overlay: {
      // backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      background: '#FFFFFF',
      width: width >= 768 ? '396px' : '303px',
      maxWidth: '100%',
      paddingTop: width >= 768 ? '40px' : '48px',
      paddingBottom: '40px',
      paddingLeft: width >= 768 ? '28px' : '18px',
      paddingRight: width >= 768 ? '28px' : '18px',
      border: '1px solid rgba(220, 227, 229, 0.8)',
      borderRadius: '8px',
      boxShadow: '0px 4px 16px rgba(17, 17, 17, 0.1)',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      contentLabel={`Modal window  to ${action} task`}
      closeTimeoutMS={300}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      style={{
        overlay: customStyles.overlay,
        content: customStyles.content,
      }}
    >
      <IconButton
        aria-label="close modal"
        sx={iconButtonStyles}
        onClick={() => onClose()}
        className="close-modal-btn"
      >
        <svg stroke="#111111" width="20" height="20">
          <use xlinkHref={`${sprite}#close`} />
        </svg>
      </IconButton>
      {children}
    </Modal>
  );
};

CustomModal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
};

export default CustomModal;
