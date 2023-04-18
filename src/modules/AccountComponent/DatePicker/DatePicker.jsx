import { useState, useEffect, useRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import { IconButton, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { DatePickerWrapper } from './DatePicker.styled';

const formatDate = date => {
  const y = date.getFullYear();
  const m = date.getMonth();
  const d = date.getDate();

  return `${y}-${(m + 1).toString().padStart(2, '0')}-${d
    .toString()
    .padStart(2, '0')}`;
};
const isValidDate = dateString => {
  const parsedDate = new Date(dateString);
  return !isNaN(parsedDate.getTime());
};

export const DatePicker = ({ setBirthday }) => {
  const birthday = useSelector(state => state.auth.user.birthday);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const datePickerRef = useRef(null);

  useEffect(() => {
    if (birthday && isValidDate(birthday)) {
      setDate(new Date(birthday));
    } else {
      setDate(new Date());
    }
  }, [birthday]);

  useEffect(() => {
    const formatedDate = formatDate(date);
    setBirthday(formatedDate);
  }, [date, setBirthday]);

  const handleIconClick = () => {
    setOpen(!open);
    datePickerRef.current.setFocus();
  };
  const handleChange = value => {
    setDate(value);
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <DatePickerWrapper>
      <ReactDatePicker
        dateFormat={'yyyy-MM-dd'}
        selected={date}
        onChange={handleChange}
        open={open}
        ref={datePickerRef}
        calendarClassName="calendar"
        // headerClassName={style.header}
        // dayClassName={() => style.day}
        customInput={
          <TextField
            name="birthday"
            fullWidth
            size="small"
            InputProps={{
              onBlur: handleClose,
              endAdornment: (
                <IconButton size="small" onClick={handleIconClick}>
                  {!open ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                </IconButton>
              ),
            }}
          />
        }
      />
    </DatePickerWrapper>
  );
};
