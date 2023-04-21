import theme from 'shared/theme';
import styled from 'styled-components';

export const BoxWrapper = styled.li`
  height: 108px;
  border-radius: 8px;
  border: 1px solid ${theme.palette.grey.light};
  background-color: ${theme.palette.grey[200]};
  padding: 14px 14px 18px 14px;
  margin-bottom: 14px;
  overflow: hidden;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    height: 112px;
    margin-bottom: 18px;
  }
`;

export const Title = styled.div`
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  & p {
    @media screen and (max-width: 375px) {
      width: auto;
    }
    color: ${theme.palette.grey.body};
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 240px;
    white-space: nowrap;
  }
`;

export const InfoBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserBar = styled.div`
  display: flex;
  gap: 8px;

  & img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1.8px solid ${theme.palette.primary.main};
  }
`;

export const Priority = styled.p`
  align-self: flex-end;
  color: ${theme.palette.grey[200]};
  padding: 4px 12px;

  border-radius: 4px;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  background: #72c2f8;

  &::first-letter {
    text-transform: capitalize;
  }

  &.low {
    background-color: ${theme.palette.custom.lightBlue};
  }

  &.medium {
    background-color: ${theme.palette.warning.main};
  }

  &.high {
    background-color: ${theme.palette.error.main};
  }
`;
