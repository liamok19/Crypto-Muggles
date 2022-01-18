// create variable for the sign up DOM elements
var fullName = document.getElementById('full-name');
var email = document.getElementById('email');
var signUpBtnEl = document.getElementById('sign-up-btn');

signUpBtnEl.addEventListener("click", function(event){
event.preventDefault();

var userInfo = {
    fullName: fullName.value,
    email: email.value
};

localStorage.setItem("userInfo", JSON.stringify(userInfo));

});