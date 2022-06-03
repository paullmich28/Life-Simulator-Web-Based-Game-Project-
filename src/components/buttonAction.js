import "./styles.css";

export default function buttonAction() {
  return (
    <div class="aktivitas container-fluid mb-3 mt-3 text-center">
            <div class="row">
                <div class="groupBtn col-md-12 mb-2">
                    <button id="btnMakan" class="btn btn-primary" onclick="makanGambar(); setTimeout(makan, 2000); disable(); ">Makan & Minum</button>
                </div>
                <div class="groupBtn col-md-12 mb-2">
                    <button id="btnTidur" class="btn btn-primary" onclick="tidurGambar(); setTimeout(tidur, 2000); disable();">Tidur</button>
                </div>
                <div class="groupBtn col-md-12 mb-2">
                    <button id="btnMain" class="btn btn-primary" onclick="gameGambar(); setTimeout(main, 2000); disable();">Main Game</button>
                </div>
                <div class="groupBtn col-md-12 mb-2">
                    <button id="btnBljr" class="btn btn-primary" onclick="belajarGambar(); setTimeout(belajar, 2000); disable();">Belajar</button>
                </div>
            </div>
        </div>

    var hungerStatus = document.getElementById("Makan");
    var sleepyStatus = document.getElementById("Tidur");
    var funStatus = document.getElementById("Main");
    var studyStatus = document.getElementById("Bljr");

    function makanGambar(){
        document.getElementById("characternya").src = "images/makan.png";
    }

    function makan(){
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

    function tidur(){
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

    function main(){
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

    function belajar(){
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
        document.getElementById("btnMakan").disabled = false;
        document.getElementById("btnTidur").disabled = false;
        document.getElementById("btnMain").disabled = false;
        document.getElementById("btnBljr").disabled = false;
    }

    function disable(){
        document.getElementById("btnMakan").disabled = true;
        document.getElementById("btnTidur").disabled = true;
        document.getElementById("btnMain").disabled = true;
        document.getElementById("btnBljr").disabled = true;
    }
  );
}
