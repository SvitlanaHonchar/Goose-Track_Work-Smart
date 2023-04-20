import React from 'react';
import { StyledFooter } from './Footer.styled';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <p>
        &copy; {year} Created by{' '}
        <a
          href="https://github.com/SvitlanaHonchar/Goose-Track_Work-Smart/tree/dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          'Work Smart not Hard'
        </a>{' '}
        team
      </p>
    </StyledFooter>
  );
};

export default Footer;
