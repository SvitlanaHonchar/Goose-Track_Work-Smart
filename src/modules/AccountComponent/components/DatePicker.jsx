<<<<<<< HEAD
import { useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
=======
import { useState, useEffect, useRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import { IconButton, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e

const formatDate = date => {
  const y = date.getFullYear();
  const m = date.getMonth();
  const d = date.getDate();

  return `${y}-${(m + 1).toString().padStart(2, '0')}-${d
    .toString()
    .padStart(2, '0')}`;
};

export const DatePicker = ({ setBirthday }) => {
  const birthday = useSelector(state => state.auth.user.birthday);
  const [date, setDate] = useState(
    () => (birthday && new Date(birthday)) || new Date()
  );
<<<<<<< HEAD
=======
  const [open, setOpen] = useState(false);
  const datePickerRef = useRef(null);
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e

  useEffect(() => {
    const formatedDate = formatDate(date);
    setBirthday(formatedDate);
  }, [date, setBirthday]);

<<<<<<< HEAD
=======
  const handleIconClick = () => {
    setOpen(true);
    datePickerRef.current.setFocus();
  };

  const handleClose = () => {
    setOpen(false);
  };

>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
  return (
    <ReactDatePicker
      dateFormat={'dd-mm-yyyy'}
      selected={date}
      onChange={setDate}
<<<<<<< HEAD
=======
      open={open}
      onClose={handleClose}
      ref={datePickerRef}
      customInput={
        <TextField
          fullWidth
          size="small"
          color="primary"
          InputProps={{
            onBlur: handleClose,
            endAdornment: (
              <IconButton size="small" onClick={handleIconClick}>
                <ExpandMoreIcon />
              </IconButton>
            ),
          }}
        />
      }
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
    />
  );
};
