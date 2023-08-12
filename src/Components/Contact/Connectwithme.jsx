import React, { useEffect } from "react";
import Lastimage from "../../assets/Frame 854.png"; 
import AOS from "aos";
import 'aos/dist/aos.css';
import {AiOutlineInstagram} from 'react-icons/ai';
import {BiLogoGmail} from "react-icons/bi";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import "./Connectwithme.css";
import myimage from "../../assets/Group 2839.png";
const Connectwithme = () => {
    useEffect (()=>{
        AOS.init({});
    },[])
    return(
        <div className="cwm">
            <section className="cwm__content">
                <section className="cwm" data-aos="fade-up">
                    <h2>Connect with me</h2>
                </section>
                <section className="cwm__main">
                    <div className="socials">
                        <a href="https://www.instagram.com/_aarshbhargava_/" target="_blank"><AiOutlineInstagram className='instagram'/></a>
                        <a href="https://www.instagram.com/_aarshbhargava_/" target="_blank"><BiLogoGmail className='gmail'/></a>
                        <a href="https://www.linkedin.com/in/aarsh-bhargava-651523205/" target="_blank"><AiFillLinkedin className='linkedin'/></a>
                        <a href="https://github.com/AarshBhargava" target="_blank"><AiFillGithub className='github'/></a>
                    </div>
                    <div className="myimage__section">
                        <img src={myimage} alt="" className="myimage"/>
                    </div>
                    <div className="cwm__text" data-aos="fade-left">
                        <p>Hey, it's <span className="name">Aarsh Bhargava</span>! Can't wait to team up with y'all and make magic happen! Let's rock this!</p>
                    </div>
                </section>
            </section>
            <div className="lastimage__cwm">
                <img src={Lastimage} alt="image" className="lastimage__vector"/>
            </div>
        </div>
    );
}

export default Connectwithme;