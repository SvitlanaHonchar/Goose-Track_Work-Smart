import React, { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import capitalizeString from 'shared/utils/capitalizeString';
import theme from 'shared/theme';
import { TASKS_PRIORITY } from 'shared/constants';

const radioStyles = {
  low: {
    color: theme.palette.custom.lightBlue,
    iconColor: 'rgba(114, 194, 248, 0.5)',
  },
  medium: {
    color: theme.palette.warning.main,
    iconColor: 'rgba(243, 178, 73, 0.5)',
  },
  high: {
    color: theme.palette.error.main,
    iconColor: 'rgba(234, 61, 101, 0.5)',
  },
};

const RadioIcon = ({ color, borderColor }) => (
  <span
    style={{
      width: '14px',
      height: '14px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `1.3px solid ${borderColor}`,
    }}
  >
    <span
      style={{
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: color,
      }}
    />
  </span>
);

export const PriorityList = ({ defaultValue, handleChange }) => {
  const [priority, setPriority] = useState(defaultValue);
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" className="sr-only">
        Priority
      </FormLabel>
      <RadioGroup
        row
        value={priority}
        onChange={event => {
          setPriority(event.target.value);
          handleChange(event.target.value);
        }}
        sx={{ columnGap: '16px' }}
      >
        {[TASKS_PRIORITY.LOW, TASKS_PRIORITY.MEDIUM, TASKS_PRIORITY.HIGH].map(
          (value, index) => (
            <FormControlLabel
              key={index}
              value={value}
              control={
                <Radio
                  value={value}
                  icon={
                    <RadioIcon
                      color={radioStyles[value].color}
                      borderColor="#ffffff"
                    />
                  }
                  checkedIcon={
                    <RadioIcon
                      color={radioStyles[value].color}
                      borderColor={radioStyles[value].iconColor}
                    />
                  }
                  sx={{
                    padding: '0px',
                    marginRight: '6px',
                  }}
                />
              }
              label={capitalizeString(value)}
              sx={{
                marginLeft: '0px',
                marginRight: '0px',
                '& .MuiTypography-root': {
                  fontWeight: 600,
                  fontSize: '12px',
                  lineHeight: '1.17',
                  color: '#616161',
                },
              }}
            />
          )
        )}
      </RadioGroup>
    </FormControl>
  );
};
