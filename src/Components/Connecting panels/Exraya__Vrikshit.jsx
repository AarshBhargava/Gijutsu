import React, { useEffect } from "react";
import vriimage from "../../assets/Vector 10.png";
import AOS from "aos";
import 'aos/dist/aos.css';
import "./Exraya__Vrikshit.css";

const Exrtovri = () => {
    useEffect(()=>{AOS.init({});},[])
    return(
        <div className="etv">
            <img className="etv__image" src={vriimage} alt=""/>
            <p className="etv__content" data-aos="zoom-in">Joined Vrikshit Foundation a environment something</p>
        </div>
    );
}

export default Exrtovri;