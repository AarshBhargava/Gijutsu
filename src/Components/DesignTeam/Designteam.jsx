import React, { useEffect } from "react";
import GreyCard from "../Pages/GeryCard";
import "./Designteam.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import Designteamimage from "../../assets/Group 310.png";

const Designteam = () => {
    useEffect(()=>{
        AOS.init({});
    },[])
    return(
        <div className="designteam">
            <div className="content">
                <div data-aos="fade-up" className="designteam-headline">
                    <h2>Design Team</h2>
                    <h4>2021-Present</h4>
                </div>
                <p className="designteam-text">In my First Year, I became part of the DLC society's design team. It was a time of constant experimentation and a lot of work in different areas of design. I learned a lot about designing, and self-management. In collaboration with talented people we designed beautiful projects.</p>
                <div className="greycards">
                    <GreyCard content="During this time, I also mastered Figma and worked on numerous designs."/>
                    <GreyCard content="I had a blast meeting new people and enjoying every moment of it." />
                </div>
            </div>
            <div className="right" data-aos="fade-left" >
                <img src={Designteamimage} alt="vector" className="design-image"/>
            </div>
        </div>
    );
}

export default Designteam;