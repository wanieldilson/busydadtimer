var targetTime;
var remainingTime = 0;
var countdownInterval;

// set the target time to 20 minutes from now
function setTargetTime() {
    targetTime = new Date();
    targetTime.setMinutes(targetTime.getMinutes() + 20);
}

// update the countdown timer every second
function updateCountdown() {
    // get the current time
    var now = new Date();

    // calculate the remaining time until the target time
    remainingTime = targetTime.getTime() - now.getTime();

    // if the remaining time is negative, clear the countdown interval
    if (remainingTime < 0) {
        clearInterval(countdownInterval);
        remainingTime = 0;
    }

    // convert the remaining time to minutes and seconds
    var minutes = Math.floor(remainingTime / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // pad the minutes and seconds with leading zeros if necessary
    minutes = (minutes < 10 ? '0' : '') + minutes;
    seconds = (seconds < 10 ? '0' : '') + seconds;

    // update the HTML content of the countdown timer container
    var countdown = document.getElementById('countdown');
    countdown.innerHTML = minutes + ':' + seconds;
}

// start the countdown timer
function startCountdown() {
    if (!countdownInterval) {
        setTargetTime();
        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    }
}

// stop the countdown timer
function stopCountdown() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
}

// reset the countdown timer
function resetCountdown() {
    stopCountdown();
    setTargetTime();
    remainingTime = 0;
    updateCountdown();
}

// add event listeners to the buttons
var startButton = document.getElementById('start-button');
startButton.addEventListener('click', startCountdown);

var stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', stopCountdown);

var resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetCountdown);