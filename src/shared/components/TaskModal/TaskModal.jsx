import React from 'react';
import CustomModal from '../CustomModal/CustomModal';
import TaskForm from '../TaskForm/TaskForm';

const TaskModal = props => {
  const { action, onClose } = props;
  return (
    <CustomModal {...props}>
      <TaskForm
        taskDetails={{
          title: 'Refining designs based on feedback',
          start: '10:00',
          end: '12:00',
          priority: 'high',
        }}
        action={action}
        onClose={onClose}
      />
    </CustomModal>
  );
};

export default TaskModal;
