import React from 'react';
import TaskModal from 'shared/components/TaskModal/TaskModal';
import useModal from 'shared/hooks/useModal';

const NoMatchPage = () => {
  const { isOpen, action, closeModal, toggleModal } = useModal();

  return (
    <div>
      No match page
      <button type="button" onClick={() => toggleModal('add')}>
        Add task
      </button>
      <button type="button" onClick={() => toggleModal('edit')}>
        Edit task
      </button>
      {isOpen && (
        <TaskModal action={action} onClose={closeModal} isOpen={isOpen} />
      )}
    </div>
  );
};

export default NoMatchPage;
