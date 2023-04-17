import theme from 'shared/theme';
import styled from 'styled-components';

export const BoxWrapper = styled.li`
  @media screen and (max-width: 374px) {
    max-width: 300px;
    width: 100%;
  }

  width: 330px;
  height: 108px;
  width: 100%;

  border-radius: 8px;
  border: 1px solid ${theme.palette.grey.light};
  background-color: ${theme.palette.grey[200]};
  padding: 14px 12px 18px 15px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    height: 112px;
    padding: 14px 14px 18px 14px;
    margin-bottom: 32px;
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
  @media screen and (max-width: 375px) {
    flex-direction: column;
    justify-content: center;
  }

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const UserBar = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  & img {
    width: 32px;
    height: 32px;
  }
`;

export const Priority = styled.p`
  color: white;
  text-align: center;
  align-items: center;
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
