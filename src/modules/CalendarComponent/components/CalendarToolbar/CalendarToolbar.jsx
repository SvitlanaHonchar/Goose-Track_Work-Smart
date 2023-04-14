import React, { useState, useEffect } from 'react';
import PeriodPaginator from '../PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from '../PeriodTypeSelect/PeriodTypeSelect';
import { getMonthTasks } from 'redux/tasks/tasksOperations';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { selectAllTasks } from 'redux/tasks/tasksSelectors';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const CalendarToolbar = ({ period }) => {
  const [periodType, setPeriodType] = useState('month');
  const [date, setDate] = useState(new Date());
  console.log('date: ', date);
  // const [tasks, setTasks] = useState(null);
  // const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const tasks = useSelector(selectAllTasks);
  const { currentMonth } = useParams();
  console.log('currentMonth: ', currentMonth);
  const tasksAll = useSelector(selectAllTasks);
  const isLogged = useSelector(selectIsLoggedIn);
  // console.log('isLogged: ', isLogged);

  // useEffect(() => {
  //   if (!isLogged) return;
  //   dispatch(getMonthTasks({ year: 2023, month: 3 }));
  // }, [dispatch, periodType, date]);

  const handlePeriodTypeSelect = type => {
    setPeriodType(type);
  };
  const handleDateChange = date => {
    setDate(date);
  };

  return (
    <div>
      <PeriodPaginator
        date={date}
        period={periodType}
        onDateChange={handleDateChange}
      />
      <PeriodTypeSelect
        selectedType={periodType}
        onTypeSelect={handlePeriodTypeSelect}
      />
    </div>
  );
};

export default CalendarToolbar;
