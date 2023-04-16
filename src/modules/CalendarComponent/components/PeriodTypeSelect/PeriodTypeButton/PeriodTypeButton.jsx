import React from 'react';
import PropTypes from 'prop-types';
import { TypeButton } from '../PeriodTypeSelect.styled';

const PeriodTypeButton = ({ selected, onClick, children }) => (
  <TypeButton
    className={`period-type-button ${selected ? 'active' : ''}`}
    onClick={onClick}
  >
    {children}
  </TypeButton>
);

export default PeriodTypeButton;

PeriodTypeButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
