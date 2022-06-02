import React from 'react';
import { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { FaBookReader } from 'react-icons/fa';

const ProgressOy = () => {
  const [makan, setMakan] = useState(60);
  const [turu, setTuru] = useState(60);
  const [belajar, setBelajar] = useState(60);
  const [mabar, setMabar] = useState(60);

  const [clockHrs, setClockHrs] = useState(new Date().getHours());
  const [clockMnt, setClockMnt] = useState(0);
  
  useEffect(()=>{
    var clock;
    clock = setInterval(()=>{
      setClockMnt(clockMnt + 10);
      
      if(clockMnt > 40){
        setClockHrs(clockHrs + 1);
        setClockMnt(0);
      }

      if(clockHrs === 24){
        setClockHrs(0);
      }
    },1000)

    return()=>clearInterval(clock);
  });

  function Laper(){
    setMakan(makan - 3);

    if(makan < 15){
      alert("Makan dulu gih");
    }
  } 

  function Ngantuk(){
    setTuru(turu - 3);

    if(turu < 15){
      alert("Tidur dulu gih");
    }
  }

  function BljrReminder(){
    setBelajar(belajar - 3);

    if(belajar < 15){
      alert("Belajar gan, nanti ga lulus loh");
    }
  }

  function StressReminder(){
    setMabar(mabar - 3);

    if(mabar < 15){
      alert("Kebanyakan belajar ya? Main dulu sana");
    }
  }

  //setInterval(Laper, 2000);

  return (
    <div className="clockAndBar">
      <div className='jam'>{clockHrs < 10 ? "0" + clockHrs : clockHrs} : {clockMnt < 10 ? "0" + clockMnt : clockMnt}</div>
      <div>
        <FaBookReader className='icon1'/>
      </div>
      <div className='bar'>
        <ProgressBar className='progress' variant="success" now={makan} />
        <ProgressBar variant="danger" now={turu} />
        <ProgressBar variant="warning" now={belajar} />
        <ProgressBar variant="info" now={mabar} />
      </div>
    </div>
    
  )
}

export default ProgressOy