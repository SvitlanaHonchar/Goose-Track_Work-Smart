import { Opportunity } from "./Opportunity/Opportunity";
import { Comment } from "./Comment/Comment";

import React from 'react';

import { StartPageMainStyled } from "./StartPageMain.styled";
import oneMob from '../../../shared/image/GooseStartPage/content/oneMob.jpg';
import sidebarMob from '../../../shared/image/GooseStartPage/content/sidebarMob.jpg';
import viewMob from '../../../shared/image/GooseStartPage/content/viewMob.jpg';

import oneTab from '../../../shared/image/GooseStartPage/content/oneTab.jpg';
import sidebarTab from '../../../shared/image/GooseStartPage/content/sidebarTab.jpg';
import viewTab from '../../../shared/image/GooseStartPage/content/viewTab.jpg';

import onePC from '../../../shared/image/GooseStartPage/content/onePC.jpg';
import sidebarPC from '../../../shared/image/GooseStartPage/content/sidebarPC.jpg';
import viewPC from '../../../shared/image/GooseStartPage/content/viewPC.jpg';


import Olena from '../../../shared/image/GooseStartPage/comments/Olena.jpg';
import Alexander from '../../../shared/image/GooseStartPage/comments/Alexander.jpg'

import sprite from '../../../shared/icons/sprite.svg';

import Slider from "react-slick";


const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <div
    {...props}
    className={
      "slick-prev slick-arrow" +
      (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={false}
    type="button"
  >
   <svg height="6" width="39" className="svg-arrow">
                        <use href={sprite+'#arRight'}></use>
                    </svg>
   
  </div>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <div
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={ false}
    type="button"
  > <svg height="6" width="39" className="svg-arrow">
  <use href={sprite+'#arLeft'}></use>
</svg>
    
  </div>
);



export function StartPageMain(){

      const settings={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:2,
        slidesToScroll: 1,
        adaptiveHeight:true,
        responsive:[
            {
                breakpoint:1439,
                settings:{
                    slidesToShow:1,
                }
            }
        ],
        nextArrow:<SlickArrowRight></SlickArrowRight>,
        prevArrow:<SlickArrowLeft></SlickArrowLeft>

      }

    
    return(
        <StartPageMainStyled>
            <section>
                <ul className='content-gap'>
                    <Opportunity img={{src:[viewMob,viewTab,viewPC],title:'calendar',alt:'calendar'}} num={1} firstTitle='calendar' secondTitle='view'>
                    GooseTrack's Calendar view provides a comprehensive overview of your schedule,
                    displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.
                    </Opportunity >
                    <Opportunity  img={{src:[sidebarMob,sidebarTab,sidebarPC],title:'sidebar',alt:'sidebar'}} num={2} secondTitle='sidebar'>
                    GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information
                    and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.
                    </Opportunity>
                    <Opportunity  img={{src:[oneMob,oneTab,onePC],title:'calendar app',alt:'calendar app'}} num={3}  firstTitle='All in' secondTitle='one'>
                    GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines.
                    Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.
                    </Opportunity>
            </ul>
            </section>
            <section className="content-review">
                <h2 className="content-h2">Reviews</h2>
                <Slider  className="slider"  {...settings} >
                <Comment src={Olena} num={2} name='Olena Doe'>GooseTrack is impressive, the calendar view and
                    filter options make it easy to stay organized and focused. Highly recommended.</Comment>
                <Comment src={Alexander} num={4} name='Alexander Hubbard'>i</Comment>   
                <Comment src={Alexander} num={4} name='Alexander Hubbard'>i</Comment>  
                <Comment src={Alexander} num={4} name='Alexander Hubbard'>i</Comment>      
                </Slider>
            </section>
          
        </StartPageMainStyled>
    );
}
/*
 <div className="arrow">
                    <svg height="6" width="39">
                        <use href={sprite+'#arRight'}></use>
                    </svg>
                </div> */