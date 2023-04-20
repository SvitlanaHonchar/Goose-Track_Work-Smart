import * as Yup from 'yup';
const taskValidationSchema = Yup.object().shape({
  title: Yup.string()
    .max(
      250,
      'The title is required to have a maximum limit of 250 characters.'
    )
    .required('Please write the title of task.'),
  start: Yup.string()

    .matches(/^([0-1][0-9]|2[0-3])-([0-5][0-9])$/, {
      message:
        'Please ensure that the start time for the task is specified in the format of HH-MM.',
    })
    .required('Start time is required'),
  end: Yup.string()
    .matches(/^([0-1][0-9]|2[0-3])-([0-5][0-9])$/, {
      message:
        'Please ensure that the end time for the task is specified in the format of HH-MM.',
    })
    .test(
      'greater-than-start',
      'End time must not be earlier than start time.',
      function (value) {
        const { start } = this.parent;
        if (!start) {
          return true;
        }
        const startTime = parseInt(start.replace('-', ''), 10);
        const endTime = parseInt(value.replace('-', ''), 10);
        return endTime > startTime;
      }
    )
    .required('End time is required.'),
  priority: Yup.string()
    .oneOf(
      ['low', 'medium', 'high'],
      'Priority must be one of "low", "medium", or "high".'
    )
    .required('Priority is required'),
  date: Yup.date()
    .typeError('Please enter a valid date in the format YYYY-MM-DD.')
    .required('Date is required.'),
  category: Yup.string()
    .oneOf(
      ['to-do', 'in-progress', 'done'],
      'Category must be one of "to-do", "in-progress", or "done".'
    )
    .required('Category is required.'),
});

export default taskValidationSchema;
