import { useState } from 'react';

const useModal = (initialState = { isOpen: false, action: '' }) => {
  const [modalState, setModalState] = useState(initialState);

  const openModal = action => setModalState({ isOpen: true, action });
  const closeModal = () => setModalState({ isOpen: false, action: '' });
  const toggleModal = action =>
    setModalState(prev => ({ isOpen: !prev.isOpen, action }));

  return {
    isOpen: modalState.isOpen,
    action: modalState.action,
    openModal,
    closeModal,
    toggleModal,
  };
};

export default useModal;
