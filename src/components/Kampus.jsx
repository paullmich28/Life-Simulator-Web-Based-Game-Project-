import React from 'react';
import { useEffect, useRef } from 'react';
import { useState } from 'react';

const Kampus = () => {
  const dataHour = useRef();
  const dataMnt = useRef();

  const [clockHrs, setClockHrs] = useState(JSON.parse(localStorage.getItem("clockHours")));
  const [clockMnt, setClockMnt] = useState(JSON.parse(localStorage.getItem("clockMinutes")));

  useEffect(()=>{
    var clock;
    clock = setInterval(()=>{

        setClockMnt(clockMnt + 10);

        localStorage.setItem("clockHours",clockHrs);
        localStorage.setItem("clockMinutes",clockMnt);
      
        if(clockMnt > 40){
          setClockHrs(clockHrs + 1);
          setClockMnt(0);
        }

        if(clockHrs > 23){
          setClockHrs(0);
        }
    },7000)

    return()=>clearInterval(clock);
  });

  function setClock(){
    const minutesRatio = clockMnt /60
    const hoursRatio = clockHrs / 12
    setRotation(dataMnt.current, minutesRatio)
    setRotation(dataHour.current, hoursRatio)
  }

  function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation',rotationRatio * 360)
  }

  //Analog clock
  useEffect(()=>{
    var jamAnalog = setInterval(function(){
      setClock();

      clearInterval(jamAnalog);
    }, 1000);
  })

  return (
    <div className="clockAndBar">
      <div className='jam'>
        <div className='hand hour' ref={dataHour}></div>
        <div className='hand minute' ref={dataMnt}></div>
        <div className="number number1">1</div>
        <div className="number number2">2</div>
        <div className="number number3">3</div>
        <div className="number number4">4</div>
        <div className="number number5">5</div>
        <div className="number number6">6</div>
        <div className="number number7">7</div>
        <div className="number number8">8</div>
        <div className="number number9">9</div>
        <div className="number number10">10</div>
        <div className="number number11">11</div>
        <div className="number number12">12</div>
      </div>
    </div>
  )
}

export default Kampus