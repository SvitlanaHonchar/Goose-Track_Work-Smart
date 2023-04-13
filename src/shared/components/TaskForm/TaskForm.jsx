import React, { useState } from 'react';
import dayjs from 'dayjs';
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
import taskValidationSchema from './taskValidationSchema';
import { PriorityList } from './PriorityList/PriorityList';
import { TASKS_PRIORITY } from 'shared/constants';
import getTimeStringWithDate from 'shared/utils/getTimeStringWithDate';
import theme from 'shared/theme';
import { showErrorValidation } from 'shared/utils/notifications';

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
  const [priority, setPriority] = useState(
    taskDetails.priority || TASKS_PRIORITY.LOW
  );
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const taskStart = start.format('HH-mm');
      const taskEnd = end.format('HH-mm');

      const task = {
        title: title,
        start: taskStart,
        end: taskEnd,
        priority: priority,
        category: category,
        date: date,
      };
      console.log('task: ', task);

      await taskValidationSchema.validate(task, { abortEarly: false });
      onClose();
    } catch (error) {
      const validationErrors = [...error.errors].join(' ');
      showErrorValidation(validationErrors);
    }
  };
  const isTimeWarning = end.isBefore(start);

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
      {action === 'add' && (
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
      )}
      {action === 'edit' && (
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
