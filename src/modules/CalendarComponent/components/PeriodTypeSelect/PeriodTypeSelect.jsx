import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import PeriodTypeButton from './PeriodTypeButton/PeriodTypeButton';

const PeriodTypeSelect = ({ selectedType, onTypeSelect, setActiveDate }) => {
  const navigate = useNavigate();

  const handlePeriodType = type => {
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

  return (
    <div className="period-type-select">
      <PeriodTypeButton
        selected={selectedType === 'day'}
        onClick={() => handleClick('day')}
      >
        Day
      </PeriodTypeButton>
      <PeriodTypeButton
        selected={selectedType === 'month'}
        onClick={() => handleClick('month')}
      >
        Month
      </PeriodTypeButton>
    </div>
  );
};

export default PeriodTypeSelect;

PeriodTypeSelect.propTypes = {
  selectedType: PropTypes.oneOf(['day', 'month']).isRequired,
  onTypeSelect: PropTypes.func.isRequired,
  setActiveDate: PropTypes.func.isRequired,
};
