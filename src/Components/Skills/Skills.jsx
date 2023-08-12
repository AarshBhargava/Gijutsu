import React, { useEffect } from "react";
import Skillscard from "../Pages/Skillscard.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Imageskill from "../../assets/Group 313.png";
import "./Skills.css";

const Skills = () => {
    useEffect(()=>{
        AOS.init({});
    },[])
    return(
        <div className="skills" data-aos="fade-up">
            <h2 className="skills__headline">Skills</h2>
            <div className="skills__div1">
                <Skillscard skill = "Machine Learning" />
                <Skillscard skill = "Web Development"/>
                <Skillscard skill = "C++"/>
                <Skillscard skill = "Python"/>
            </div>
            <div className="skills__div2">
                <Skillscard skill = "UX Design"/>
                <Skillscard skill = "UI Design"/>
            </div>
            <img data-aos="fade-up" className ="skill__vector"src={Imageskill} alt="skill-vector" />
        </div>
    );
}

export default Skills;