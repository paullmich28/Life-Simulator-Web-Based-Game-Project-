import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { FaBookReader, FaHotdog, FaBed, FaGamepad } from 'react-icons/fa';
import { SliderSetting } from './SliderSetting';
import { useNavigate } from 'react-router-dom';

const GamePage = () => {
  //Variable progress bar
  const [makan, setMakan] = useState(50);
  const [turu, setTuru] = useState(50);
  const [belajar, setBelajar] = useState(0);
  const [mabar, setMabar] = useState(50);

  //variable jam
  const [clockHrs, setClockHrs] = useState(0);
  const [clockMnt, setClockMnt] = useState(0);
  const [clockHrsAftr, setClockHrsAftr] = useState(JSON.parse(localStorage.getItem("clockHours")));
  const [clockMntAftr, setClockMntAftr] = useState(JSON.parse(localStorage.getItem("clockMinutes")));
  const [disableKmps, setDisableKmps] = useState(false);
  const [disableKafe, setDisableKafe] = useState(false);
  const [disableMrkt, setDisableMrkt] = useState(false);
  const [hari, setHari] = useState("Minggu");
  const [counter, setCounter] = useState(0);
  const [hariAftr, setHariAftr] = useState(localStorage.getItem("hari"));
  const [counterAftr, setCounterAftr] = useState(JSON.parse(localStorage.getItem("counter")));

  //variable buat ngatur background
  const [background, setBackground] = useState("");

  //variabel karakter, nama, jurusan
  const namaChar = localStorage.getItem("karakter");
  const namaKau = localStorage.getItem("namaKamu");
  const jurusanKau = localStorage.getItem("jurusanKamu");
  const [urlImg, setUrlImg] = useState("");
  
  var trueTrigger = JSON.parse(localStorage.getItem("trueTrigger"));

  //variabel sapa
  const [sapa, setSapa] = useState("");

  //variabel buat jam
  const dataHour = useRef();
  const dataMnt = useRef();

  //variabel buat navigate
  const kampusNav = useNavigate();
  const kafeNav = useNavigate();
  const mallNav = useNavigate();

  //Jam
  useEffect(()=>{
    var clock;
    clock = setInterval(()=>{
      if(!trueTrigger){
        setClockMnt(clockMnt + 1.5);

        localStorage.setItem("clockHours",clockHrs);
        localStorage.setItem("clockMinutes",clockMnt);
        localStorage.setItem("hari",hari);
        localStorage.setItem("counter",counter)

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
          if(counter === 0){
            setHari("Senin")
            setCounter(counter + 1);
          }else if(counter === 1){
            setHari("Selasa");
            setCounter(counter + 1);
          }else if(counter === 2){
            setHari("Rabu");
            setCounter(counter + 1);
          }else if(counter === 3){
            setHari("Kamis");
            setCounter(counter + 1);
          }else if(counter === 4){
            setHari("Jumat");
            setCounter(counter + 1);
          }else if(counter === 5){
            setHari("Sabtu");
            setCounter(counter + 1);
          }
        }
      }else if(trueTrigger){
        setClockMntAftr(clockMntAftr + 1.5);
        setClockMnt(clockMntAftr);
        setClockHrs(clockHrsAftr);
        setCounter(counterAftr);
        setHariAftr(hariAftr);

        localStorage.setItem("clockHours",clockHrs);
        localStorage.setItem("clockMinutes",clockMnt);
        localStorage.setItem("counter",counter);
        localStorage.setItem("hari",hari);

        if(clockMnt === 15){
          setClockHrs(clockHrs + 0.25);
          setClockHrsAftr(clockHrsAftr + 0.25)
        }

        if(clockMnt === 30){
          setClockHrs(clockHrs + 0.25);
          setClockHrsAftr(clockHrsAftr + 0.25)
        }

        if(clockMnt === 45){
          setClockHrs(clockHrs + 0.25);
          setClockHrsAftr(clockHrsAftr + 0.25);
        }

        if(clockMnt > 57){
          setClockHrsAftr(clockHrsAftr + 0.25);
          setClockHrs(clockHrs + 0.25);
          setClockMnt(0);
          setClockMntAftr(0);
        }

        if(clockHrs >= 24){
          setClockHrs(0);
          setClockHrsAftr(0);
          if(counterAftr === 0){
            setHari("Senin")
            setHariAftr("Senin");
            setCounter(counter + 1);
            setCounterAftr(counterAftr + 1);
          }else if(counterAftr === 1){
            setHari("Selasa");
            setHariAftr("Selasa");
            setCounter(counter + 1);
            setCounterAftr(counterAftr + 1);
          }else if(counterAftr === 2){
            setHari("Rabu");
            setHariAftr("Rabu");
            setCounter(counter + 1);
            setCounterAftr(counterAftr + 1);
          }else if(counterAftr === 3){
            setHari("Kamis");
            setHariAftr("Kamis");
            setCounter(counter + 1);
            setCounterAftr(counterAftr + 1);
          }else if(counterAftr === 4){
            setHari("Jumat");
            setHariAftr("Jumat");
            setCounter(counter + 1);
            setCounterAftr(counterAftr + 1);
          }else if(counterAftr === 5){
            setHari("Sabtu");
            setHariAftr("Sabtu");
            setCounter(0);
            setCounterAftr(0);
          }
        }
      }
        
    },1000)

    return()=>clearInterval(clock);
  });

  //Background
  useEffect(()=>{
    var setBg = setInterval(function(){

      if(clockHrs >= 5 && clockHrs < 18){
        setBackground("header2pagi");
      }
      else if(clockHrs >= 18 || clockHrs < 5){
        setBackground("header2malem");
      }

      clearInterval(setBg);
    },1000);
  })

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

  //Gambar Character
  useEffect(()=>{
    switch(namaChar){
        default:
            setUrlImg(SliderSetting[0].imgURL);
            break;
        case "Luigi":
            setUrlImg(SliderSetting[1].imgURL);
            break;
        case "Peach":
            setUrlImg(SliderSetting[2].imgURL);
            break;
        case "Rosalina":
            setUrlImg(SliderSetting[3].imgURL);
            break;
    }
  },[namaChar])

  //Disable button
  useEffect(()=>{
    var disButton = setInterval(function(){
      if(clockHrs >= 17 || clockHrs < 7){
        setDisableKmps(true);
      }else if(clockHrs >= 7 || clockHrs < 17){
        setDisableKmps(false);
      }

      if(clockHrs >= 21 || clockHrs < 8){
        setDisableKafe(true);
        setDisableMrkt(true)
      }else if(clockHrs >= 8 || clockHrs < 21){
        setDisableKafe(false);
        setDisableMrkt(false);
      }

      clearInterval(disButton);
    },1000)
  })

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

  function Bljr(){
    setBelajar(belajar - 3);

  }

  function StressReminder(){
    setMabar(mabar - 3);

    if(mabar < 15){
      alert("Kebanyakan belajar ya? Main dulu sana");
    }
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

  function KampusGo(e){
      kampusNav('/kampus');
      e.preventDefault();
      localStorage.setItem("trueTrigger", 1)
  }

  function KafeGo(e){
    kafeNav('/kafe');
    e.preventDefault();
    localStorage.setItem("trueTrigger", 1)
  }

  function MallGo(e){
    mallNav('/mall');
    e.preventDefault();
    localStorage.setItem("trueTrigger", 1)
  }

  return (
    <div className={background}>
      <div className='container'>
        <h2 className="salam">{sapa} {namaKau}</h2>
        <div className='semuaKecualiChar'>
          <div className='goto'>
            <h3 className="labelGo">Go To:</h3>
            <button className='buttonGo btn btn-primary btn-outline-warning' onClick={KampusGo} disabled={disableKmps}>Kampus</button><br />
            <button className='buttonGo btn btn-light btn-outline-primary' onClick={KafeGo} disabled={disableKafe}>Kafe</button>
            <button className='buttonGo btn btn-secondary btn-outline-dark' onClick={MallGo} disabled={disableMrkt}>Mall</button>
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
              <h4 className='hari'>Hari: {trueTrigger ? hariAftr : hari}</h4>
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
              <button className='turuBtn button btn btn-danger btn-outline-dark'>Tidur</button>
            </div>
            <div className='belajarDanMain'>
              <button className='belajarBtn button btn btn-warning btn-outline-secondary'>Belajar</button><br />
              <button className='mainBtn button btn btn-info btn-outline-secondary'>Main</button>
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

export default GamePage