function lbsToOz() {
    var pounds = document.getElementById("numPounds").value;
    var ounces = pounds * 16;

    var result = "<p>Result in Ounces (oz): " + ounces + "</p>";
    var calculation = "<p>Calculation: " + pounds + " (lbs) * 16 = "+ ounces +"</p>";

    document.getElementById("lbsToOzResult").innerHTML = result;
    document.getElementById("lbsToOzCalculationInfo").innerHTML = calculation;
}

function ozToLbs() {
    var ounces = document.getElementById("numOunces").value;
    var pounds = ounces / 16;

    var result = "<p> Result in pounds (lbs): "+ pounds +"</p>";
    var calculation = "<p>Calculation: " + ounces + " (oz) / 16 = "+ pounds +"</p>";

    document.getElementById("ozToLbsResult").innerHTML = result;
    document.getElementById("ozToLbsCalculationInfo").innerHTML = calculation;
}