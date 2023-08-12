import React from "react";
import exrayaimage from "../../assets/Group 2843.png";
import Leftpage from "../Pages/Leftpage";

const Exraya = () => {
    const gradient = 'linear-gradient(to top right, rgba(255,148,134,1), rgba(255,70,70,1))';

    return(
        <div className="exraya"> 
            <Leftpage gap={'8vw'} imgwidth={'80%'} padding={"7vw"} width={"45%"} textgap={'3vw'} center={'center'} align={'flex-start'} gradient={gradient} className="exraya" img={exrayaimage} headline='Exraya' text='I created a project on Brain Tumor Detection and discovered hidden patterns within daily medical data, reducing the burden on doctors and optimizing check-ups and treatments for greater efficiency.' />
        </div>
    );
}

export default Exraya;
