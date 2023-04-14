import React, { useState, useEffect } from 'react';
import PeriodPaginator from '../PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from '../PeriodTypeSelect/PeriodTypeSelect';
import { getMonthTasks } from 'redux/tasks/tasksOperations';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { selectAllTasks } from 'redux/tasks/tasksSelectors';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const CalendarToolbar = () => {
  const location = useLocation();
  const pathArray = location.pathname.split('/');
  const period = pathArray[2];

  const [periodType, setPeriodType] = useState(period);
  console.log('periodType: ', periodType);
  const [date, setDate] = useState(new Date());
  console.log('date: ', date);

  const handlePeriodTypeSelect = type => {
    setPeriodType(type);
  };
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
        currentType={periodType}
        onTypeSelect={handlePeriodTypeSelect}
        setDate={handleDateChange}
      />
    </div>
  );
};

export default CalendarToolbar;
