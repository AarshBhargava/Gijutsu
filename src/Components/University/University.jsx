import React, { useEffect } from "react";
import Imageuniversity from "../../assets/Group 308.png";
import AOS from "aos";
import 'aos/dist/aos.css';
import "./University.css";
import GreyCard from "../Pages/GeryCard";

const University = () => {
    useEffect(()=>{
        AOS.init({});
    }, [])

    return(
        <div className="university">
            <div className="university-left">
                <img src={Imageuniversity} alt="image3" className="university-image"/>
            </div>
            <div className="content" data-aos="fade-up">
                <div className="university-headline">
                    <h2>University</h2>
                    <h4>2021-Present</h4>
                </div>
                    <p className="university-text">I started studying my B.Tech in Artificial Intelligence and Machine Learning. In my first year, I explored different fields and met some amazing people.</p>
                <div className="greycards">
                    <GreyCard data-aos="zoom-in" content="Interacting with others and web designing, my dual passions drove my journey."/>
                    <GreyCard content="I thoroughly enjoyed exploring diverse college aspects and actively joined various societies." />
                </div>
            </div>
        </div>
    );
}

export default University;