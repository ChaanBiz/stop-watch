let seconds = 0
let interval = null
const time = document.getElementById("time")
const start = document.getElementById("start")

function setTime() {
    time.innerText = seconds;
}

function timer() {
    seconds++
    setTime()
}

function startClock() {
    interval = setInterval(timer, 1000)
}

function stopClock() {

}

function resetClock() {

}

start.addEventListener("click", function() {
    startClock()
})