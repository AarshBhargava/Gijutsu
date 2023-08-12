import React from 'react';
import "./App.css";
import Heropage from './Components/Heropage/Heropage';
import Skills from './Components/Skills/Skills';
import Start from './Components/My Journey/Start';
import University from './Components/University/University';
import Unitodesign from './Components/Connecting panels/University__Design';
import Designteam from './Components/DesignTeam/Designteam';
import Desitohack from './Components/Connecting panels/Design__Hackathon';
import Hackathon from './Components/Hackathons/Hackathons';
import Hacktotech from './Components/Connecting panels/Hackathon__TechnicalLead';
import Technicallead from './Components/Technical Lead/Technicallead';
import Nextpage from './Components/Pages/Nextpage';
import nimage from "./assets/Vector 11.png";
import Exraya from './Components/Project/Exraya';
import Today from './Components/Today/Today';
import Connectwithme from './Components/Contact/Connectwithme';
import Exrtovri from './Components/Connecting panels/Exraya__Vrikshit';
import Vrikshit from './Components/Vrikshit Foundation/Vrikshit';
import Vrikshit__Design from './Components/Connecting panels/Vrikshit__Design';
import Totocon from './Components/Connecting panels/Today__Connect';
function App() {
  return (
    <div className="App">
      <Heropage />
      <Skills />
      <Start />
      <University />
      <Unitodesign />
      <Designteam />
      <Desitohack />
      <Hackathon />
      <Hacktotech />
      <Technicallead />
      <Nextpage image={nimage} para="I created a project on brain-tumor detection"/>
      <Exraya />
      <Exrtovri />
      <Vrikshit />
      <Vrikshit__Design />
      <Today />
      <Totocon />
      <Connectwithme />
    </div>
  );
}

export default App;
