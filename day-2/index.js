const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.
function christmasTheme() {
    // console.log("Christmas Theme!")
    body.className = "christmas"
}

function snowTheme() {
    // console.log("Snow Theme!")
    body.className = "snow"
}

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  // chane the theme of the website
  document.body.classList.toggle("snow");
});
