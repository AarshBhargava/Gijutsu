import React, { useEffect } from "react";
import univector from "../../assets/Vector 3.png";
import AOS from "aos";
import 'aos/dist/aos.css';
import "./University__Design.css";

const Unitodesign = () => {
    useEffect(()=>{AOS.init({});},[])
    return(
        <div className="university__design">
            <p data-aos="zoom-in" className="university__design__content">I Started A position as a
design member in a society in my college</p>
            <img src={univector} alt="vector" className="university__design__vector"/>
        </div>
    );
}
export default Unitodesign;