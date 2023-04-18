import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import PeriodPaginator from '../PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from '../PeriodTypeSelect/PeriodTypeSelect';
import { getMonthTasks } from 'redux/tasks/tasksOperations';
import { selectAllTasks } from 'redux/tasks/tasksSelectors';
import usePeriodTypeFromPath from 'shared/hooks/usePeriodTypeFromPath';
import { showError } from 'shared/utils/notifications';

const CalendarToolbar = () => {
  const periodType = usePeriodTypeFromPath();
  const { currentDay } = useParams();
  const { currentMonth } = useParams();
  const dateFromUrl = periodType === 'month' ? currentMonth : currentDay;

  const convertMonthDateStringToDateObject = str => {
    const [year, month] = str.split('-');
    const day = new Date().getDate();
    const date = new Date(`${year}-${month}-${day}`);
    return date;
  };

  const convertDayDateStringToDateObject = str => {
    return new Date(str);
  };

  const dateObject = useMemo(
    () =>
      periodType === 'month'
        ? convertMonthDateStringToDateObject(dateFromUrl)
        : convertDayDateStringToDateObject(dateFromUrl),
    [dateFromUrl, periodType]
  );

  const [date, setDate] = useState(dateObject);

  const setActiveDate = () => setDate(new Date());
  useEffect(() => {
    setDate(dateObject);
  }, [dateObject]);

  const dispatch = useDispatch();
  const tasksForSelectedMonth = useSelector(selectAllTasks);
  const hasMatchingDate = tasksForSelectedMonth?.some(task =>
    task.date?.startsWith(dateFromUrl)
  );

  useEffect(() => {
    const fetchData = async () => {
      if (!hasMatchingDate) {
        try {
          const result = await dispatch(
            getMonthTasks({
              year: dateObject.getFullYear().toString(),
              month: dateObject.getMonth() + 1,
            })
          );
          if (result.error) {
            showError();
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, dateObject]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        rowGap: { xs: '18px', md: '0' },
        justifyContent: { xs: 'flex-start', md: 'space-between' },
        marginBottom: { xs: '24px', lg: '32px' },
      }}
    >
      <PeriodPaginator date={date} period={periodType} onDateChange={setDate} />
      <PeriodTypeSelect setActiveDate={setActiveDate} />
    </Box>
  );
};
export default CalendarToolbar;
