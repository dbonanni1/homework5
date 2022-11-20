// Add js here.
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var slower = document.getElementById("slower");
var faster = document.getElementById("faster");
var skip = document.getElementById("skip");
var mute = document.getElementById("mute");
var slider = document.getElementById("slider");
var volume = document.getElementById("volume");
var vid = document.getElementById("videoplayer");
vid.load();
vid.loop = false;
vid.autoplay = false;

play.addEventListener("click", playVid);
function playVid() {
    vid.play();
}

pause.addEventListener("click", pauseVid);
function pauseVid() {
    vid.pause();
}

mute.addEventListener("click", muteVid);
let clicked = true;
function muteVid(){
    if (clicked == true) {
        vid.muted = true;
        mute.innerHTML = "Unmute";
        clicked = false;
    }
    else{
        vid.muted = false;
        mute.innerHTML = "Mute"
        clicked = true;
    }
}

slower.addEventListener("click", slowVid);
function slowVid(){
    if(vid.playbackRate == 2.0){
        vid.playbackRate = 1.0;
    }
    else if (vid.playbackRate == 1.0){  
        vid.playbackRate = 0.5;
        alert("Video is at slowest speed!")
    }       
}

faster.addEventListener("click", fastVid);
function fastVid() {
    if(vid.playbackRate == 0.5){
        vid.playbackRate = 1.0;
    }
    else if (vid.playbackRate == 1.0){
        vid.playbackRate = 2.0;
        alert("Video is at fastest speed!")
    }
}

