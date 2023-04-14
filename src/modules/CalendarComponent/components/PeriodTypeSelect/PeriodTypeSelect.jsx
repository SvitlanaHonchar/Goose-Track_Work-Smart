import React from 'react';
import { TypeButton } from './PeriodTypeSelect.styled';

const PeriodTypeSelect = ({ selectedType, onTypeSelect }) => {
  const handlePeriodType = type => {
    console.log(type);
    onTypeSelect(type);
  };

  const handleClick = type => {
    if (selectedType !== type) {
      handlePeriodType(type);
    }
  };

  return (
    <div className="period-type-select">
      <TypeButton
        className={`period-type-button ${
          selectedType === 'day' ? 'active' : ''
        }`}
        onClick={() => handleClick('day')}
      >
        Day
      </TypeButton>
      <TypeButton
        className={`period-type-button ${
          selectedType === 'month' ? 'active' : ''
        }`}
        onClick={() => handleClick('month')}
      >
        Month
      </TypeButton>
    </div>
  );
};

export default PeriodTypeSelect;
