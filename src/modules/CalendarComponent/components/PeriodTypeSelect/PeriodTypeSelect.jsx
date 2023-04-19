import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { buttonStyles } from './PeriodTypeSelectStyles';
import usePeriodTypeFromPath from 'shared/hooks/usePeriodTypeFromPath';

const PeriodTypeSelect = ({ setActiveDate }) => {
  const periodType = usePeriodTypeFromPath();
  const [period, setPeriod] = useState();

  useEffect(() => {
    setPeriod(periodType);
  }, [periodType]);

  const handleChange = (event, newType) => {
    if (newType === null) return;
    setPeriod(newType);

    const currentDate = new Date();
    navigateToCalendarDate(newType, currentDate);
    setActiveDate(currentDate);
  };

  const navigate = useNavigate();

  const getUrlFormatDate = (type, date) => {
    const urlFormatDate =
      type === 'month' ? format(date, 'yyyy-MM') : format(date, 'yyyy-MM-dd');
    return `/calendar/${type}/${urlFormatDate}`;
  };

  const navigateToCalendarDate = (type, date) => {
    const url = getUrlFormatDate(type, date);
    navigate(url);
  };

  return (
    <ToggleButtonGroup
      value={period}
      exclusive
      onChange={handleChange}
      aria-label="Type of calendar period"
    >
      <ToggleButton value="month" aria-label="month" sx={buttonStyles}>
        Month
      </ToggleButton>
      <ToggleButton value="day" aria-label="day" sx={buttonStyles}>
        Day
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default PeriodTypeSelect;

PeriodTypeSelect.propTypes = {
  setActiveDate: PropTypes.func.isRequired,
};
