var logo = document.getElementById('logo');
var currentTime = document.querySelector(".currentTime");
var login = document.querySelector(".logIn-btn")
var title = document.querySelector(".text-light");
// // Access toggle switch HTML element
chk.addEventListener('change', () => {
	document.body.classList.toggle('light');
	if (document.body.classList.contains('light')){
		logo.src = "./assets/images/logo-light.png";
		logo.style.height = '10.5rem';
		currentTime.style.color = "#202125";
		login.style.color = "#202125";
		title.style.color = "#202125!important";
		
	}else{
		logo.src = "./assets/images/headerIcon.png"
		logo.setAttribute("style", "width:30rem;")
		currentTime.style.color = "#fcfcfc";
		login.style.color = "#fcfcfc";
		title.style.color = "#f8f9fa!important";
		
	}
});
chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});



var timeAEDT = document.querySelector(".currentTime");

timeAEDT.innerHTML = moment().format("h:mm:ss A ") + " AEDT";
// // moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"
