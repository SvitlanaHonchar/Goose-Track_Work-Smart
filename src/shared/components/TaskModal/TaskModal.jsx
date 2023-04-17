import React from 'react';
<<<<<<< HEAD
=======
import PropTypes from 'prop-types';
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
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

TaskModal.propTypes = {
  action: PropTypes.oneOf(['add', 'edit']).isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  category: PropTypes.oneOf(['to-do', 'in-progress', 'done']),
  date: PropTypes.string,
  taskDetails: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    priority: PropTypes.oneOf(['low', 'medium', 'high']),
  }),
};
