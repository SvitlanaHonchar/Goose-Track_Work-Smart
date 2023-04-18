import { Link } from "react-router-dom";
import styled from "styled-components";
const mainBlue='#3E85F3';
const mainWhite = 'white';
export const StartPageHeaderStyled = styled.header`
font-family: 'Coolvetica';
height: 812px;
@media screen and (min-width: 768px)and (max-width:1439px) {
    height:1024px;

}
@media screen and (min-width: 1440px) {
    height:770px;

}
background-color:${mainBlue} ;
nav {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    row-gap: 208px;
    align-items: center;
    @media screen and (min-width: 768px) {
        flex-direction: row-reverse;
        justify-content: center;
        column-gap: 24px;
        margin-top: 40px;

}
}
.box {
  width: 142px;
  margin-left:auto;
  margin-right:auto;
padding-top: 232px;
@media screen and (min-width: 768px) {
    width: 150px;

}
@media screen and (min-width: 768px)and (max-width:1439px) {
    padding-top: 321px;

}
@media screen and (min-width: 1440px) {
    padding-top: 187px;

}
}
img{
    display: block;
    width: 100%;
    height: 100%;
}
h1{
    font-weight: 400;
    margin-top: 2px;
    color: ${mainWhite};
    font-size: 44px;
    line-height: 1.09 ;
    text-align: center;
    margin-bottom: 0;
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
    @media screen and (min-width: 768px) {
        margin-top: 0px;
        font-size: 120px;
        line-height: 1.25;

}
    
}
span{
    
    font-style: italic;
}
`
export const StartPageLink=styled(Link)` 
 font-family: "Inter";
 cursor: pointer;
 &.start-page--login{
    font-weight: 600;
    display: flex;
    column-gap: 8.25px; 
    justify-content: center;
    align-items: center;
    width:131px;
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
    border-radius: 16px;
    background-color:${mainWhite};
    color: ${mainBlue};
    text-decoration: none;
    font-size: 14px;
    line-height: 1.29;
    padding-top:14px;
    padding-bottom:14px;
    opacity: 1;
    &:hover, &:focus{
        opacity: 0.8;
    }
    & svg{
        stroke:${mainBlue};

    }
}
&.start-page--register{
        color:${mainWhite};
        font-size: 12px;
        line-height: 1.16;
        text-decoration: underline;
           @media screen and (min-width: 768px) {
        font-size: 14px;
        line-height: 1.29;
        }
        &:hover, &:focus{
        opacity: 0.8;
    }
    }
`