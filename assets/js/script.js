// //Syed Test scrpt push to github

// // Access toggle switch HTML element
chk.addEventListener('change', () => {
	document.body.classList.toggle('light');
});

var timeAEDT = document.querySelector(".currentTime");

timeAEDT.innerHTML = moment().format("h:mm:ss A ") + " AEDT";
// // moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"
