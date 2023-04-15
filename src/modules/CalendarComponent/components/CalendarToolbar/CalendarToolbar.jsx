import React, { useState, useEffect, useMemo } from 'react';
import { format, getYear, getMonth } from 'date-fns';
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
  const { currentMonth } = useParams();

  const periodType = usePeriodTypeFromPath();
  const [selectedPeriodType, handlePeriodTypeSelect] =
    useSelectedPeriodType(periodType);
  const [date, setDate] = useState(new Date());
  console.log('date: ', date);

  const handleDateChange = date => {
    setDate(date);
  };

  const formattedDate = format(date, 'yyyy-MM');
  const year = getYear(date);
  console.log('year: ', year);
  const month = getMonth(date) + 1;
  console.log('month: ', month);

  const dispatch = useDispatch();
  const tasksForSelectedMonth = useSelector(selectAllTasks);
  console.log('tasksForSelectedMonth : ', tasksForSelectedMonth);

  useEffect(() => {
    if (!tasksForSelectedMonth) return;
    if (tasksForSelectedMonth.length === 0) {
      console.log('no tasks for this date');
    }
    const hasMatchingDate = tasksForSelectedMonth.some(task =>
      task.date.startsWith(formattedDate)
    );
    console.log('hasMatchingDate: ', hasMatchingDate);
    if (!hasMatchingDate) {
      console.log('i need to make new request');
      dispatch(
        getMonthTasks({
          year: year,
          month: month,
        })
      );
    }
  }, [tasksForSelectedMonth, formattedDate, dispatch, year, month]);

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
