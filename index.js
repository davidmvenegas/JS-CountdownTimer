const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const thisYear = new Date().getFullYear()
const newYears = new Date(`January 01 ${thisYear + 1} 00:00:00`)

function countdown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()
    const totalSeconds = new Date(newYearsDate - currentDate) / 1000
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const mins = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    daysEl.innerHTML = days
    hoursEl.innerHTML = hours
    minsEl.innerHTML = mins
    secondsEl.innerHTML = seconds
}

countdown()

setInterval(countdown, 1000)