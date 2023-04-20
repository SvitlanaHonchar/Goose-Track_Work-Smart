import { Opportunity } from "./Opportunity/Opportunity";
import { Comment } from "./Comment/Comment";
import React from 'react';
import sprite from '../../../shared/icons/sprite.svg';
import Slider from "react-slick";
import { StartPageMainStyled } from "./StartPageMain.styled";

//routeDesktop
import dAll from '../../../shared/images/startPage/desktop/desktop_allIn.jpg'
import dAll2 from '../../../shared/images/startPage/desktop/desktop_allIn@2x.jpg'
import dCal from '../../../shared/images/startPage/desktop/desktop_calendar.jpg'
import dCal2 from '../../../shared/images/startPage/desktop/desktop_calendar@2x.jpg'
import dBar from '../../../shared/images/startPage/desktop/desktop_sidebar.jpg'
import dBar2 from '../../../shared/images/startPage/desktop/desktop_sidebar@2x.jpg'

//routeTab 
import tAll from '../../../shared/images/startPage/tablet/tablet_allIn.jpg'
import tAll2 from '../../../shared/images/startPage/tablet/tablet_allIn@2x.jpg'
import tCal from '../../../shared/images/startPage/tablet/tablet_calendar.jpg'
import tCal2 from '../../../shared/images/startPage/tablet/tablet_calendar@2x.jpg'
import tBar from '../../../shared/images/startPage/tablet/tablet_sidebar.jpg'
import tBar2 from '../../../shared/images/startPage/tablet/tablet_sidebar@2x.jpg'

//routeMob 
import mAll from '../../../shared/images/startPage/mobile/mobile_allIn.jpg'
import mAll2 from '../../../shared/images/startPage/mobile/mobile_allIn@2x.jpg'
import mCal from '../../../shared/images/startPage/mobile/mobile_calendar.jpg'
import mCal2 from '../../../shared/images/startPage/mobile/mobile_calendar@2x.jpg'
import mBar from '../../../shared/images/startPage/mobile/mobile_sidebar.jpg'
import mBar2 from '../../../shared/images/startPage/mobile//mobile_sidebar@2x.jpg'



import Olena from '../../../shared/images/startPage/comments/Olena.jpg';
import Alexander from '../../../shared/images/startPage/comments/Alexander.jpg'
import Lisa from '../../../shared/images/startPage/comments/Lisa.jpg'
import Obema from '../../../shared/images/startPage/comments/Obema.jpg'




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
                    <Opportunity img={{src:[mCal,mCal2,tCal,tCal2,dCal,dCal2],title:'calendar',alt:'calendar'}} num={1} firstTitle='calendar' secondTitle='view'>
                    GooseTrack's Calendar view provides a comprehensive overview of your schedule,
                    displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.
                    </Opportunity >
                    <Opportunity  img={{src:[mBar,mBar2,tBar,tBar2,dBar,dBar2],title:'sidebar',alt:'sidebar'}} num={2} secondTitle='sidebar'>
                    GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information
                    and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.
                    </Opportunity>
                    <Opportunity  img={{src:[mAll,mAll2,tAll,tAll2,dAll,dAll2],title:'calendar app',alt:'calendar app'}} num={3}  firstTitle='All in' secondTitle='one'>
                    GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines.
                    Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.
                    </Opportunity>
            </ul>
            </section>
            <section className="content-review">
                <h2 className="content-h2">Reviews</h2>
                <Slider  className="slider"  {...settings} >
                <Comment className='tr' src={Olena} num={4} name='Olena Doe'>GooseTrack is impressive, the calendar view and
                    filter options make it easy to stay organized and focused. Highly recommended.</Comment>
                <Comment className='tr' src={Alexander} num={4} name='Alexander Hubbard'>GooseTrack is incredibly helpful, the sidebar with account management, 
                calendar, and filter options make navigation seamless. Great for staying organized.</Comment>   
                <Comment className='tr' src={Lisa} num={5} name='Lisa Olloc'>Good!</Comment>  
                <Comment className='tr' src={Obema} num={5} name='Obama'>Excellent!</Comment>      
                </Slider>
            </section>
          
        </StartPageMainStyled>
    );
}