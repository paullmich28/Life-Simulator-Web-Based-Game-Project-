import React from 'react';
import {useNavigate} from "react-router-dom";

const IsiNama = ({validation1, validation2}) => {

  const history = useNavigate();

  function getInputNama(e){
    const dapetNama = e.target.value;
    localStorage.setItem("namaKamu",dapetNama);

    if(dapetNama){
      validation1 = true;
    }
  }

  function getInputJurusan(e){
    const dapetJurusan = e.target.value;
    localStorage.setItem("jurusanKamu",dapetJurusan);

    if(dapetJurusan){
      validation2 = true;
    }
  }

  function validate(e){
    if(!validation1 && !validation2){
      e.preventDefault();
      alert("Masukkan nama dan jurusan kamu dulu!");
    }else if(!validation1 && validation2){
      e.preventDefault();
      alert("Masukkan nama kamu dulu!");
    }else if(validation1 && !validation2){
      e.preventDefault();
      alert("Pilih jurusan kamu dulu!");
    }else{
      validation1 = false;
      validation2 = false;
      e.preventDefault();
      history('/loading');
    }
  }

  return (
    <div className="formIsi">
      <form>
        <input className="inputnyaNi" type="text" placeholder="Masukkan Nama Anda" onChange={getInputNama} /><br />
        <div className="pilihHayu">
          <h4 className="transisiInput">Silahkan Pilih Jurusan Anda.</h4>
          <select className="pilihanJurusan" onChange={getInputJurusan}>
            <option value="Informatika">Informatika</option>
            <option value="Sistem Informasi">Sistem Informasi</option>
            <option value="DKV">DKV</option>
            <option value="Film & Animasi">Film & Animasi</option>
          </select>
        </div>
        <br />
        <button className="btn btn-dark btn-outline-danger" onClick={validate}>Let's Go!</button>
      </form>
    </div>
  )
}

export default IsiNama