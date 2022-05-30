import React from 'react';
import { SliderSetting } from './SliderSetting';
import {useEffect, useState} from 'react';

const Title = () => {
    const namaChar = localStorage.getItem("karakter");
    const namaKau = localStorage.getItem("namaKamu");
    const jurusanKau = localStorage.getItem("jurusanKamu");
    const [urlImg, setUrlImg] = useState("");
    const [curTime, setCurTime] = useState(new Date().getHours());
    const [sapa, setSapa] = useState("");
    //console.log(curTime);

    setInterval(function(){
        setCurTime(new Date().getHours());

        if(curTime >= 5 && curTime < 11){
            setSapa("Selamat pagi!");
        }else if(curTime >= 11 && curTime < 19){
            setSapa("Selamat sore!");
        }else{
            setSapa("Selamat malam!");
        }
    },200)

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
  
    return (
      <div className='headerGamepage'>
        <h2 className="salam"> {sapa} {namaKau}</h2>
        <img src={urlImg} className="gambarCharYeu" alt="char" />
        <h3 className='jurusan'>Jurusan: {jurusanKau}</h3>
      </div>
    )
}

export default Title