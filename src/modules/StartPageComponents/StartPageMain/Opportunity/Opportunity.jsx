import { OpportunityStyled } from "./Opportunity.styled";
export function Opportunity(props){
    return (
        <OpportunityStyled>
            <div className="opportunity--even">
                <p className="opportunity--number">
                    {props.num}.
                </p>
                {props.firstTitle&& <h2>{props.firstTitle}</h2> }
                <h3>{props.secondTitle}</h3>
                <p className="opportunity--text">
                    {props.children}
                </p>
            </div>
            <div className="opportunity--box">
                <picture>
                    <source srcSet={props.img.src[0]+' 335w'} media="(max-width: 767px)"/>
                    <source srcSet={props.img.src[1]+' 704w'} media="(min-width: 768px) and (max-width: 1439px)"/>
                    <source srcSet={props.img.src[2]+' 604w'} media="(min-width: 1440px)"/>
                    <img src={props.img.src[2]} alt={props.img.alt} title={props.img.title}/>
                </picture>
                
            </div>
        </OpportunityStyled>
    );
}