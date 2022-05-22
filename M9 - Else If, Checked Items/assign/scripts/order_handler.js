// Make the code cleaner & add comments!!!

function processOrder() {
    var cost;
    var sandwichType = document.getElementById("selSandwichType").value;

    // Evaluate sandwich choice:
    if (sandwichType == "vegetarian") {
        cost = 7;
    } else if (sandwichType == "roast beef") {
        cost = 8;
    } else {
        cost = 9;
    }

    // Add cost for additional options:
    if (document.getElementById("chkAvocado").checked) {
        cost += parseFloat(document.getElementById("chkAvocado").value); // Maybe remove.
    }
    if (document.getElementById("chkArtisanalBun").checked) {
        cost += parseFloat(document.getElementById("chkArtisanalBun").value); // Maybe remove.
    }

    // Apply Discount if applicable:
    if (document.getElementById("radStudent").checked) {
        cost -= cost * parseFloat(document.getElementById("radStudent").value); // Maybe remove.
    } else if (document.getElementById("radStaff").checked || document.getElementById("radFaculty").checked) {
        cost -= cost * parseFloat(document.getElementById("radStaff").value); // Maybe remove.
    }

    cost = cost.toFixed(2);

    // Maybe seperate out the output string.
    var output = "<p>You ordered a " + sandwichType + " sandwich. Your total cost is: $" + cost + ".</p>"
    document.getElementById("orderSummary").innerHTML = output;
}