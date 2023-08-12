import React, { useEffect } from "react";
import Imagestart from "../../assets/Group 2836.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Start.css";

const Start = () => {
    useEffect(()=>{
        AOS.init({});
    },[])
    return(
        <div className="start">
            <h2 className="start__headline" data-aos="fade-up">My Journey</h2>
            <div className="start__content">
                <p className="start__left__text" data-aos="zoom-in">I started my career studying B.tech from guru tegh bahadur institute</p>
                <img className="start__vector" src={Imagestart} alt="start-vector" />
                <p className="start__right__text" data-aos="zoom-in">My first year was full of unexpected situations and pushing beyond my comfort zone.</p>
            </div>
        </div>
    );
}

export default Start;