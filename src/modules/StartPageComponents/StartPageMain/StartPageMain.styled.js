import styled from "styled-components";
import sprite from '../../../shared/icons/sprite.svg'
const mainBlue='#3E85F3';


export const StartPageMainStyled = styled.main`
display: flex;
flex-direction: column;
row-gap: 64px;
margin-bottom: 100px;
margin-top: 64px;
    padding-left:20px;
    padding-right: 20px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-left:32px;
    padding-right: 32px;
}
@media screen and (min-width: 1440px) {
    padding-left:128px;
    padding-right: 128px;
}
& ul.content-gap {
    display: flex;
    flex-direction: column;
    row-gap: 64px;
    padding: 0;
    margin: 0;
    margin-bottom: 0;
}

& ul.content-comments{
    display: flex;
    margin: 0;
    list-style: none;
    padding: 0;
}
& .content-review{
    font-size: 40px;
    color:${mainBlue};
    text-align: center;
    margin: 0;
    text-transform: uppercase;
    line-height: 1.1;
    margin-bottom: 50px;
}
& .slider{
    position: relative;
    height: fit-content;
}
& .arrow svg{
    fill:black;
    height: fit-content;
}
& .slick-track {
    display: flex;
}
& .slick-list{
    overflow: hidden;
}
& .slick-arrow{
    position: absolute;
    bottom:0;
    
}

& .slick-arrow.slick-prev{
 left: 0;
 display: block;
 width: 40px;
 height: 40px;
 border:none;
background-image:url(${sprite+'#arLeft'});
}

& .slick-arrow.slick-next{
  right: 0;
    
}

`