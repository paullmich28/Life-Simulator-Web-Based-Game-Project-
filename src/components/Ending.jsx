import React, { useState } from 'react'

const Ending = () => {
    var makanVal = JSON.parse(localStorage.getItem("makan"));
    var tidurVal = JSON.parse(localStorage.getItem("tidur"));
    var belajarVal = JSON.parse(localStorage.getItem("knowledge"));
    var mainVal = JSON.parse(localStorage.getItem("sanity"));
    const [kalimat, setKalimat] = useState("");

    if((makanVal <= 25 && tidurVal <= 25) && (belajarVal >= 60 && mainVal <= 25)){
        setKalimat("Wah! Kamu rajin banget belajarnya! Tapi, perhatikan gizi sama kewarasan kamu juga ya! Nanti gila");
    }else if((makanVal >= 35 && tidurVal >= 35) && (belajarVal <= 35 && mainVal >= 35)){
        setKalimat("Inilah kehidupan seorang mahasiswa yang sangat biasa-biasa saja");
    }else if((makanVal >= 60 && tidurVal >= 50) && (belajarVal <= 30 && mainVal >= 50)){
        setKalimat("Kaum-kaum rebahan seperti kamu memang mantap! Lain kali, rebahan aja terus gausah belajar!");
    }else if((makanVal >= 35 && tidurVal >= 35) && (belajarVal >= 50 && mainVal <= 35)){
        setKalimat("Kamu adalah mahasiswa berprestasi yang akan jadi anak emas dosen!");
    }

    return (
        <div className='header1'>
            <h1>{kalimat}</h1>
        </div>
    )
}

export default Ending