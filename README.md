# Bonde-uppgift
Uppgift för bonde

Uppgift 1:

<script>
var nummerArray = [];
function randomization(randomizedNummer)
{  
//Skapar variabeln loops för att göra så att den loopar ett antal gånger, gjorde inte detta innuti for loopen eftersom att det inte fungerade för någon anledning
    var loops = 0;
    for(loops; loops < 10; loops++){
//Definerar saker, sammaNummer är -1 på grund av att indexOf() retunerar -1 om den inte hittade en value. Jag kollar senare om randomized är samma som -1 för att kolla om det blev samma nummer.
        sammaNummer = -1;
        minstaTal = 0;
        störstaTal = 99;
//Generera ett random nummer och roundar den till heltal
        randomizedNummer = Math.round(Math.random(minstaTal, störstaTal) * 100);
//if sats, om randomized nummret inte är samma så triggar den som true eftersom att sammaNummer inte hittade samma value, vilket blir -1.
        if(nummerArray.indexOf(randomizedNummer) == sammaNummer) {
            nummerArray.push(randomizedNummer);
        }
//Om nummret blev samma så visar den hur många gånger den blev samma, (finns ett litet nummer brevid, därför finns det en liten pil). Den tar bort 1 från loop eftersom att den inte fick ett nytt nummer och måste då göra allt på samma varv.
        else {
            console.log("<-- Antal gånger det blev samma nummer");
            loops = (loops - 1);
        }
    }
}
randomization();
console.log(nummerArray);
//Funktion för när alla nummer ska sorteras med .sort, fast man kan inte göra det till nummer, så jag skapar en funktion som kollar vilken av det förra eller the currect nummer är större genom att göra a -b för att se om det blir positivt eller negativt.
nummerArray.sort(function(a, b) {
    return a - b;
});
console.log(nummerArray)
</script>




Uppgift 2:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body> 
<!--Skapar en form, och sedan en label åt varenda input-->
    <form id="form">
        <label>Username:</label>
        <input type="text" id="uname"><br><br>
        <label>Password:</label>
        <input type="password" id="pass"><br><br>
        <label>Confirm Password:</label>
        <input type="password" id="cpass"><br><br>
        <label>Email Adress:</label>
        <input type="text" id="email"><br><br>
        <label>I have read and agreed to the terms of service:</label><br>
        <input type="checkbox" id="agree"><br><br>
<!--Skapar submit knapp som kör validate funktionen när den klickas-->
        <input type="submit" value="Sign Up" onclick="validate()"> 
    </form>
<script src="script.js"></script> <!--länkar till js script.-->
</body>
</html>

<script>
//Skapar validate funktionen.
    function validate(){ 
//Skapar alla variabler
    var password1 = document.getElementById("pass").value;
    var password2 = document.getElementById("cpass").value;
    var email = document.getElementById("email").value;
    var form = document.getElementById("form");
    var at = "@";

//Kollar om första password är samma som confirm password
    if(password1 != password2) {
        alert("Your passwords did not match");
    }
//Kollar om första password input är mindre än 6, i så fall så kör den en alert
    if (password1.length < 6) {
        alert("Password is too short");
    }
//Kollar i fall att email input har ett @ i sin string, om inte kör den en alert
    if (email.includes(at) == false) {
        alert("Not a valid email adress!");
    }
//Kollar om agree checkboxen är checkad, om inte kör den en alert
    if (document.getElementById("agree").checked == false) {
        alert("You need to agree to the terms of service first!");
    }
//Om alla vilkor i följande if sats är sanna (allt i formen är korrekt), så tar den dig till tack.html, vilket är webbsidan som tackar dig
    if (password1 == password2 && password1.length >= 6 && document.getElementById("agree").checked == true && email.includes(at)) {
        window.location.replace("tack.html");
    }

//Denna bit av kod gör så att sidan inte reloadar sidan varje gång du klickar submit.
//Skapar en funktion som stoppar submit knappen att automatiskt ladda om sidan.
function handleForm(event) { event.preventDefault(); } 
form.addEventListener("submit", handleForm);
}
</script>





Uppgift 3:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form id="form">
<!--Skapar en form och gör sedan alla inputs till required. Jag ger också password "minlength" vilket säger att den minst får vara ett visst antal bokstäver, i detta fall 6. Jag get email en type="email", vilket gör så att den automatisk checkar om emailen är valid-->
        <label>Username:</label>
        <input required type="text" id="uname"><br><br>
        <label>Password</label>
        <input minlength="6" required type="password" id="pass"><br><br>
        <label>Email:</label>
        <input required type="email" id="email"><br><br>
        <label>You agree to the terms of service:</label>
        <input required type="checkbox" id="tos"><br><br>
        <input required type="submit" name="Sign Up" id="sub">
    </form>
    <script src="script.js"></script>
</body>
</html>
