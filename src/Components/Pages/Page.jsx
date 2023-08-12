import React, { useEffect } from "react";
import "./Page.css";
import AOS from "aos";
import 'aos/dist/aos.css';

const Page = (props) => {
    const headlineStyle = {
        background: props.gradient,
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
    };

    const technical= {
        width: props.width,
    }

    const align = {
        alignSelf: props.align,
    }

    useEffect(()=>{AOS.init({});},[])

    return(
        <div className="page">
            <div style={technical} className="page__left" data-aos="fade-right" >
                <img width={props.width} src={props.img} alt="" className="page__image"/>
            </div>
            <div style={align} className="page__right">
                <div className="page__headline"  data-aos="fade-up">
                    <h2 style={headlineStyle}>{props.headline}</h2>
                    <h4 style={headlineStyle}>{props.date}</h4>
                </div>
                <div className="page__text">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default Page;