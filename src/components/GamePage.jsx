import React from 'react';
import { useState } from 'react';
import Title from './Title';
import ProgressOy from './ProgressOy';

const GamePage = () => {
  const [background, setBackground] = useState("");
  const [time, getTime] = useState(new Date().getHours());

  setInterval(function(){
    getTime(new Date().getHours());

    if(time >= 5 && time < 15){
      setBackground("pagi");
    }
    if(time >= 15 && time < 18){
      setBackground("sore");
    }
    if(time >= 18 && time < 5){
      setBackground("malem");
    }

  },1000);

  return (
    <div className={background === "pagi" ? "header2pagi" : background === "sore" ? "header2sore" : "header2malem"}>
      <div className='container'>
        <ProgressOy />
        <Title />
      </div>
    </div>
    
  )
}

export default GamePage