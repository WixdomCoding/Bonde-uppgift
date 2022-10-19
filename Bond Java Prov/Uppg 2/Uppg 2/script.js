function validate(){
    var password1 = document.getElementById("pass").value;
    var password2 = document.getElementById("cpass").value;
    var email = document.getElementById("email").value;
    var form = document.getElementById("form");
    var at = "@";

    if(password1 != password2) {
        alert("Your passwords did not match");
    }
    if (password1.length < 6) {
        alert("Password is too short");
    }
    if (email.includes(at) == false) {
        alert("Not a valid email adress!");
    }
    if (document.getElementById("agree").checked == false) {
        alert("You need to agree to the terms of service first!");
    }
    if (password1 == password2 && password1.length >= 6 && document.getElementById("agree").checked == true && email.includes(at)) {
        window.location.replace("tack.html");
    }

function handleForm(event) { event.preventDefault(); } 
form.addEventListener("submit", handleForm);
}