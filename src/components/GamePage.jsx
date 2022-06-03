import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { FaBookReader, FaHotdog, FaBed, FaGamepad } from 'react-icons/fa';
import { SliderSetting } from './SliderSetting';
import { useNavigate } from 'react-router-dom';
import { MakanNasi, disabled, MakanKripik, MakanBuah, Tidur, Belajar, MainYu } from './ProgressBar';
import NewsGo from './NewsGo';

const GamePage = () => {
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

  const hore = useNavigate();

  //variabel karakter, nama, jurusan
  const namaChar = localStorage.getItem("karakter");
  const namaKau = localStorage.getItem("namaKamu");
  const jurusanKau = localStorage.getItem("jurusanKamu");
  const [urlImg, setUrlImg] = useState("");
  
  var trueTrigger = JSON.parse(localStorage.getItem("trueTrigger"));

  var makanVal = JSON.parse(localStorage.getItem("makan"));
  var tidurVal = JSON.parse(localStorage.getItem("tidur"));
  var belajarVal = JSON.parse(localStorage.getItem("knowledge"));
  var mainVal = JSON.parse(localStorage.getItem("sanity"));

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
          }else if(counter === 6){
            hore('/ending');
          }
        }
      }else if(trueTrigger){
        setClockMntAftr(clockMntAftr + 1.5);
        setClockHrs(clockHrsAftr);
        setClockMnt(clockMntAftr);
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
            setCounter(counter + 1);
            setCounterAftr(counterAftr + 1);
          }else if(counterAftr === 6){
            hore('/ending');
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



  //20
  //35
  //45

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
              <progress id='makanBar' className="progress" value={trueTrigger ? makanVal : 50} max='100'></progress>
              <progress id='tidurBar' className="progress" value={trueTrigger ? tidurVal : 50} max='100'></progress>
              <progress id='belajarBar' className="progress" value={trueTrigger ? belajarVal : 0} max='100'></progress>
              <progress id='mainBar' className="progress" value={trueTrigger ? mainVal : 50} max='100'></progress>
            </div>
          </div>
          <div className='buttons'>
            <div className='makanDanTuru'>
              <button className='makanBtn button btn btn-success btn-outline-dark' data-bs-target='#collapseTarget' data-bs-toggle='collapse' id='makanBtn'>Makan</button><br />
              <div className='collapse' id='collapseTarget'>
                <label><img src={require('../img/Nasi.png')} className='iconMakan' alt='nasiYa'/></label>
                <button className='buttonNest btn btn-warning' id='nasi'onClick={function(){setTimeout(MakanNasi, 3000); disabled();}}>Nasi</button><br />
                <label><img src={require('../img/Keripik.png')} className='iconMakan' alt='keripik' /></label>
                <button className='buttonNest btn btn-warning' id='keripik' onClick={function(){setTimeout(MakanKripik, 1500);disabled();}}>Snack</button><br />
                <label><img src={require('../img/Buah.png')} className='iconMakan' alt='buah' /></label>
                <button className='buttonNest btn btn-warning' id='buah' onClick={function(){setTimeout(MakanBuah, 2000);disabled();}}>Buah</button><br />
              </div>
              <button className='turuBtn button btn btn-danger btn-outline-dark' id='btnTdr' onClick={function(){setTimeout(Tidur, 3000); disabled()}}>Tidur</button>
            </div>
            <div className='belajarDanMain'>
              <button className='belajarBtn button btn btn-warning btn-outline-secondary' id='btnBljr' onClick={function(){setTimeout(Belajar, 3000);disabled()}}>Belajar</button><br />
              <button className='mainBtn button btn btn-info btn-outline-secondary' id='btnMaen' onClick={function(){setTimeout(MainYu, 3000);disabled()}}>Main</button>
            </div>
          </div>
        </div>
        <div className='headerGamepage' >
          <div className='hape'>
            <div className='content'>
              <NewsGo />
            </div>
          </div>
          <img src={urlImg} className="gambarCharYeu" alt="char" id='gambarChar' />
        </div>
      </div>
    </div>
  )
}

export default GamePage