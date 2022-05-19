function travelRequest() {
    if (document.getElementById("chkFirstClass").checked) {
        alert("Traveling in style");
    }
    if (document.getElementById("chkPet").checked) {
        alert("Pets will cost you extra $");
    }
    if (document.getElementById("chkKids").checked) {
        alert("Traveling with kids; good luck!");
    }
}

function outputFavColor() {
    var colorRads = document.getElementsByName("favColor");
    var resultDiv = document.getElementById("favColorOutput");
    var favColorName;
    var favColorHex;

    for (i = 0; i < colorRads.length; i++) {
        if (colorRads[i].checked) {
            favColorName = colorRads[i].value;
            favColorHex = colorRads[i].getAttribute("hex");
            break;
        }
    }

    resultDiv.style.backgroundColor = favColorHex;
    resultDiv.innerHTML = "<p>Your favorite color is " + favColorName + "</p>";
}

function checkCity() {
    var cityChoice;

    if (document.getElementById("radChicago").checked) {
        // Choose Chicago:
        cityChoice = document.getElementById("radChicago").value;
    } else if (document.getElementById("radNY").checked) {
        // Choose New York:
        cityChoice = document.getElementById("radNY").value;
    } else if (document.getElementById("radLA").checked) {
        // Choose Las Angeles:
        cityChoice = document.getElementById("radLA").value;
    } 

    document.getElementById("travelLocationOut").innerHTML = "<p>Great choice, I love " + cityChoice + "!</p>";
}