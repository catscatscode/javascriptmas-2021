const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    let today = (new Date()).getDate()
    // - Calculate remaining days.
    let countdown = christmas - today
    // - Display remaining days in countdownDisplay.
    countdownDisplay.textContent = countdown
}

renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.
