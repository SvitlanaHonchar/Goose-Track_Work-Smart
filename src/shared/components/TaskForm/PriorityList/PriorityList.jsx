import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Field } from 'formik';
import capitalizeString from 'shared/utils/capitalizeString';
import theme from 'shared/theme';

const radioStyles = {
  low: {
    color: theme.palette.primary.light,
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
      width: '12px',
      height: '12px',
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

export const PriorityList = ({ values, handleChange }) => {
  return (
    <FormControl>
      <FormLabel className="sr-only">Priority</FormLabel>
      <Field name="priority">
        {({ field }) => (
          <RadioGroup
            {...field}
            value={values.priority}
            onChange={handleChange}
            row={true}
            sx={{ columnGap: '16px' }}
          >
            {['low', 'medium', 'high'].map((value, index) => (
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
                      '& .MuiRadio-root': {
                        padding: '0px',
                        marginRight: '6px',
                      },
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
            ))}
          </RadioGroup>
        )}
      </Field>
    </FormControl>
  );
};
