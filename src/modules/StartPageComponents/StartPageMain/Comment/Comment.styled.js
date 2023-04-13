import styled from "styled-components";
export const CommentStyled = styled.div`
box-sizing: border-box;
width: 335px;
padding: 24px;
margin-left: auto;
margin-right: auto;
border: 1px solid rgba(17, 17, 17, 0.1);
border-radius: 8px;
@media screen and (max-width: 374px) {
    width: 100%;
        }
& h3{
margin: 0;
color: #343434;
font-size: 18px;
line-height: 1;
margin-bottom: 13px;
}
& .comment-content{
    margin: 0;
    font-weight: 500;
    color: rgba(17, 17, 17, 0.7);
    font-size: 14px;
    line-height: 1.29;
}
& .comment-box{
    width: 50px;
    border-radius: 50%;
}
& img{
    width:100%;
    display: block;
    height: auto;
}
& .comment-container{
    display: flex;
    column-gap: 18px;

}
`
export const StarContainerStyled = styled.ul`
display: flex;
flex-direction: row-reverse;
justify-content: start;
column-gap: 10px;
padding: 0;
margin: 0;
margin-bottom:24px;
align-self: flex-end;
list-style: none;
& li:nth-child(-n+${props=>props.value}){
   & svg{
    fill:#FFAC33;
   }
}
svg{
    fill:grey;
}

`