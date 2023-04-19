import { StyledNoPageComponent } from './NoMatchPageComponent.styled';

import theme from 'shared/theme';

export const NoMatchPageComponent = ({ children }) => {
  return (
    <StyledNoPageComponent
      sx={{ backgroundColor: theme.palette.secondary.main }}
    >
      <div className="ImageContainer">
        <div className="Goose">{children}</div>
        <div className="MessegeContainer">
          <p className="Messege">
            Oops, this is <br />
            <span className="MessegeFocus">an ERROR</span>. Please try once
            more.
          </p>
          <div className="MessegeCloud">{children}</div>
        </div>
      </div>
    </StyledNoPageComponent>
  );
};
