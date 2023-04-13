import { useState } from 'react';

const useModal = (
  initialState = { isOpen: false, action: '', details: null }
) => {
  const [modalState, setModalState] = useState(initialState);

  const openModal = (action, details = null) =>
    setModalState({ isOpen: true, action, details });

  const closeModal = () => setModalState(initialState);

  const toggleModal = (action, details = null) =>
    setModalState(prevState => {
      const isOpen = !prevState.isOpen;
      return { isOpen, action, details };
    });

  return {
    isOpen: modalState.isOpen,
    action: modalState.action,
    details: modalState.details,
    openModal,
    closeModal,
    toggleModal,
  };
};

export default useModal;
