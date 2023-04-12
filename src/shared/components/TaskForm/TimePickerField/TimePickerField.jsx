import { useField } from 'formik';
import { TimePicker } from '../TaskForm.styled';

export const TimePickerField = ({ label, name, ...rest }) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = date => {
    helpers.setValue(date);
  };

  const handleBlur = () => {
    helpers.setTouched(true);
  };

  return (
    <TimePicker
      {...field}
      {...rest}
      label={label}
      value={field.value || null}
      onChange={handleChange}
      onBlur={handleBlur}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};
