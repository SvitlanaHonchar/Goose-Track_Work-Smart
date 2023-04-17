import React from 'react';
import PropTypes from 'prop-types';
import { Info } from '../TaskForm.styled';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ukUA } from '@mui/x-date-pickers/locales';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '../TaskForm.styled';

const TimePickerWithLocalization = ({ label, value, onChange }) => {
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
        <TimePicker
          format="HH:mm"
          sx={timePickerStyles}
          name={label}
          value={value}
          onChange={onChange}
        />
      </LocalizationProvider>
    </Info>
  );
};
TimePickerWithLocalization.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TimePickerWithLocalization;
