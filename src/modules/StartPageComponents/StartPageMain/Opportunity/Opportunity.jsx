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
                    <source srcSet={`${props.img.src[0]} 335w, ${props.img.src[1]} 670w`} media="(max-width: 767px)" sizes="335px"/>
                    <source srcSet={`${props.img.src[2]} 704w, ${props.img.src[3]} 1408w`} media="(min-width: 768px) and (max-width: 1439px)"  sizes="704px"/>
                    <source srcSet={`${props.img.src[4]} 604w, ${props.img.src[5]} 1208w`} media="(min-width: 1440px)"  sizes="604px"/>
                    <img src={props.img.src[4]} alt={props.img.alt} title={props.img.title}/>
                </picture>
                
            </div>
        </OpportunityStyled>
    );
}