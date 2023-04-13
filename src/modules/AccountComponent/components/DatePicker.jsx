import { useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';

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

  useEffect(() => {
    const formatedDate = formatDate(date);
    setBirthday(formatedDate);
  }, [date, setBirthday]);

  return (
    <ReactDatePicker
      dateFormat={'dd-mm-yyyy'}
      selected={date}
      onChange={setDate}
    />
  );
};
