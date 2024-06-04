let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let displayMinutes = document.querySelector('.minutes');
let displaySeconds = document.querySelector('.seconds');
let displayMilliseconds = document.querySelector('.milliseconds');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let btnLap = document.querySelector('.btn-lap');
let btnClearAll = document.querySelector('.btn-clear-all');
let interval;
let lapCounter = 1;

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startStopwatch, 10);
});

btnStop.addEventListener('click', () => {
    clearInterval(interval);
});

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displayTime();
    lapCounter = 1;
});

btnLap.addEventListener('click', () => {
    recordLap();
});

btnClearAll.addEventListener('click', () => { 
    clearLaps();
    lapCounter = 1; 
});

function startStopwatch() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
    }
    displayTime();
}

function displayTime() {
    displayMinutes.textContent = padTime(minutes);
    displaySeconds.textContent = padTime(seconds);
    displayMilliseconds.textContent = padTime(milliseconds);
}

function padTime(time) {
    return (time < 10 ? '0' : '') + time;
}

function recordLap() {
    const lapList = document.querySelector('.laps');
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCounter}: ${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
    lapList.appendChild(lapItem);
    lapCounter++; 
}    

function clearLaps() {
    const lapList = document.querySelector('.laps');
    lapList.innerHTML = '';
}
