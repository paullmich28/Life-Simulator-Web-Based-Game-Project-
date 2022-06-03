export function Laper(){
    document.getElementById("makanBar").value -= 2;
    if(document.getElementById("makanBar").value === 15){
        window.alert("Makan dulu gih")
    }

    if(document.getElementById("makanBar").value <= 0){
        document.getElementById("makanBar").value = 0;
    }
}

setInterval(()=>{
    Laper();
    localStorage.setItem("makan",document.getElementById("makanBar").value);
},20000);

export function Ngantuk(){
    document.getElementById("tidurBar").value -= 2;
    if(document.getElementById("tidurBar").value === 15){
        window.alert("tidur dulu gih!");
    }

    if(document.getElementById("tidurBar").value <= 0){
        document.getElementById("tidurBar").value = 0;
    }
}

setInterval(()=>{
    Ngantuk();
    localStorage.setItem("tidur",document.getElementById("tidurBar").value);
},20000)

export function Tidur(){
    document.getElementById("tidurBar").value += 40;
    document.getElementById("makanBar").value -= 10;
    document.getElementById("mainBar").value -= 10;
    document.getElementById("belajarBar").value -= 6;

    enabled();
}

export function MakanNasi(){
    document.getElementById("makanBar").value += 40;
    document.getElementById("tidurBar").value -= 5;
    document.getElementById("mainBar").value -= 5;
    document.getElementById("belajarBar").value -= 2;

    enabled();
}

export function MakanKripik(){
    document.getElementById("makanBar").value += 20;
    document.getElementById("tidurBar").value -= 5;
    document.getElementById("mainBar").value -= 5;
    document.getElementById("belajarBar").value -= 5;

    enabled();
}

export function MakanBuah(){
    document.getElementById("makanBar").value += 30;
    document.getElementById("tidurBar").value -= 5;
    document.getElementById("mainBar").value -= 5;
    document.getElementById("belajarBar").value += 5;

    enabled();
}

export function Belajar(){
    document.getElementById("belajarBar").value += 25;
    document.getElementById("makanBar").value -= 10;
    document.getElementById("tidurBar").value -= 13;
    document.getElementById("mainBar").value -= 15;

    enabled();
}

export function KnowledgeDec(){
    if(document.getElementById("belajarBar").value >= 0){
        document.getElementById("belajarBar").value -= 2;
    }

    if(document.getElementById("belajarBar").value <= 0){
        document.getElementById("belajarBar").value = 0;
    }
}

setInterval(()=>{
    KnowledgeDec();
    localStorage.setItem("knowledge",document.getElementById("belajarBar").value);
},20000)

export function MainYu(){
    document.getElementById("belajarBar").value -= 8;
    document.getElementById("makanBar").value -= 4;
    document.getElementById("tidurBar").value -= 5;
    document.getElementById("mainBar").value += 30;

    enabled();
}

export function Stress(){
    document.getElementById("mainBar").value -= 2;
    if(document.getElementById("mainBar").value <= 0){
        document.getElementById("mainBar").value = 0;
    }
    if(document.getElementById("mainBar").value === 15){
        window.alert("Main dulu gih!")
    }
}

setInterval(()=>{
    Stress();
    localStorage.setItem("sanity",document.getElementById("mainBar").value);
},20000)

export function enabled(){
    document.getElementById("nasi").disabled = false;
    document.getElementById("keripik").disabled = false;
    document.getElementById("buah").disabled = false;
    document.getElementById("btnTdr").disabled = false;
    document.getElementById("btnBljr").disabled = false;
    document.getElementById("btnMaen").disabled = false;
}

export function disabled(){
    document.getElementById("nasi").disabled = true;
    document.getElementById("keripik").disabled = true;
    document.getElementById("buah").disabled = true;
    document.getElementById("btnTdr").disabled = true;
    document.getElementById("btnBljr").disabled = true;
    document.getElementById("btnMaen").disabled = true;
}