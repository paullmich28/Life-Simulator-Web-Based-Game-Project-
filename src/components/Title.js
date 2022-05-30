import React from 'react';
import { SliderSetting } from './SliderSetting';
import {useEffect, useState} from 'react';

const Title = () => {
    const namaChar = localStorage.getItem("karakter");
    const namaKau = localStorage.getItem("namaKamu");
    const jurusanKau = localStorage.getItem("jurusanKamu");
    const [urlImg, setUrlImg] = useState("");
  
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
        <h2 className="salam"> Halo {namaKau}</h2>
        <img src={urlImg} className="gambarCharYeu" alt="char" />
        <h3 className='jurusan'>Jurusan: {jurusanKau}</h3>
      </div>
    )
}

export default Title