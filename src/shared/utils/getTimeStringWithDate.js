import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

const getTimeStringWithDate = (timeString, dateString) => {
  const [dateOnly] = dateString.split('T');
  const parsedTime = dayjs.utc(
    `${dateOnly}T${timeString.replace('-', ':')}:00.000Z`
  );
  return parsedTime.format('YYYY-MM-DDTHH:mm');
};

export default getTimeStringWithDate;
