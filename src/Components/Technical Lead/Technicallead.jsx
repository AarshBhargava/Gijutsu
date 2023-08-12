import React from "react";
import Page from "../Pages/Page";
import tlimage from "../../assets/Group 314.png";


const Technicallead = () => {
    const gradient="var(--gradient-grape, linear-gradient(270deg, #A981FE 0%,#DBA6F4 100%))";

    return(
        <div>
            <Page gradient={gradient}  width={'40%'} className="tl-page" img={tlimage} height='710px' headline="Technical Lead" date="2022-Present" text="I took charge as the technical lead of IEEE, organizing many awesome tech events that sparked innovation and knowledge-sharing in our community. It was a super cool experience, and amidst all the design exploration and learning, it left a lasting impact on me!"/>
        </div>
    );
}

export default Technicallead;