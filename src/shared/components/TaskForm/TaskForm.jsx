import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
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
  Warning,
} from './TaskForm.styled';
import TimePickerWithLocalization from './TimePickerWithLocalization/TimePickerWithLocalization';
import dayjs from 'dayjs';
import sprite from 'shared/icons/sprite.svg';
import { PriorityList } from './PriorityList/PriorityList';

const validationSchema = Yup.object().shape({
  title: Yup.string().max(250, 'Must be 250 characters or less'),
  // .required('Required'),
  // start: Yup.string()
  //   .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format')
  //   .required('Required'),
  // end: Yup.string()
  //   .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format')
  //   .test(
  //     'is-greater',
  //     'End time must be greater than start time',
  //     function (value) {
  //       return value && value > start;
  //     }
  //   )
  //   .required('Required'),
  // priority: Yup.string()
  //   .oneOf(['low', 'medium', 'high'])
  //   .required('Required'),
});

const TaskForm = ({ taskDetails, onClose, action }) => {
  const initialValues = {
    title: taskDetails.title,
    start: dayjs('2022-04-17T09:30'),
    end: dayjs('2022-04-17T14:40'),
    priority: 'medium',
  };

  const handleSubmit = values => {
    console.log('values: ', values);
    console.log('here it will be request to backend for add or edit task');
    onClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        errors,
        touched,
        isSubmitting,
        setFieldValue,
        values,
        handleChange,
      }) => (
        <StyledForm>
          <InfoWrapper>
            <Block>
              <Info>
                <label htmlFor="title">Title</label>
                <InfoInput type="text" name="title" />
                {/* <ErrorMessage name="title" component={Warning} /> */}
              </Info>
              <TimePickerWithLocalization
                label="start"
                value={initialValues.start}
              />
              <TimePickerWithLocalization
                label="end"
                value={initialValues.end}
              />
            </Block>
            <PriorityList values={values} handleChange={handleChange} />
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
      )}
    </Formik>
  );
};

export default TaskForm;
