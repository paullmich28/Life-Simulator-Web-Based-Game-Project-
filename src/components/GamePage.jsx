import React, { useEffect } from 'react';
import { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { FaBookReader } from 'react-icons/fa';
import { SliderSetting } from './SliderSetting';

const GamePage = () => {
  //Variable progress bar
  const [makan, setMakan] = useState(60);
  const [turu, setTuru] = useState(60);
  const [belajar, setBelajar] = useState(60);
  const [mabar, setMabar] = useState(60);

  //variable jam
  const [clockHrs, setClockHrs] = useState(new Date().getHours());
  const [clockMnt, setClockMnt] = useState(0);

  //variable buat ngatur background
  const [background, setBackground] = useState("");

  //variabel karakter, nama, jurusan
  const namaChar = localStorage.getItem("karakter");
  const namaKau = localStorage.getItem("namaKamu");
  const jurusanKau = localStorage.getItem("jurusanKamu");
  const [urlImg, setUrlImg] = useState("");

  //variabel sapa
  const [sapa, setSapa] = useState("");

  //Jam
  useEffect(()=>{
    var clock;
    clock = setInterval(()=>{
      setClockMnt(clockMnt + 10);
      
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
  

  return (
    <div className={background}>
      <div className='container'>
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
        <h2 className="salam">{sapa} {namaKau}</h2>
        <div className='headerGamepage' >
          <img src={urlImg} className="gambarCharYeu" alt="char" />
          <h3 className='jurusan'>Jurusan: {jurusanKau}</h3>
        </div>
      </div>
    </div>
  )
}

export default GamePage