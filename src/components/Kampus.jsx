import React, { useEffect, useRef, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { FaHotdog, FaBed, FaGamepad, FaBookReader } from "react-icons/fa";
import { SliderSetting } from './SliderSetting';
import { useNavigate } from 'react-router-dom';

const Kampus = () => {
  const dataHour = useRef();
  const dataMnt = useRef();

  const rumahNav = useNavigate();
  const kafeNav = useNavigate();
  const mallNav = useNavigate();

  const namaKau = localStorage.getItem("namaKamu");
  const jurusanKau = localStorage.getItem("jurusanKamu");
  const namaChar = localStorage.getItem("karakter");
  const [urlImg, setUrlImg] = useState("");

  const [makan, setMakan] = useState(50);
  const [turu, setTuru] = useState(50);
  const [belajar, setBelajar] = useState(0);
  const [mabar, setMabar] = useState(50);

  const [clockHrs, setClockHrs] = useState(JSON.parse(localStorage.getItem("clockHours")));
  const [clockMnt, setClockMnt] = useState(JSON.parse(localStorage.getItem("clockMinutes")));
  const counter = JSON.parse(localStorage.getItem("counter"));

  const [hari, setHari] = useState("Minggu");

  const [sapa, setSapa] = useState("");

  //Jam
  useEffect(()=>{
    var clock;
    clock = setInterval(()=>{

        setClockMnt(clockMnt + 1.5);

        localStorage.setItem("clockHours",clockHrs);
        localStorage.setItem("clockMinutes",clockMnt);
        localStorage.setItem("counter",counter);
        localStorage.setItem("hari", hari);
      
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

        if(clockHrs >= 24){
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

  //Salam
  useEffect(()=>{
    var salamTime = setInterval(function(){
        if(clockHrs >= 5 && clockHrs < 11){
            setSapa("Selamat pagi!");
        }else if(clockHrs >= 11 && clockHrs < 15){
            setSapa("Selamat siang!");
        }else if(clockHrs >= 15 && clockHrs < 19){
            setSapa("Selamat sore!");
        }else if(clockHrs >= 19 || clockHrs < 5){
            setSapa("Selamat malam!");
        }

        clearInterval(salamTime);
    },1000)
  })

  //Karakter
  useEffect(()=>{
    switch(namaChar){
        default:
            setUrlImg(require('../img/marioKampus.png'));
            break;
        case "Luigi":
            setUrlImg(require('../img/luigiKampus.png'));
            break;
        case "Peach":
            setUrlImg(SliderSetting[2].imgURL);
            break;
        case "Rosalina":
            setUrlImg(SliderSetting[3].imgURL);
            break;
    }
  },[namaChar])

  function RumahGo(e){
    rumahNav('/gamepage');
    e.preventDefault();
  }

  function KafeGo(e){
    kafeNav('/kafe');
    e.preventDefault();
  }

  function MallGo(e){
    mallNav('/mall');
    e.preventDefault();
  }

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

  //Dipulangin
  useEffect(()=>{
    if(clockHrs >= 17){
      alert("Sudah sore nih! Pulang yuk!");
      rumahNav('/gamepage');
    }
  })

  return (
    <div className='header1'>
      <div className='container'>
        <h2 className="salam">{sapa} {namaKau}</h2>
        <div className='semuaKecualiChar'>
          <div className='goto'>
            <h3 className="labelGo">Go To:</h3>
            <button className='buttonGo btn btn-primary btn-outline-warning' onClick={RumahGo}>Pulang</button><br />
            <button className='buttonGo btn btn-light btn-outline-primary' onClick={KafeGo}>Kafe</button>
            <button className='buttonGo btn btn-secondary btn-outline-dark' onClick={MallGo}>Mall</button>
          </div>
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
            <div className='jurusan'>
              <h4 className='jurusan'>Jurusan: {jurusanKau}</h4>
            </div>
            <div className='hari'>
              <h4 className='hari'>Hari: {hari}</h4>
            </div>
            <div className='icons'>
              <FaHotdog className='icon1'/><br />
              <FaBed className='icon2'/><br />
              <FaBookReader className='icon3'/><br />
              <FaGamepad className='icon4'/><br />
            </div>
            <div className='bar'>
              <ProgressBar className='progress' variant="success" now={makan} />
              <ProgressBar variant="danger" now={turu} />
              <ProgressBar variant="warning" now={belajar} />
              <ProgressBar variant="info" now={mabar} />
            </div>
          </div>
          <div className='buttons'>
            <div className='makanDanTuru'>
              <button className='makanBtn button btn btn-success btn-outline-dark'>Makan</button><br />
            </div>
            <div className='belajarDanMain'>
              <button className='belajarBtn button btn btn-warning btn-outline-secondary'>Belajar</button><br />
            </div>
          </div>
        </div>
        <div className='headerGamepage' >
          <img src={urlImg} className="gambarCharYeu" alt="char" />
        </div>
      </div>
    </div>
  )
}

export default Kampus