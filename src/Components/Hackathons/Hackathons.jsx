import React, { useEffect } from "react";
import hackathonimage1 from "../../assets/Group 340.png";
import hackathonimage2 from "../../assets/Group 330.png";
import AOS from "aos";
import 'aos/dist/aos.css';
import "./Hackathons.css";

const Hackathon = () => {
    useEffect(()=>{
        AOS.init({});
    },[])
    return(
        <div className="hackathon">
            <div className="left">
                <img data-aos="fade-right" className="left__img" src={hackathonimage1} alt=""/>
            </div>
            <div className="hackathon__content">
                <div className="hackathon__headline" data-aos="fade-up">
                    <h2>Hackathons</h2>
                    <h4>2022-2023</h4>
                </div>
                <p className="hackathon__text">
                    I actively participated in many hackathons, fueling my passion for innovation and problem-solving.
                </p>
            </div>
            <div className="right">
                <img className="right__img" src={hackathonimage2} alt="" data-aos="fade-left"/>
            </div>
        </div>
    );
}

export default Hackathon;