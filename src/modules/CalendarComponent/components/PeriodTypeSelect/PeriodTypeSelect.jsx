import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { buttonStyles } from './PeriodTypeSelectStyles';

const PeriodTypeSelect = ({ selectedType, onTypeSelect, setActiveDate }) => {
  const navigate = useNavigate();

  const handlePeriodType = type => {
    console.log('i set new current day');
    onTypeSelect(type);
    const currentDate = new Date();
    setActiveDate(currentDate);
    navigateToCalendarDate(selectedType, currentDate);
  };

  const getUrlFormatDate = (type, date) => {
    const urlFormatDate =
      type === 'month' ? format(date, 'yyyy-MM-dd') : format(date, 'yyyy-MM');
    const newType = type === 'month' ? 'day' : 'month';
    return `/calendar/${newType}/${urlFormatDate}`;
  };

  const navigateToCalendarDate = (type, date) => {
    const url = getUrlFormatDate(type, date);
    navigate(url);
  };

  const handleClick = type => {
    if (selectedType !== type) {
      handlePeriodType(type);
    }
  };

  // const buttonStyles = {
  //   width: { xs: '76px', md: '82px' },
  //   height: { xs: '34px', md: '34px' },
  //   padding: { xs: '8px 16px', md: '8px 16px' },
  //   borderRadius: '8px',
  //   border: 'none',

  //   fontSize: { xs: '14px', md: '16px' },
  //   lineHeight: { xs: '1.29', md: '1.12' },
  //   fontWeight: '500',
  //   color: theme.palette.primary.main,
  //   backgroundColor: theme.palette.secondary.light,
  //   '&:hover': {
  //     backgroundColor: theme.palette.primary.main,
  //     color: theme.palette.custom.mainWhite,
  //   },
  //   '&.Mui-selected': {
  //     color: theme.palette.primary.main,
  //     backgroundColor: theme.palette.custom.activePeriod,
  //     '&:hover': {
  //       backgroundColor: theme.palette.primary.main,
  //       color: theme.palette.custom.mainWhite,
  //     },
  //   },
  //   ':first-of-type': {
  //     marginRight: '0px',
  //     borderRight: `1px solid ${theme.palette.custom.borderLight}`,
  //   },
  //   ':not(:first-of-type)': {
  //     marginLeft: '0px',
  //   },
  //   '&.MuiToggleButtonGroup-grouped:not(:first-of-type)': {
  //     marginLeft: '0px',
  //   },
  // };

  const buttonData = [
    { label: 'Month', type: 'month' },
    { label: 'Day', type: 'day' },
  ];
  return (
    <ToggleButtonGroup>
      {buttonData.map(({ label, type }) => (
        <ToggleButton
          key={type}
          selected={selectedType === type}
          onClick={() => handleClick(type)}
          sx={buttonStyles}
        >
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default PeriodTypeSelect;

PeriodTypeSelect.propTypes = {
  selectedType: PropTypes.oneOf(['day', 'month']).isRequired,
  onTypeSelect: PropTypes.func.isRequired,
  setActiveDate: PropTypes.func.isRequired,
};
