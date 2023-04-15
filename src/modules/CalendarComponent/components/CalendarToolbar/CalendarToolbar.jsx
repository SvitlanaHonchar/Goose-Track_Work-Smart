import React, { useState, useEffect, useMemo } from 'react';
import { format, getYear, getMonth } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
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

  const handleDateChange = date => setDate(date);
  const dispatch = useDispatch();
  const tasksForSelectedMonth = useSelector(selectAllTasks);
  const formattedDate = useMemo(() => format(date, 'yyyy-MM'), [date]);
  console.log('tasksForSelectedMonth : ', tasksForSelectedMonth);
  const hasMatchingDate = useMemo(() => {
    if (!tasksForSelectedMonth) return false;
    return tasksForSelectedMonth.some(task =>
      task.date.startsWith(formattedDate)
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
        setActiveDate={handleDateChange}
      />
    </div>
  );
};

export default CalendarToolbar;
