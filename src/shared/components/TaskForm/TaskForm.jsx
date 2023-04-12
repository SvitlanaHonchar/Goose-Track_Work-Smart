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
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import sprite from 'shared/icons/sprite.svg';
import theme from 'shared/theme';
import capitalizeString from 'shared/utils/capitalizeString';

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

const radioGroupStyles = {
  columnGap: '16px',
  '& .MuiTypography-root': {
    color: '#616161',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '1.17',
  },
  '& .MuiFormControlLabel-root': {
    marginLeft: '0px',
    marginRight: '0px',
  },
  '& .MuiSvgIcon-root': {
    fontSize: 14,
  },
  '& .MuiRadio-root': {
    padding: '0px',
    marginRight: '6px',
    // height: '14px',
  },
  // display: 'flex',
  // flexDirection: 'row',
  // columnGap: '16px',
  // '& .MuiRadio-root': {
  //   marginBlockStart: '0',
  // },
};

const labelStyles = {
  color: '#616161',
  fontSize: '12px',
  fontWeight: '600',
  lineHeight: '1.17',
  // marginInlineStart: '0',
  // marginLeft: '6px',
};

const radioStyles = {
  low: {
    color: theme.palette.primary.light,
    '&.Mui-checked': {
      color: theme.palette.primary.light,
    },
    padding: '6px',
    iconColor: 'rgba(114, 194, 248, 0.5)',
  },
  medium: {
    color: theme.palette.warning.main,
    '&.Mui-checked': {
      color: theme.palette.warning.main,
    },
    padding: '6px',
    iconColor: 'rgba(243, 178, 73, 0.5)',
  },
  high: {
    color: theme.palette.error.main,
    '&.Mui-checked': {
      color: theme.palette.error.main,
    },
    padding: '6px',
    iconColor: 'rgba(234, 61, 101, 0.5)',
  },
};

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
            {/* <FormControl>
              <FormLabel className="sr-only">Priority</FormLabel>
              <Field name="priority" defaultValue="medium">
                {({ field }) => (
                  <RadioGroup
                    {...field}
                    aria-labelledby="task-priority-radio-buttons-group"
                    value={values.priority}
                    onChange={handleChange}
                    row={true}
                    // sx={radioGroupStyles}
                  >
                    <FormControlLabel
                      value="low"
                      control={
                        <Radio
                          value="low"
                          variant="outlined"
                          sx={{
                            color: theme.palette.primary.light,
                            '&.Mui-checked': {
                              color: theme.palette.primary.light,
                            },
                            padding: '6px',
                          }}
                        />
                      }
                      label="Low"
                    />
                    <FormControlLabel
                      value="medium"
                      control={
                        <Radio
                          value="medium"
                          variant="outlined"
                          sx={{
                            color: theme.palette.warning.main,
                            '&.Mui-checked': {
                              color: theme.palette.warning.main,
                            },
                            padding: '6px',
                          }}
                        />
                      }
                      label="Medium"
                    />
                    <FormControlLabel
                      value="heigh"
                      control={
                        <Radio
                          value="heigh"
                          variant="outlined"
                          sx={{
                            color: theme.palette.error.main,
                            '&.Mui-checked': {
                              color: theme.palette.error.main,
                            },
                            padding: '6px',
                          }}
                        />
                      }
                      label="Heigh"
                    />
                  </RadioGroup>
                )}
              </Field>
            </FormControl> */}
            <FormControl>
              <FormLabel className="sr-only">Priority</FormLabel>
              <Field name="priority" defaultValue="medium">
                {({ field }) => (
                  <RadioGroup
                    {...field}
                    value={values.priority}
                    onChange={handleChange}
                    row={true}
                    sx={radioGroupStyles}
                  >
                    {['low', 'medium', 'high'].map((value, index) => (
                      <FormControlLabel
                        key={index}
                        value={value}
                        control={
                          <Radio
                            value={value}
                            icon={
                              <span
                                style={{
                                  width: '12px',
                                  height: '12px',
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  border: `1.3px solid white`,
                                }}
                              >
                                <span
                                  style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: `${radioStyles[value].color}`,
                                  }}
                                ></span>
                              </span>
                            }
                            checkedIcon={
                              <span
                                style={{
                                  width: '12px',
                                  height: '12px',
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  border: `1.3px solid ${radioStyles[value].iconColor}`,
                                }}
                              >
                                <span
                                  style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: `${radioStyles[value].color}`,
                                  }}
                                ></span>
                              </span>
                            }
                            sx={radioStyles[value]}
                          />
                        }
                        label={capitalizeString(value)}
                      />
                    ))}
                  </RadioGroup>
                )}
              </Field>
            </FormControl>
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
