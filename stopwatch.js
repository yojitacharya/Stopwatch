var time = "";
var timems = 0;
var times = 0;
var timem = 0;

var timemm = "";
var timess = "";
var timemsms = "";

var mode = 1;

window.onload = function() {

    setInterval(refresh,10)  // Refreshes every 10 ms (0.01 seconds)

    document.getElementById("start-stopwatch").addEventListener("click", swap, false);
    document.getElementById("reset-stopwatch").addEventListener("click", reset, false);

    reset();

}

function refresh() {

    //When Going
    if(mode == 2) {
        timems += 1
    }

    if(timems%100==0 && !timems==0) {
        times += 1;
    }

    if(times%60==0 && !times == 0) {
        timem += 1;
    }

    console.log(mode);

    addZeroes();

    time = timemm + " : " + timess + " : " + timemsms;
    document.getElementById("stopwatch-display").innerText = time;





}

function swap() {

    if(mode == 1) {
        mode = 2;
        return;
    }

    if(mode == 2) {
        mode = 1;
        return;
    }
    
}

function reset() {

    timems = 0;
    times = 0;
    timem = 0;
    time = 0;

    timemsms = "";
    timess = "";
    timemm = "";

    mode = 1;

}

function addZeroes() {

    timem = timem%99;

    times = times%60;

    timems = timems%100;
    
    if(timem < 10) {
        timemm = "0" + timem;
    }

    else if(timem >= 10) {
        timemm = timem;
    }

    if(times < 10) {
        timess = "0" + times
    }

    else if(times >= 10) {
        timess = times;
    }

    if(timems <10) {
        timemsms = "0" + timems;
    }

    else if(timems >= 10) {
        timemsms = timems;
    }

}