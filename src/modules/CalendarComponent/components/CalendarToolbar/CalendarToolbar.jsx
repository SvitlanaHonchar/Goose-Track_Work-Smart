import React, { useState, useEffect } from 'react';
import PeriodPaginator from '../PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from '../PeriodTypeSelect/PeriodTypeSelect';
import { getMonthTasks } from 'redux/tasks/tasksOperations';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { selectAllTasks } from 'redux/tasks/tasksSelectors';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import usePeriodTypeFromPath from 'shared/hooks/usePeriodTypeFromPath';
import useSelectedPeriodType from 'shared/hooks/useSelectedPeriodType';

const CalendarToolbar = () => {
  const periodType = usePeriodTypeFromPath();
  const [selectedPeriodType, handlePeriodTypeSelect] =
    useSelectedPeriodType(periodType);

  const [date, setDate] = useState(new Date());
  console.log('date: ', date);

  const handleDateChange = date => {
    setDate(date);
  };
  const dispatch = useDispatch();

  return (
    <div>
      <PeriodPaginator
        date={date}
        period={periodType}
        onDateChange={handleDateChange}
      />
      <PeriodTypeSelect
        selectedType={selectedPeriodType}
        onTypeSelect={handlePeriodTypeSelect}
        setActiveDate={handleDateChange}
      />
    </div>
  );
};

export default CalendarToolbar;
