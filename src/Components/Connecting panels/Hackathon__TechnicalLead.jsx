import React, { useEffect } from "react";
import "./Hackathon__TechnicalLead.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import hacktotechimage from "../../assets/Vector 5.png";

const Hacktotech = () => {
    useEffect(()=>{AOS.init({});},[])
    return(
        <div className="htt">
            <p data-aos="zoom-in" className="htt__left__text">Learned a lot of stuff and solved leetcode questions on the way</p>
            <img src={hacktotechimage} alt="" className="hacktotech-image"/>
            <p data-aos="zoom-in" className="htt__right__text">I started as a Technical lead in ieee a leading society in my college</p>
        </div>
    );
}

export default Hacktotech;