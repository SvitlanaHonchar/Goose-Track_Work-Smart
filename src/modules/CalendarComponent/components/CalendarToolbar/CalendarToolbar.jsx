import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import PeriodPaginator from '../PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from '../PeriodTypeSelect/PeriodTypeSelect';
import usePeriodTypeFromPath from 'shared/hooks/usePeriodTypeFromPath';

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
