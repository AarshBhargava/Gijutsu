import React, { useEffect } from "react";
import ImageAvatar from "../../assets/Avatar.png";
import ImageDesign from "../../assets/Frame 824.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Heropage.css';

const Heropage = () => {
    useEffect(() =>{
        AOS.init({});
    },[])
    return(
        <div className="heropage">
            <img src={ImageAvatar} alt="" width={'18%'}/>
            <h2 className="heropage__headline">Hi. I’m Aarsh.<br /> A Web Developer</h2>
            <img src={ImageDesign} alt="vector" className="heropage__vector"/>
        </div>
    );
}

export default Heropage;