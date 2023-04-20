import React from 'react';
import sprite from '../../../../shared/icons/sprite.svg';
import { ColumnHeadBarWrapper } from './ColumnHeaderBar';

const ColumnHeadBar = ({ title, openTaskModal, checkCurrentDate }) => {
  return (
    <>
      <ColumnHeadBarWrapper className="columnHeadBar">
        <p>{title}</p>
        <button
          onClick={openTaskModal}
          className={checkCurrentDate ? '' : 'disabled'}
        >
          <svg>
            <use href={sprite + '#plusInCircle'} />
          </svg>
        </button>
      </ColumnHeadBarWrapper>
    </>
  );
};

export default ColumnHeadBar;
