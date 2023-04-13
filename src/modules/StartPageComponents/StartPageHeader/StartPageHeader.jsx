import { StartPageHeaderStyled,StartPageLink } from "./StartPageHeader.styled";
import goose from '../../../shared/image/GooseStartPage/goose.png'
import sprite from '../../../shared/icons/sprite.svg';
export function StartPageHeader(){
    return (
        <StartPageHeaderStyled>
            <div className="box">
                <img src={goose} alt="goose" title="goose" />
            </div>
            <h1>G<span>oo</span>seTrack</h1>
            <nav>
            <StartPageLink className="start-page--login" to ='login'>Log in
            <svg height="13.5" width="13.5">
                <use href={sprite+'#loginStartPage'}></use>
              </svg>
            </StartPageLink>
            <StartPageLink className="start-page--register" to ='register'>Sign up</StartPageLink>
            </nav>
        </StartPageHeaderStyled>
    );
}