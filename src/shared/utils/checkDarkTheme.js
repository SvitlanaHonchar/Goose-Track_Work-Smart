export const checkDarkTheme = () => {
  const theme = localStorage.getItem('darkModeGooseTrack');
  return theme === 'true';
};
