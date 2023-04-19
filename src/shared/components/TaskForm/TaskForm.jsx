import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
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
  Label,
} from './TaskForm.styled';
import TimePickerWithLocalization from './TimePickerWithLocalization/TimePickerWithLocalization';
import sprite from 'shared/icons/sprite.svg';
import { PriorityList } from './PriorityList/PriorityList';
import { TASKS_PRIORITY } from 'shared/constants';
import getTimeStringWithDate from 'shared/utils/getTimeStringWithDate';
import theme from 'shared/theme';
import { showError, showEmptyTitle } from 'shared/utils/notifications';
import { validateForm } from './validateForm';
import { createTask, updateTask } from 'redux/tasks/tasksOperations';
import { checkDarkTheme } from 'shared/utils/checkDarkTheme';

const TaskForm = props => {
  const [darkTheme, setDarkTheme] = useState(checkDarkTheme());
  const { action, onClose, category, date, taskDetails } = props;
  const [title, setTitle] = useState(taskDetails.title || '');
  const [priority, setPriority] = useState(
    taskDetails.priority || TASKS_PRIORITY.LOW
  );
  useEffect(() => {
    setDarkTheme(checkDarkTheme());
  }, []);
  const dispatch = useDispatch();
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
      title: title,
      start: taskStart,
      end: taskEnd,
      priority: priority,
      category: category,
      date: date,
    };
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    if (trimmedTitle.length === 0) {
      return showEmptyTitle();
    }
    const task = createTaskObject({
      title: trimmedTitle,
      start,
      end,
      priority,
      category,
      date,
    });
    console.log('task: ', task);

    const isValid = await validateForm(task);
    const taskId = taskDetails.id;
    console.log('taskId: ', taskId);
    if (isValid) {
      const result =
        action === 'add'
          ? await dispatch(createTask(task))
          : await dispatch(
              updateTask({ taskId: taskDetails.id, taskData: task })
            );

      if (result.error) {
        return showError();
      }

      onClose();
    }
  };
  const isTimeWarning = useMemo(() => end.isBefore(start), [end, start]);

  const labelStyles = {
    color: darkTheme
      ? `${theme.palette.custom.labelDark}`
      : `${theme.palette.grey[500]}`,
  };

  const inputStyles = {
    color: darkTheme
      ? `${theme.palette.custom.mainWhite}`
      : `${theme.palette.grey[600]}`,
    backgroundColor: darkTheme ? `transparent` : `${theme.palette.grey.input}`,
    border: darkTheme
      ? `1px solid ${theme.palette.custom.pagDarkBorder}`
      : `none`,
  };

  return (
    <StyledForm
      onSubmit={handleSubmit}
      style={{ fontFamily: theme.typography.fontFamily }}
    >
      <InfoWrapper>
        <Block>
          <Info>
            <Label htmlFor="title" style={{ ...labelStyles }}>
              {' '}
              Title
            </Label>
            <InfoInput
              type="text"
              name="title"
              placeholder="Enter text"
              value={title}
              onChange={event => setTitle(event.target.value)}
              style={{ ...inputStyles }}
            />
            {title.length > 250 && (
              <WarningTitle>*Title limit: 250 characters max</WarningTitle>
            )}
          </Info>
          <Info>
            <Label htmlFor="start" style={{ ...labelStyles }}>
              Start
            </Label>
            <TimePickerWithLocalization
              label="start"
              value={start}
              onChange={newValue => setStart(newValue)}
            />
          </Info>

          <Info>
            <Label htmlFor="end" style={{ ...labelStyles }}>
              End
            </Label>
            <TimePickerWithLocalization
              label="end"
              value={end}
              onChange={newValue => setEnd(newValue)}
            />
          </Info>

          {isTimeWarning && (
            <WarningTime>
              *End time must not be earlier than start time.
            </WarningTime>
          )}
        </Block>
        <PriorityList defaultValue={priority} handleChange={setPriority} />
      </InfoWrapper>
      {action === 'add' ? (
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
      ) : (
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
