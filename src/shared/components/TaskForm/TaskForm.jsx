<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import {
  StyledForm,
  InfoWrapper,
  Block,
  Info,
  InfoInput,
  ButtonList,
  AddButton,
  EditButton,
  CancelButton,
  WarningTime,
  WarningTitle,
} from './TaskForm.styled';
import TimePickerWithLocalization from './TimePickerWithLocalization/TimePickerWithLocalization';
import sprite from 'shared/icons/sprite.svg';
<<<<<<< HEAD
import taskValidationSchema from './taskValidationSchema';
=======
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
import { PriorityList } from './PriorityList/PriorityList';
import { TASKS_PRIORITY } from 'shared/constants';
import getTimeStringWithDate from 'shared/utils/getTimeStringWithDate';
import theme from 'shared/theme';
<<<<<<< HEAD
import { showErrorValidation, showError } from 'shared/utils/notifications';

import { createTask, updateTask } from 'redux/tasks/tasksOperations';
const TaskForm = props => {
  const { action, onClose, category, date, taskDetails } = props;
  const [title, setTitle] = useState(taskDetails.title || '');

  const [start, setStart] = useState(
    taskDetails.start
      ? dayjs(getTimeStringWithDate(taskDetails.start, date))
      : dayjs()
  );
  const [end, setEnd] = useState(
    taskDetails.end
      ? dayjs(getTimeStringWithDate(taskDetails.end, date))
      : dayjs().hour(23).minute(59)
  );
=======
import { showError } from 'shared/utils/notifications';
import { validateForm } from './validateForm';

import { createTask, updateTask } from 'redux/tasks/tasksOperations';

const TaskForm = props => {
  const { action, onClose, category, date, taskDetails } = props;
  const [title, setTitle] = useState(taskDetails.title || '');
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
  const [priority, setPriority] = useState(
    taskDetails.priority || TASKS_PRIORITY.LOW
  );

<<<<<<< HEAD
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const taskStart = start.format('HH-mm');
    const taskEnd = end.format('HH-mm');

    const task = {
=======
  const getDefaultStartTime = (taskDetails, date) => {
    return taskDetails.start
      ? dayjs(getTimeStringWithDate(taskDetails.start, date))
      : dayjs();
  };

  const getDefaultEndTime = (taskDetails, date) => {
    return taskDetails.end
      ? dayjs(getTimeStringWithDate(taskDetails.end, date))
      : dayjs().hour(23).minute(59);
  };
  const [start, setStart] = useState(getDefaultStartTime(taskDetails, date));
  const [end, setEnd] = useState(getDefaultEndTime(taskDetails, date));
  const dispatch = useDispatch();

  const createTaskObject = ({
    title,
    start,
    end,
    priority,
    category,
    date,
  }) => {
    const taskStart = start.format('HH-mm');
    const taskEnd = end.format('HH-mm');

    return {
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
      title: title,
      start: taskStart,
      end: taskEnd,
      priority: priority,
      category: category,
      date: date,
    };
<<<<<<< HEAD
    console.log('task: ', task);

    try {
      await taskValidationSchema.validate(task, { abortEarly: false });
    } catch (error) {
      const validationErrors = [...error.errors].join(' ');
      showErrorValidation(validationErrors);
      return;
    }

    const result =
      action === 'add'
        ? await dispatch(createTask(task))
        : await dispatch(updateTask({ taskId: taskDetails.id, task }));

    if (result.error) {
      showError();
    }

    onClose();
  };
  const isTimeWarning = end.isBefore(start);
=======
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const task = createTaskObject({
      title,
      start,
      end,
      priority,
      category,
      date,
    });
    console.log('task: ', task);

    const isValid = await validateForm(task);

    if (isValid) {
      const result =
        action === 'add'
          ? await dispatch(createTask(task))
          : await dispatch(updateTask({ taskId: taskDetails.id, task }));

      if (result.error) {
        showError();
      }

      onClose();
    }
  };
  const isTimeWarning = useMemo(() => end.isBefore(start), [end, start]);
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e

  return (
    <StyledForm
      onSubmit={handleSubmit}
      style={{ fontFamily: theme.typography.fontFamily }}
    >
      <InfoWrapper>
        <Block>
          <Info>
            <label htmlFor="title">Title</label>
            <InfoInput
              type="text"
              name="title"
              placeholder="Enter text"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            {title.length > 250 && (
              <WarningTitle>*Title limit: 250 characters max</WarningTitle>
            )}
          </Info>

          <TimePickerWithLocalization
            label="start"
            value={start}
            onChange={newValue => setStart(newValue)}
          />
          <TimePickerWithLocalization
            label="end"
            value={end}
            onChange={newValue => setEnd(newValue)}
          />
          {isTimeWarning && (
            <WarningTime>
              *End time must not be earlier than start time.
            </WarningTime>
          )}
        </Block>
        <PriorityList defaultValue={priority} handleChange={setPriority} />
      </InfoWrapper>
<<<<<<< HEAD
      {action === 'add' && (
=======
      {action === 'add' ? (
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
        <ButtonList>
          <li>
            <AddButton type="submit">
              <svg>
                <use xlinkHref={`${sprite}#icon-plus`} />
              </svg>
              Add
            </AddButton>
          </li>
          <li>
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
          </li>
        </ButtonList>
<<<<<<< HEAD
      )}
      {action === 'edit' && (
=======
      ) : (
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
        <EditButton type="submit">
          <svg>
            <use xlinkHref={`${sprite}#pencil`} />
          </svg>
          Edit
        </EditButton>
      )}
    </StyledForm>
  );
};

export default TaskForm;

TaskForm.propTypes = {
  action: PropTypes.oneOf(['add', 'edit']).isRequired,
  onClose: PropTypes.func.isRequired,
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
