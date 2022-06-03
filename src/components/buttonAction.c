<div class="aktivitas container-fluid mb-3 mt-3 text-center">
            <div class="row">
                <div class="groupBtn col-md-12 mb-2">
                    <button id="btnMakan" class="btn btn-primary" onclick="makanGambar(); setTimeout(Makan, 2000); disable(); ">Makan & Minum</button>
                </div>
                <div class="groupBtn col-md-12 mb-2">
                    <button id="btnTidur" class="btn btn-primary" onclick="tidurGambar(); setTimeout(Tidur, 2000); disable();">Tidur</button>
                </div>
                <div class="groupBtn col-md-12 mb-2">
                    <button id="btnGame" class="btn btn-primary" onclick="gameGambar(); setTimeout(Main, 2000); disable();">Main Game</button>
                </div>
                <div class="groupBtn col-md-12 mb-2">
                    <button id="btnBljr" class="btn btn-primary" onclick="belajarGambar(); setTimeout(Belajar, 2000); disable();">Belajar</button>
                </div>
            </div>
        </div>
    </div>

    var hungerStatus = document.getElementById("mangan");
    var sleepyStatus = document.getElementById("turu");
    var funStatus = document.getElementById("dolanan");
    var studyStatus = document.getElementById("sinau");

    function manganGambar(){
        document.getElementById("characternya").src = "images/makan.png";
    }

    function Makan(){
        hungerStatus.value += 1.5;
        sleepyStatus.value -= 0.5;
        funStatus.value -= 0.5;
        studyStatus.value -= 0.5;

        enable();
        balikChar();
    }

    function laper(){
        hungerStatus.value -= 1;

        if(hungerStatus.value <= 1){
            window.alert("Makan dulu gan");
        }
    }
    setInterval(laper, 20000);

    function tidurGambar(){
        document.getElementById("characternya").src = "images/tidur.png";
    }

    function Tidur(){
        hungerStatus.value -= 0.5;
        sleepyStatus.value += 1.5;
        funStatus.value -= 0.5;
        studyStatus.value -= 0.5;

        enable();
        balikChar();
    }

    function ngantuk(){
        sleepyStatus.value -= 1;

        if(sleepyStatus.value <= 1){
            window.alert("Tidur dulu gan");
        }
    }
    setInterval(ngantuk, 20000);

    function gameGambar(){
        document.getElementById("characternya").src = "images/main.png";
    }

    function Main(){
        hungerStatus.value -= 0.5;
        sleepyStatus.value -= 0.5;
        funStatus.value += 1.5;
        studyStatus.value -= 0.5;

        enable();
        balikChar();
    }

    function bosen(){
        funStatus.value -= 1;

        if(funStatus.value <= 1){
            window.alert("Mabar dulu gan");
        }
    }
    setInterval(bosen, 20000);

    function belajarGambar(){
        document.getElementById("characternya").src = "images/belajar.png";
    }

    function Belajar(){
        hungerStatus.value -= 0.5;
        sleepyStatus.value -= 0.5;
        funStatus.value -= 0.5;
        studyStatus.value += 1.5;


        enable();
        balikChar();
    }

    function kurangBljr(){
        studyStatus.value -= 1;

        if(studyStatus.value <= 1){
            window.alert("Belajar gih gan");
        }
    }
    setInterval(kurangBljr, 20000);

    function balikChar(){
        if(charChoice == "laki"){
            document.getElementById("characternya").src = "images/male.png";
        }else{
            document.getElementById("characternya").src = "images/female.png";
        }
    }

    function enable(){
        document.getElementById("btnMangan").disabled = false;
        document.getElementById("btnTuru").disabled = false;
        document.getElementById("btnDolanan").disabled = false;
        document.getElementById("btnSinau").disabled = false;
    }

    function disable(){
        document.getElementById("btnMangan").disabled = true;
        document.getElementById("btnTuru").disabled = true;
        document.getElementById("btnDolanan").disabled = true;
        document.getElementById("btnSinau").disabled = true;
    }
