let homepoint = 0
let guestpoint = 0
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

function leader() {
    if (homepoint > guestpoint) {
        // Home mène
        homeEl.style.border = "3px solid green"
        guestEl.style.border = "none"
    } else if (guestpoint > homepoint) {
        // Guest mène
        guestEl.style.border = "3px solid green"
        homeEl.style.border = "none"
    } else {
        // Égalité
        homeEl.style.border = "none"
        guestEl.style.border = "none"
    }
}

function homeAdd1() {
    homepoint += 1
    homeEl.textContent = homepoint
    leader()
}

function homeAdd2() {
    homepoint += 2
    homeEl.textContent = homepoint
    leader()
}

function homeAdd3() {
    homepoint += 3
    homeEl.textContent = homepoint
    leader()
}

function guestAdd1() {
    guestpoint += 1
    guestEl.textContent = guestpoint
    leader()
}

function guestAdd2() {
    guestpoint += 2
    guestEl.textContent = guestpoint
    leader()
}

function guestAdd3() {
    guestpoint += 3
    guestEl.textContent = guestpoint
    leader()
}

function newgame() {
    guestpoint = 0
    homepoint = 0
    guestEl.textContent = guestpoint
    homeEl.textContent = homepoint
    leader()
}
