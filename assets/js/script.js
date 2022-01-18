// //Syed Test scrpt push to github

// // Access toggle switch HTML element
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".body");

// Set default mode to dark
var mode = "dark";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function() {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.classList.remove("dark")
    container.setAttribute("class", "light");
  }
  // If mode is light, apply dark background 
  else {
    mode = "dark";
    container.classList.remove("light")
    container.setAttribute("class", "dark");
  }
});

var timeAEDT = document.querySelector(".currentTime");

timeAEDT.innerHTML = moment().format("h:mm:ss A ") + " AEDT";
// // moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"

