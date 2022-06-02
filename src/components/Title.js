import React from 'react';
import { SliderSetting } from './SliderSetting';
import {useEffect, useState} from 'react';

const Title = () => {
    const namaChar = localStorage.getItem("karakter");
    const namaKau = localStorage.getItem("namaKamu");
    const jurusanKau = localStorage.getItem("jurusanKamu");
    const [urlImg, setUrlImg] = useState("");
    const curTime = new Date().getHours();
    //console.log(curTime);

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

        if(curTime >= 5 && curTime < 11){
            alert("Selamat pagi dan selamat bermain! " + namaKau);
        }else if(curTime >= 11 && curTime < 15){
            alert("Selamat siang dan selamat bermain! " + namaKau);
        }else if(curTime >= 15 && curTime < 19){
            alert("Selamat sore dan selamat bermain! " + namaKau);
        }else if(curTime >= 19 || curTime < 5){
            alert("Selamat malam dan selamat bermain! " + namaKau)
        }

    },[namaChar])
  
    return (
      <div className='headerGamepage' >
        <h2 className="salam">{namaKau}</h2>
        <img src={urlImg} className="gambarCharYeu" alt="char" />
        <h3 className='jurusan'>Jurusan: {jurusanKau}</h3>
      </div>
    )
}

export default Title