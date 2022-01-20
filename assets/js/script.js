// Access toggle switch HTML element
chk.addEventListener('change', () => {
	document.body.classList.toggle('light');
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