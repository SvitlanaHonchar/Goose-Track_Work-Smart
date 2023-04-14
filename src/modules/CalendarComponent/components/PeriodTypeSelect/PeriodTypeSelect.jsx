import React from 'react';
import { TypeButton } from './PeriodTypeSelect.styled';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const PeriodTypeSelect = ({ currentType, onTypeSelect, setDate }) => {
  console.log('currentType: ', currentType);
  const navigate = useNavigate();

  const handlePeriodType = type => {
    console.log(type);
    onTypeSelect(type);
    setDate(new Date());
    navigateToCalendar();
  };

  const navigateToCalendar = () => {
    const urlFormatDate =
      currentType === 'month'
        ? format(new Date(), 'yyyy-MM-dd')
        : format(new Date(), 'yyyy-MM');

    const newType = currentType === 'month' ? 'day' : 'month';

    navigate(`/calendar/${newType}/${urlFormatDate}`);
  };

  const handleClick = type => {
    if (currentType !== type) {
      handlePeriodType(type);
    }
  };

  return (
    <div className="period-type-select">
      <TypeButton
        className={`period-type-button ${
          currentType === 'day' ? 'active' : ''
        }`}
        onClick={() => handleClick('day')}
      >
        Day
      </TypeButton>
      <TypeButton
        className={`period-type-button ${
          currentType === 'month' ? 'active' : ''
        }`}
        onClick={() => handleClick('month')}
      >
        Month
      </TypeButton>
    </div>
  );
};

export default PeriodTypeSelect;
