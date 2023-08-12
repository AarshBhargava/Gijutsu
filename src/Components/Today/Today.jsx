import React, { useEffect } from "react";
import Todayimage from "../../assets/Group 315.png";
import AOS from "aos";
import 'aos/dist/aos.css';
import dogimage from "../../assets/Group 318.png";
import "./Today.css";

const Today = () =>{
    useEffect(()=>{
        AOS.init({});
    }, [])
    return(
        <div className="today">
            <div className="today__content">
                <div className="today__headline" data-aos="fade-up">
                    <h2 >Today</h2>
                </div>
                <div className="today__text">
                    <p>I love web development and constantly learning more about machine learning. Also, I really want to have a dog.</p>
                </div>
                <img className="dogs" src={dogimage} alt="dogs" data-aos="zoom-in"/>
            </div>
            <div className="today__image__panel">
                <img className="today__image" src={Todayimage} alt="image2"data-aos="zoom-in" />
            </div>
        </div> 
    );
}

export default Today;