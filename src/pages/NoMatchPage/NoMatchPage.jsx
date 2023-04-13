import React from 'react';
import TaskModal from 'shared/components/TaskModal/TaskModal';
import useModal from 'shared/hooks/useModal';

const NoMatchPage = () => {
  const { isOpen, action, closeModal, toggleModal, details } = useModal();

  const myTaskDetails = {
    id: '64303c8582dc6fccdee4f8df',
    title: 'Refining designs based on feedback',
    start: '09-30',
    end: '14-40',
    priority: 'high', // (string: "low", 'medium' , 'high')
  };

  const handleAddTaskClick = () => {
    toggleModal('add', { details: {} });
  };

  const handleEditTaskClick = () => {
    toggleModal('edit', { details: myTaskDetails });
  };
  return (
    <div>
      No match page
      <button type="button" onClick={handleAddTaskClick}>
        Add task
      </button>
      <button type="button" onClick={handleEditTaskClick}>
        Edit task
      </button>
      {isOpen && (
        <TaskModal
          action={action}
          onClose={closeModal}
          isOpen={isOpen}
          category="to-do" // string : 'to-do', 'in-progress', 'done'
          date="2023-03-17T00:00:00.000Z"
          taskDetails={details ? details.details : {}}
        />
      )}
    </div>
  );
};

export default NoMatchPage;
