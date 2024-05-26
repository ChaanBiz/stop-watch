let seconds = 0
let interval = null
const time = document.getElementById("time")
const start = document.getElementById("start")
const stoP = document.getElementById("stop")
const reset = document.getElementById("reset")

function padStart(value) {
    return String(value).padStart(2, "0")
}

function setTime() {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    time.innerText = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
    seconds++
    setTime()
}

function startClock() {
    if (interval) stopClock()
    interval = setInterval(timer, 1000)
}

function stopClock() {
    clearInterval(interval)
}

function resetClock() {
    stopClock()
    seconds = 0
    setTime()
}

start.addEventListener("click", function() {
    startClock()
})

stoP.addEventListener("click", function() {
    stopClock()
})

reset.addEventListener("click", function() {
    resetClock()
})