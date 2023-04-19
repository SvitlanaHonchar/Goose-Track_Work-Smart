import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ukUA } from '@mui/x-date-pickers/locales';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '../TaskForm.styled';
import { checkDarkTheme } from 'shared/utils/checkDarkTheme';
import theme from 'shared/theme';

const TimePickerWithLocalization = ({ label, value, onChange }) => {
  const [darkTheme, setDarkTheme] = useState(checkDarkTheme());

  const localeText =
    ukUA.components.MuiLocalizationProvider.defaultProps.localeText;

  const timePickerStyles = {
    border: darkTheme
      ? `1px solid ${theme.palette.custom.pagDarkBorder}`
      : `none`,
    backgroundColor: darkTheme ? `transparent` : `${theme.palette.grey.input}`,

    borderRadius: '8px',
    '& .MuiOutlinedInput-root': {
      color: darkTheme
        ? `${theme.palette.custom.mainWhite}`
        : `${theme.palette.grey[600]}`,
      '& fieldset': {
        border: 'none',
        borderRadius: '8px',
      },
      '&:hover fieldset': {
        borderColor: 'transparent',
      },
    },
  };

  useEffect(() => {
    setDarkTheme(checkDarkTheme());
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} localeText={localeText}>
      <TimePicker
        format="HH:mm"
        sx={timePickerStyles}
        name={label}
        value={value}
        onChange={onChange}
      />
    </LocalizationProvider>
  );
};
TimePickerWithLocalization.propTypes = {
  label: PropTypes.string.isRequired,
  // value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TimePickerWithLocalization;
