
let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
var round = 0;
var rest = 0;
let timer = null;
let roundTime = document.getElementById("roundTime");
let restTime = document.getElementById("restTime");


function stopwatch (){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++
        if(minutes == 60){
            minutes = 0;
            hours++
        }
    }
    
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;



    displayTime.innerHTML = h +":"+ m +":"+ s;
}

function watchStart(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);

}

function watchStop (){
    clearInterval (timer);
}

function watchReset (){
    clearInterval (timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
    round += 1;
    roundTime.innerHTML = round;
    if(round > 4){
    rest += 1;
    restTime.innerHTML = rest;
}
}

function ResetAll (){
    clearInterval (timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
    round = 0;
    roundTime.innerHTML = round;
    rest = 0;
    restTime.innerHTML = rest;
}