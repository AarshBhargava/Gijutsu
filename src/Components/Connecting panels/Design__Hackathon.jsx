import React, { useEffect } from "react";
import "./Design__Hackathon.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import desitohackimage from "../../assets/Vector 4.png";

const Desitohack = () => {
    useEffect(()=>{AOS.init({});},[])
    return(
        <div className="designteam__hackathon">
            <p data-aos="zoom-in" className="designteam__hackathon__text">at the same time i explored different fields and getting outside my comfort zone</p>
            <img src={desitohackimage} alt="vector" className="designteam__hackathon__image"/>
        </div>
    );
}

export default Desitohack;