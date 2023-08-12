import React, { useEffect } from "react";
import "./Page.css";
import AOS from "aos";
import 'aos/dist/aos.css';

const Leftpage = (props) => {
    const headlineStyle = {
        background: props.gradient,
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
    };

    const mainpagecss = {
        gap: props.gap,
        paddingTop: props.padding,
        paddingBottom: props.padding,
    }

    const text={
        justifySelf: props.align,
        alignSelf: props.align,
        gap: props.textgap,
        width: props.width,
    }

    const img = {
        alignItems: props.center,
        justifyContent: props.align,
        width: props.imgwidth,
    }

    useEffect(() => {
        AOS.init({});
    },[])
    
    return(
        <div className="page" style={mainpagecss}>
            <div style={text} className="page__left">
                <div className="page__headline" data-aos="fade-up">
                    <h2 style={headlineStyle}>{props.headline}</h2>
                    <h4 style={headlineStyle}>{props.date}</h4>
                </div>
                <div className="page__text">
                    <p>{props.text}</p>
                </div>
            </div>
            <div style={img} className="page__right" >
                <img src={props.img} height={props.height} alt="" className="page__image" data-aos="fade-left"/>
            </div>
        </div>
    );
}

export default Leftpage;
