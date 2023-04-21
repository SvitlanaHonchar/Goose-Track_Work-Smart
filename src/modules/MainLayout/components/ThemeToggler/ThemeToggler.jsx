import React, { useEffect, useState } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';
import { ButtonStyled } from './ThemeToggler.styled';

const ThemeToggler = () => {
  const [darkMode, setMode] = useState([]);
  const app = document.querySelector('.app');

  useEffect(() => {
    const savedMode = localStorage.getItem('darkModeGooseTrack');
    if (!savedMode) {
      setMode(localStorage.setItem('darkModeGooseTrack', 'false'));
    }
    setMode(localStorage.getItem('darkModeGooseTrack') ?? 'false');
    if (darkMode === 'true') {
      app.classList.add('darkMode');
    }
    if (darkMode === 'false') {
      app.classList.remove('darkMode');
    }
  }, [darkMode, app]);

  function onThemeTogglerButtonClick() {
    const savedTheme = localStorage.getItem('darkModeGooseTrack');
    localStorage.setItem(
      'darkModeGooseTrack',
      savedTheme === 'false' ? 'true' : 'false'
    );
    setMode(!savedTheme);
  }

  return (
    <ButtonStyled
      type="button"
      className="themeToggler"
      onClick={onThemeTogglerButtonClick}
    >
      {darkMode === 'false' ? (
        <MdOutlineDarkMode className="themeToggler__icon" />
      ) : (
        <MdOutlineLightMode className="themeToggler__icon" />
      )}
    </ButtonStyled>
  );
};

export default ThemeToggler;
