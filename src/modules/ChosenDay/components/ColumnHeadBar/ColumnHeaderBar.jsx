import styled from 'styled-components';

export const ColumnHeadBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;

export const Title = styled.h3`
  font-size: 18px;
  line-height: 20px;
  color: #111111;
  font-weight: 700;
`;

export const Button = styled.button`
  background: transparent;
  border: transparent;
  cursor: pointer;

  & svg {
    fill: none;
    stroke: black;
    width: 18.33px;
    height: 18.33px;
  }
`;
