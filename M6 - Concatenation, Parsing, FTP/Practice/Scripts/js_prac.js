function convertCelsToFahr() {
    var celsius = parseFloat(document.getElementById("txtCelsius").value);
    var farhrenheit = (celsius * 1.8) + 32;
    farhrenheit.toFixed(1);

    var output = "<p>"+ celsius + "&deg;C in farhrenheit is: "+ farhrenheit +"&deg;F</p>"
    document.getElementById("tempConversionResult").innerHTML = output;
}

function getAgeInfo() {
    var result
    var birthDate = new Date(document.getElementById("birthDate").value);
    var today = new Date();

    var currentAge = getCurrentAge(birthDate);
    result = "<p>Our best guess at your current age is: "+ currentAge +".</p>"
    document.getElementById("currentAgeResult").innerHTML = result;
}

function getCurrentAge(birthDate) {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();

    if ((monthDiff < 0) || ((monthDiff === 0 ) && (today.getDate() < birthDate.getDate()))) {
        age--;
    }

    return age;
}