import React from 'react';
import sprite from '../../../../shared/icons/sprite.svg';
import { Button, ColumnHeadBarWrapper, Title } from './ColumnHeaderBar';

const ColumnHeadBar = ({ title, openTaskModal }) => {
  return (
    <>
      <ColumnHeadBarWrapper>
        <Title>{title}</Title>
        <Button onClick={openTaskModal}>
          <svg>
            <use href={sprite + '#plusInCircle'} />
          </svg>
        </Button>
      </ColumnHeadBarWrapper>
    </>
  );
};

export default ColumnHeadBar;
