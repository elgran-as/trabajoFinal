/*------reproductor de video--------------*/

const video = document.getElementById('video');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const progress = document.getElementById('progress');
const currentTime = document.getElementById('currentTime');
const duration = document.getElementById('duration');

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}   

video.addEventListener('timeupdate', () => {
const progressValue = (video.currentTime / video.duration) * 100;
progress.style.width = progressValue + '%';
currentTime.textContent = formatTime(video.currentTime);
});

video.addEventListener('loadedmetadata', () => {
duration.textContent = formatTime(video.duration);
});

function formatTime(time) {
const minutes = Math.floor(time / 60);
const seconds = Math.floor(time % 60);
return `${padDigits(minutes)}:${padDigits(seconds)}`;
}

function padDigits(number) {
return number < 10 ? '0' + number : number;
}

/*----rompecabezas----*/

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const imagen= document.getElementById(data);
    imagen.style.width="275px"
    imagen.style.height="400px"
    event.target.appendChild(imagen);
}

function allowDrop(event) {
    event.preventDefault();
}

function reiniciar() {
    location.reload();
}

document.querySelector('.botonReiniciar').addEventListener('click', reiniciar);function allowDrop(event) {
    event.preventDefault();
}