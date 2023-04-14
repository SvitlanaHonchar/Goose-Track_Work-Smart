import { CommentStyled,StarContainerStyled } from "./Comment.styled";
import React from "react";
import sprite from '../../../../shared/icons/sprite.svg';
export function Comment(props){
    return(
    
            <CommentStyled>
            <div className="comment-container">
            <div className="comment-box">
                <img src={props.src} alt='User avatar' />
              </div>
              <div>
                  <h3>{props.name.trim()}</h3>
                  <StarContainerStyled value={props.num}>
                         <li><svg height="14" width="14">
                          <use href={sprite+'#starStartPage'}></use>
                      </svg></li>
                      <li><svg height="14" width="14">
                          <use href={sprite+'#starStartPage'}></use>
                      </svg></li>
                      <li><svg height="14" width="14">
                          <use href={sprite+'#starStartPage'}></use>
                      </svg></li>
                      <li><svg height="14" width="14">
                          <use href={sprite+'#starStartPage'}></use>
                      </svg></li>
                      <li><svg height="14" width="14">
                          <use href={sprite+'#starStartPage'}></use>
                      </svg></li>
                  </StarContainerStyled>
              </div>
            </div>
            <p className="comment-content">{props.children}</p>
        </CommentStyled >
  
      
    );
}

/*    
  <img src={props.src} alt={props.alt} />

const setStar = (num)=>{
        let arrStar=[];
        for(let k = 0;k<5;k++){
            if(k<num){
                arrStar.push(<div className="active-star">
                     <svg height="14" width="14">
                        <use href={sprite+'#starStartPage'}></use>
                    </svg>
                </div>)
            }
            else{
                arrStar.push(<div>
                <svg height="14" width="14">
                   <use href={sprite+'#starStartPage'}></use>
               </svg>
           </div>)
            }
        }
            return arrStar;
    } */