import React from 'react';
import {useNavigate} from "react-router-dom";

const IsiNama = ({validation}) => {

  const history = useNavigate();

  function getInputNama(e){
    const dapetNama = e.target.value;
    localStorage.setItem("namaKamu",dapetNama);

    if(dapetNama){
      validation = true;
    }
  }

  function getInputJurusan(e){
    const dapetJurusan = e.target.value;
    localStorage.setItem("jurusanKamu",dapetJurusan);
  }

  function validate(e){
    if(!validation){
      e.preventDefault();
      alert("Masukkan nama kamu dulu!");
    }else{
      validation = false;
      e.preventDefault();
      history('/gamepage');
    }
  }

  return (
    <div className="formIsi">
      <form>
        <input className="inputnyaNi" type="text" placeholder="Masukkan Nama Anda" onChange={getInputNama} /><br />
        <div className="pilihHayu">
          <h4 className="transisiInput">Silahkan Pilih Jurusan Anda.</h4>
          <select className="pilihanJurusan" defaultValue="Informatika" onChange={getInputJurusan}>
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