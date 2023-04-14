import { StartPageHeaderStyled,StartPageLink } from "./StartPageHeader.styled";
import goose1 from '../../../shared/images/startPage/desktop/desktop_goose_startPage.png';
import goose2 from '../../../shared/images/startPage/desktop/desktop_goose_startPage@2x.png';
import sprite from '../../../shared/icons/sprite.svg';
export function StartPageHeader(){
    return (
        <StartPageHeaderStyled>
            <div className="box">
                <img src={goose1}  srcSet={`${goose1} 1x, ${goose2} 2x`} alt="goose" title="goose" />
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