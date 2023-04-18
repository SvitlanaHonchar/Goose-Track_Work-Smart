import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import PeriodPaginator from '../PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from '../PeriodTypeSelect/PeriodTypeSelect';
import { getMonthTasks } from 'redux/tasks/tasksOperations';
import { selectAllTasks } from 'redux/tasks/tasksSelectors';
import usePeriodTypeFromPath from 'shared/hooks/usePeriodTypeFromPath';
import { showError } from 'shared/utils/notifications';
import {
  selectIsLoggedIn,
  selectIsUserLoading,
} from 'redux/auth/authSelectors';

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

  // console.log('ОБЭКТ ДАТА: у тулбарі: ', dateObject);

  const [date, setDate] = useState(dateObject);

  // console.log('У СТЕЙТЫ date: ', date);

  const setActiveDate = () => setDate(new Date());
  useEffect(() => {
    setDate(dateObject);
  }, [dateObject]);

  // const dispatch = useDispatch();
  // const tasksForSelectedMonth = useSelector(selectAllTasks);

  // const hasMatchingDate =
  //   tasksForSelectedMonth?.some(task => task.date?.startsWith(dateFromUrl)) ||
  //   false;

  // const isUserLoading = useSelector(selectIsUserLoading);
  // const isLogged = useSelector(selectIsLoggedIn);

  // useEffect(() => {
  //   if (
  //     !hasMatchingDate &&
  //     isLogged &&
  //     !isUserLoading &&
  //     tasksForSelectedMonth !== null
  //   ) {
  //     dispatch(
  //       getMonthTasks({
  //         year: getYear(date),
  //         month: getMonth(date) + 1,
  //       })
  //     );
  //   }
  // }, [dispatch, hasMatchingDate, date, isLogged, isUserLoading]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        rowGap: { xs: '18px', md: '0' },
        justifyContent: { xs: 'flex-start', md: 'space-between' },
      }}
    >
      <PeriodPaginator date={date} period={periodType} onDateChange={setDate} />
      <PeriodTypeSelect setActiveDate={setActiveDate} />
    </Box>
  );
};
export default CalendarToolbar;
