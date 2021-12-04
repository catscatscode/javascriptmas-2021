const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")
const body = document.querySelector("body")


function christmassify() {
  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.
  greeting.innerHTML = "🎄 Merry Christmas! 🎁"
  greeting.style.font = "bold 40px comforter,serif"
  body.style.background = "#C7375F"
  btn.style.display = "none"
}

//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.
