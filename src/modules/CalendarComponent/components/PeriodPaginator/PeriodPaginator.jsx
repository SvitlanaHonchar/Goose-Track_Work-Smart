import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { addMonths, addDays, format } from 'date-fns';
import { Box, Typography, Button, List, ListItem } from '@mui/material';
import sprite from 'shared/icons/sprite.svg';
import { styles } from './PeriodPaginatorStyles';

const PeriodPaginator = ({ date, period, onDateChange }) => {
  const navigate = useNavigate();

  const updateDate = amount => {
    const newDate =
      period === 'month' ? addMonths(date, amount) : addDays(date, amount);
    onDateChange(newDate);
    const url = createCalendarUrl(newDate, period);
    navigate(url);
  };

  const createCalendarUrl = (newDate, period) => {
    return `/calendar/${period}/${format(
      newDate,
      period === 'month' ? 'yyyy-MM' : 'yyyy-MM-dd'
    )}`;
  };

  const formattedDate =
    period === 'month'
      ? `${format(date, 'MMMM yyyy').toUpperCase()}`
      : `${format(date, ' d MMM yyyy ').toUpperCase()}`;

  return (
    <Box
      sx={{
        display: 'flex',
        columnGap: { md: '8px' },
        justifyContent: { xs: 'space-between', md: 'flex-start' },
      }}
    >
      <Typography variant="text" component="span" sx={styles.text}>
        {formattedDate}
      </Typography>

      <List disablePadding sx={{ display: 'flex' }}>
        <ListItem disablePadding>
          <Button
            sx={{
              ...styles.navBtn,
              borderTopRightRadius: '0px',
              borderBottomRightRadius: '0px',
            }}
            variant="text"
            onClick={() => updateDate(-1)}
          >
            <svg>
              <use xlinkHref={`${sprite}#arrowShortLeft`} />
            </svg>
          </Button>
        </ListItem>
        <ListItem disablePadding>
          <Button
            sx={{
              ...styles.navBtn,
              borderTopLeftRadius: '0px',
              borderBottomLeftRadius: '0px',
              borderLeftWidth: '0px',
            }}
            variant="text"
            onClick={() => updateDate(1)}
          >
            <svg>
              <use xlinkHref={`${sprite}#arrowShortRight`} />
            </svg>
          </Button>
        </ListItem>
      </List>
    </Box>
  );
};

export default PeriodPaginator;

PeriodPaginator.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  period: PropTypes.oneOf(['month', 'day']).isRequired,
  onDateChange: PropTypes.func.isRequired,
};
