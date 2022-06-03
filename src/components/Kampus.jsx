import React from 'react';
import { useEffect, useRef } from 'react';
import { useState } from 'react';

const Kampus = () => {
  const dataHour = useRef();
  const dataMnt = useRef();

  const [clockHrs, setClockHrs] = useState(JSON.parse(localStorage.getItem("clockHours")));
  const [clockMnt, setClockMnt] = useState(JSON.parse(localStorage.getItem("clockMinutes")));
  const jurusan = localStorage.getItem("jurusanKamu");
  const [counter, setCounter] = useState(JSON.parse(localStorage.getItem("counter")));
  const [hari, setHari] = useState("Minggu");

  useEffect(()=>{
    var clock;
    clock = setInterval(()=>{

        setClockMnt(clockMnt + 1.5);

        localStorage.setItem("clockHours",clockHrs);
        localStorage.setItem("clockMinutes",clockMnt);
        localStorage.setItem("counter",counter);
      
        if(clockMnt === 15){
          setClockHrs(clockHrs + 0.25)
        }

        if(clockMnt === 30){
          setClockHrs(clockHrs + 0.25);
        }

        if(clockMnt === 45){
          setClockHrs(clockHrs + 0.25)
        }
        
        if(clockMnt > 57){
          setClockHrs(clockHrs + 0.25);
          setClockMnt(0);
        }

        if(clockHrs > 23){
          setClockHrs(0);
        }

        if(counter === 0){
          setHari("Minggu");
        }else if(counter === 1){
          setHari("Senin");
        }else if(counter === 2){
          setHari("Selasa");
        }else if(counter === 3){
          setHari("Rabu");
        }else if(counter === 4){
          setHari("Kamis");
        }else if(counter === 5){
          setHari("Jumat");
        }else if(counter === 6){
          setHari("Sabtu");
        }
    },1000)

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
      <div>
        <h4>Jurusan: {jurusan}</h4>
        <h4>Hari: {hari}</h4>
      </div>
    </div>
  )
}

export default Kampus