import styled from "styled-components";
const mainBlue='#3E85F3';
const mainBlue2='#DCEBF7';
const mainBlack = '#171820';
const mainBlack2 = '#111111';
export const OpportunityStyled = styled.li`
display: flex;
flex-direction: column;
list-style: none;
width: 100%;
height: fit-content;
margin-left: auto;
margin-right: auto;

@media screen and (min-width: 375px) and (max-width: 767px) {
    width: 335px;
}
@media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 704px;
}
@media screen and (min-width: 1440px) {
    flex-direction: row;
    column-gap: 228px;
    width: 1184px;
    &:nth-child(2n){
        flex-direction: row-reverse;
    }
}

& .opportunity--even{
    width: fit-content;
    height: fit-content;
    @media screen and (min-width: 1440px) {
    margin-left: auto;
    align-self: center;
    
}
}
&:nth-child(2n) .opportunity--even {
   margin-left: auto;
   @media screen and (min-width: 1440px) {
    margin-left: 0;
    margin-right: auto;
}
}

& .opportunity--number{
    font-size: 80px;
    color: ${mainBlue};
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 14px;
    line-height: 1;
    letter-spacing: -0.04em;
    @media screen and (min-width: 768px) {
        font-size: 104px;
}
}
& h2{
    display: block;
    padding: 8px 18px 8px 18px;
    margin: 0;
    text-transform: uppercase;
    width: fit-content;
    background-color:${mainBlue2} ;
    border-radius: 44px;
    color:${mainBlue};
    margin-bottom: 8px;
    font-size: 32px;
    line-height: 1.25;
    @media screen and (min-width: 768px) {
        padding: 6px 18px 6px 18px;
        font-size: 40px;
        line-height: 1.1;
}
}
& h3{
    margin: 0;
    text-transform: uppercase;
    color:${mainBlack};
    font-size: 32px;
    line-height: 1.25;
    margin-bottom: 14px;
    @media screen and (min-width: 768px) {
        font-size: 40px;
        line-height: 1.1;
        margin-bottom: 24px;
}
}
& .opportunity--box{
    width: 100%;
    height: auto;
@media screen and (min-width: 375px) and (max-width:767px) {
    width: 335px;
    height: 457px;
}
@media screen and (min-width: 768px) and (max-width:1439px) {
    width: 704px;
    height: 700px;
}
@media screen and (min-width: 1440px) {
    width: 604px;
    height: 700px;
}
}
& img{
    display: block;
    width: 100%;
    height: 100%;
}
& .opportunity--text{
    margin: 0;
    margin-bottom: 40px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    color:${mainBlack2};
    @media screen and (min-width: 768px) and (max-width: 1439px) {
        margin-bottom: 48px;
        width: 275px;
}
@media screen and (min-width: 1440px) {
        margin-bottom: 0;
        width: 275px;
}

}


`