// create variable for the sign up DOM elements
var fullName = document.getElementById('full-name');
var email = document.getElementById('email');
var signUpBtnEl = document.getElementById('sign-up-btn');
var greeting = document.getElementById('greeting');

// called the function so it stays when page reloads
renderName();

// created a function to save the user information
function saveUserInfo() {
    var userInfo = {
        fullName: fullName.value,
        email: email.value
    }
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
};

// created a function to render the name on the header
function renderName() {
    var lastUserName = JSON.parse(localStorage.getItem("userInfo"));
    console.log(lastUserName);

    if (lastUserName !== null) {
        $('#log-in').remove();
        
    } if (lastUserName !== null) {
        $('#greeting').text("Hi, " + lastUserName.fullName);
        
    }
}

function clearArea() {
    fullName.value = "";
    email.value = "";
}

// created a click event listener
signUpBtnEl.addEventListener("click", function (event) {
    event.preventDefault();
    saveUserInfo();
    renderName();
    clearArea();
});

