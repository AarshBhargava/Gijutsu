import React from "react";
import "./Skillscard.css";

const Skillscard = (props) => {
    return(
        <div className="skill__box">
            <h2 className="skill__text">{props.skill}</h2>
        </div>
    );
}


export default Skillscard;