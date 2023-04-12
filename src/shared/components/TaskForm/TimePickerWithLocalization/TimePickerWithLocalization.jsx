import React from 'react';
import { Info } from '../TaskForm.styled';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ukUA } from '@mui/x-date-pickers/locales';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePickerField } from '../TimePickerField/TimePickerField';

const TimePickerWithLocalization = ({ label, value }) => {
  const [time, setTime] = React.useState(value);
  const localeText =
    ukUA.components.MuiLocalizationProvider.defaultProps.localeText;
  const timePickerStyles = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
        borderRadius: '8px',
      },
      '&:hover fieldset': {
        borderColor: 'transparent',
      },
    },
  };

  return (
    <Info>
      <label htmlFor={label}>{label}</label>
      <LocalizationProvider dateAdapter={AdapterDayjs} localeText={localeText}>
        <TimePickerField
          format="HH:mm"
          sx={timePickerStyles}
          name={label}
          value={time}
          onChange={newValue => setTime(newValue)}
        />
      </LocalizationProvider>
    </Info>
  );
};

export default TimePickerWithLocalization;
