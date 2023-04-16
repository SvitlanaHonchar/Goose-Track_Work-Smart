import theme from 'shared/theme';
export const styles = {
  text: {
    minWidth: '150px',
    padding: { xs: '6px 12px', md: '8px 12px' },
    borderRadius: '8px',
    fontSize: { md: '16px' },
    lineHeight: { xs: '1.29', md: '1.12' },
    textAlign: 'center',
    color: theme.palette.custom.mainWhite,
    backgroundColor: theme.palette.primary.main,
  },
  navBtn: {
    minWidth: '0px',
    height: { xs: '30px', md: '34px' },
    padding: { xs: '7px 10px', md: '8px 10px' },
    border: `1px solid ${theme.palette.custom.pagBorder}`,
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      borderColor: 'transparent',
      svg: {
        stroke: theme.palette.custom.mainWhite,
      },
    },
    svg: {
      stroke: theme.palette.grey[600],
      width: { xs: '16px', md: '18px' },
      height: { xs: '16px', md: '18px' },
    },
  },
};
