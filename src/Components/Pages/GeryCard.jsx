import React, { useEffect } from "react";
import "./GreyCard.css";
import AOS from "aos";
import 'aos/dist/aos.css';

const GreyCard = (props) => {
    useEffect(()=>{
        AOS.init({});
    },[])
    return(
        <div className="greycard" data-aos="zoom-in">
            <p className="greycard__content">{props.content}</p>
        </div>
    );
}

export default GreyCard;