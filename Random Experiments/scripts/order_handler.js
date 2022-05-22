// This code is an alternative implementation for the m9 assignment.
// This version features a more complex output.

function processOrder() {
    var cost;
    var discount = 0;
    var output;
    var sandwichType = document.getElementById("selSandwichType").value;

    // Evaluate sandwich choice:
    if (sandwichType == "vegetarian") {
        cost = 7;
        output = "<p>You ordered a vegetarian sandwich ($7):</p>";
    } else if (sandwichType == "roast beef") {
        cost = 8;
        output = "<p>You ordered a roast beef sandwich ($8):</p>";
    } else {
        cost = 9;
        output = "<p>You ordered a shrimp sandwich ($9):</p>";
    }

    output += "<ul>";
    // Add cost for additional options:
    if (document.getElementById("chkAvocado").checked) {
        cost += parseFloat(document.getElementById("chkAvocado").value); // Maybe remove.
        output += "<li>Avocado (Add $1.00)</li>";
    }
    if (document.getElementById("chkArtisanalBun").checked) {
        cost += parseFloat(document.getElementById("chkArtisanalBun").value); // Maybe remove.
        output += "<li>Artisanal Bun (Add $1.25)</li>";
    }
    output += "</ul>";

    // Apply discount if applicable:
    if (document.getElementById("radStudent").checked) {
        discount = cost * parseFloat(document.getElementById("radStudent").value); // Maybe remove.
    } else if (document.getElementById("radStaff").checked || document.getElementById("radFaculty").checked) {
        discount = cost * parseFloat(document.getElementById("radStaff").value); // Maybe remove.
    }

    output += "<p>Subtotal: $" + cost.toFixed(2) 
           + "<br> Discount: -$" + discount.toFixed(2) 
           + "<br><span style='font-weight: bold;'>Total: $" + (cost - discount).toFixed(2) 
           + "</span></p>"
    document.getElementById("orderSummary").innerHTML = output;
}