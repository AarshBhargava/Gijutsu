import React, { useEffect } from "react";
import connectvector from "../../assets/Vector 408.png";
import "./Today__Connect.css";
import AOS from "aos";
import 'aos/dist/aos.css';

const Totocon = () => {
    useEffect(()=>{AOS.init({});},[])
    return(
        <div className="totocon">
            <img src={connectvector} alt="" className="totocon__image"/>
            <p data-aos="zoom-in" className="totocon__text">Wanna know more about me???</p>
        </div>
    );
}


export default Totocon;