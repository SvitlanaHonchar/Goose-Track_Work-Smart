import theme from 'shared/theme';
const commonButtonStyles = {
  width: { xs: '76px', md: '82px' },
  height: { xs: '34px', md: '34px' },
  padding: { xs: '8px 16px', md: '8px 16px' },
  borderRadius: '8px',
  border: 'none',
  fontSize: { xs: '14px', md: '16px' },
  lineHeight: { xs: '1.29', md: '1.12' },
  fontWeight: '500',
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.light,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.custom.mainWhite,
  },
  '&.Mui-selected': {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.custom.activePeriod,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.custom.mainWhite,
    },
  },
};

export const buttonStyles = {
  ...commonButtonStyles,
  ':first-of-type': {
    marginRight: '0px',
    borderRight: `1px solid ${theme.palette.custom.borderLight}`,
  },
  ':not(:first-of-type)': {
    marginLeft: '0px',
  },
  '&.MuiToggleButtonGroup-grouped:not(:first-of-type)': {
    marginLeft: '0px',
  },
};
