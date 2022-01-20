var logo = document.getElementById('logo');
var currentTime = document.querySelector(".currentTime");
var login = document.querySelector(".logIn-btn")
var title = document.querySelector(".title");
var newstitle = document.querySelector(".newstitle");
var chart = document.querySelector(".chartText");
var signUp = document.querySelector("#signUpLine")
// // Access toggle switch HTML element
chk.addEventListener('change', () => {
	document.body.classList.toggle('light');
	if (document.body.classList.contains('light')){
		logo.src = "./assets/images/logo-light.png";
		logo.style.height = '7rem';
		currentTime.style.color = "#202125";
		login.style.color = "#202125";
		title.style.color = "#202125";
		newstitle.style.color = "#202125";
		signUp.style.color = "#202125";
		
	}else{
		logo.src = "./assets/images/headerIcon.png"
		logo.setAttribute("style", "width:30rem;");
		currentTime.style.color = "#fcfcfc";
		login.style.color = "#fcfcfc";
		title.style.color = "rgb(179,179,179,1)";
		newstitle.style.color = "rgb(179,179,179,1)";
		signUp.style.color = "rgb(179,179,179,1)";

		
	}
});
chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});
var timeHeader = document.querySelector(".currentTime");


// creating a ticking time on the header

setInterval (() => {
	const time = new Date ();
	const hour = time.getHours();
	const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();
	const ampm = hour >=12 ? 'PM' : 'AM';

	timeHeader.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes) + ':' + (seconds < 10? '0'+seconds: seconds) + ` ` + `<span id="am-pm">${ampm}</span>`

}, 1000);