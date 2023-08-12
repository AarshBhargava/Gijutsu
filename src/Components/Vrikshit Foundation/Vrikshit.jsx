import React from "react";
import Page from "../Pages/Page";
import Vrikshitimage from "../../assets/Group 2837.png";

const Vrikshit = () => {
    const gradient = 'linear-gradient(270deg, #F3DBFF 0%,#95FF63  100%)';

    return(
        <div>
            <Page className="vrikshit" gradient={gradient} align={'flex-start'} img={Vrikshitimage}  headline='Vrikshit Foundation' date='2022-Present' text="I proudly volunteered for Vrikhshit Foundation, actively participating in environmental initiatives such as plog runs and impactful wall painting drives. Together, we made a difference, working towards a cleaner, greener world."/>
        </div>
    );
}


export default Vrikshit;