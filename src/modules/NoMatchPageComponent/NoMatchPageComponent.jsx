import { StyledNoPageComponent } from './NoMatchPageComponent.styled';

import theme from 'shared/theme';

const NoMatchPageComponent = ({ children }) => {
  return (
    <StyledNoPageComponent
      sx={{ backgroundColor: theme.palette.secondary.main }}
    >
      <div className="ImageContainer">
        <div className="Goose">{children}</div>
        <div className="MessegeContainer">
          <p className="Messege">
            Oops, this is <span className="MessegeFocus">not the page</span> you
            are looking for. Try again.
          </p>
          <div className="MessegeCloud">{children}</div>
        </div>
      </div>
    </StyledNoPageComponent>
  );
};

export default NoMatchPageComponent;
