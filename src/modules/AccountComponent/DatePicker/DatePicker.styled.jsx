import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
  & .react-datepicker__day {
    background-color: #3e85f3;
    color: #fff;
  }

  & .react-datepicker {
    background-color: #3e85f3;
    border-radius: 16px;
    color: #fff;
  }

  & .react-datepicker__header {
    background-color: #3e85f3;
    border-radius: 16px 16px 0 0;
    color: #fff;
  }

  & .react-datepicker__day-name {
    color: #fff;
  }

  & .react-datepicker__current-month {
    color: #fff;
  }

  & .react-datepicker__day--selected {
    background-color: #fff;
    border-radius: 50px;
    color: #3e85f3;
  }
`;
