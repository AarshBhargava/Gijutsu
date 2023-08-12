import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import "./Nextpage.css";

const Nextpage = (props) => {
    useEffect(()=>{AOS.init({});},[])
    return(
        <div className="nextpage">
            <img className="nextpage__image" src={props.image} alt="" height={props.height}/>
            <p data-aos="zoom-in" className="nextpage__para">{props.para}</p>
        </div>
    );
}

export default Nextpage;