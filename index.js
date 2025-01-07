let homeScore = 0
let guestScore = 0
let uniSeconds = 0
let decaSeconds = 0
let minutes = 0

function add(team, amount) {
    if (team == 'home') {
        homeScore += amount
        document.getElementById("home-score").textContent = homeScore
    } else {
        guestScore += amount
        document.getElementById("guest-score").textContent = guestScore
    }
    statRecognition()
}

function timer() {
    if ((decaSeconds == 5) && (uniSeconds == 9)) {
        minutes++
        uniSeconds = 0
        decaSeconds = 0
    } else {
        if (uniSeconds != 9) {
            uniSeconds++
        } else {
            decaSeconds++
            uniSeconds = 0
        }
    }
    document.getElementById("uni-seconds").textContent = uniSeconds
    document.getElementById("deca-seconds").textContent = decaSeconds
    document.getElementById("minutes").textContent = minutes
}

function statRecognition() {
    if (homeScore > guestScore) {
        document.getElementById("home-title").style.color = "#FCD34D"
        document.getElementById("guest-title").style.color = "#ffffff"
    } else if (guestScore > homeScore) {
        document.getElementById("guest-title").style.color = "#FCD34D"
        document.getElementById("home-title").style.color = "#ffffff"
    } else {
        document.getElementById("home-title").style.color = "#C4B5FD"
        document.getElementById("guest-title").style.color = "#C4B5FD"
    }
}

function newGame() {
    homeScore = 0
    guestScore = 0
    uniSeconds = 0
    decaSeconds = 0
    minutes = 0
    document.getElementById("home-score").textContent = homeScore
    document.getElementById("guest-score").textContent = guestScore
    document.getElementById("uni-seconds").textContent = uniSeconds
    document.getElementById("deca-seconds").textContent = decaSeconds
    document.getElementById("minutes").textContent = minutes
    document.getElementById("home-title").style.color = "#ffffff"
    document.getElementById("guest-title").style.color = "#ffffff"
}

setInterval(timer, 1000)