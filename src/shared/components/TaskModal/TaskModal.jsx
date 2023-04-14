import React from 'react';
import CustomModal from '../CustomModal/CustomModal';
import TaskForm from '../TaskForm/TaskForm';

const TaskModal = props => {
  const { action, onClose, isOpen, category, date, taskDetails } = props;
  return (
    <CustomModal action={action} onClose={onClose} isOpen={isOpen}>
      <TaskForm
        action={action}
        onClose={onClose}
        category={category}
        date={date}
        taskDetails={taskDetails}
      />
    </CustomModal>
  );
};

export default TaskModal;
