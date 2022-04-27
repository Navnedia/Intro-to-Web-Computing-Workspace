/**
 * I know we haven't yet disscussed the parseFloat() function, but I found that the
 * total surface area function wasn't outputing the correct result because when I 
 * was adding the (radius + height) the varibles were strings so it was concatenating
 * the strings together into a new number string and throwing off the calculation. For what
 * ever reason multipling the strings works in JS, so the first function works fine with 
 * string variables, but of course when you add them it concatenates them, so the variables
 * needed to be numbers for the second function to work. Don't worry I have prior coding
 * experience so I understand what parsing is already anyways.
 */

function getCurvedSurface() {
    var radius = parseFloat(document.getElementById("txtRadius").value);
    var height = parseFloat(document.getElementById("txtHeight").value);

    var curvedSurfaceArea = 2 * Math.PI * radius * height;
    document.getElementById("calculationResults").innerHTML = "<p>The Curved Surface Area is: " + curvedSurfaceArea +"</p>"; 
}

function getTotalSurface() {
    var radius = parseFloat(document.getElementById("txtRadius").value);
    var height = parseFloat(document.getElementById("txtHeight").value);
    
    var totalSurfaceArea = 2 * Math.PI * radius * (radius + height);
    document.getElementById("calculationResults").innerHTML = "<p>The Total Surface Area is: "+ totalSurfaceArea +"</p>";
}