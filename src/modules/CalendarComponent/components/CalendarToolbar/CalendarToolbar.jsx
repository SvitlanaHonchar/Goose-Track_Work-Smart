import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { format, getYear, getMonth } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PeriodPaginator from '../PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from '../PeriodTypeSelect/PeriodTypeSelect';
import { getMonthTasks } from 'redux/tasks/tasksOperations';
import { selectAllTasks } from 'redux/tasks/tasksSelectors';
import usePeriodTypeFromPath from 'shared/hooks/usePeriodTypeFromPath';
import useSelectedPeriodType from 'shared/hooks/useSelectedPeriodType';

const CalendarToolbar = () => {
  const [date, setDate] = useState(new Date());
  const periodType = usePeriodTypeFromPath();
  const [selectedPeriodType, handlePeriodTypeSelect] =
    useSelectedPeriodType(periodType);

  console.log('date: ', date);
  const navigate = useNavigate();

  const handleDateChange = useCallback(
    d => {
      setDate(d);
      const url = createCalendarUrl(d, periodType);
      navigate(url);
    },
    [periodType, navigate]
  );

  const createCalendarUrl = (newDate, period) => {
    return `/calendar/${period}/${format(
      newDate,
      period === 'month' ? 'yyyy-MM' : 'yyyy-MM-dd'
    )}`;
  };

  const setActiveDate = () => {
    setDate(new Date());
  };

  const dispatch = useDispatch();
  const tasksForSelectedMonth = useSelector(selectAllTasks);
  const formattedDate = useMemo(() => format(date, 'yyyy-MM'), [date]);
  console.log('tasksForSelectedMonth : ', tasksForSelectedMonth);
  const hasMatchingDate = useMemo(() => {
    return (
      tasksForSelectedMonth?.some(task =>
        task.date?.startsWith(formattedDate)
      ) || false
    );
  }, [formattedDate, tasksForSelectedMonth]);

  useEffect(() => {
    if (!hasMatchingDate) {
      dispatch(
        getMonthTasks({
          year: getYear(date),
          month: getMonth(date) + 1,
        })
      );
    }
  }, [dispatch, date, hasMatchingDate]);

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
        setActiveDate={setActiveDate}
      />
    </div>
  );
};

export default CalendarToolbar;
