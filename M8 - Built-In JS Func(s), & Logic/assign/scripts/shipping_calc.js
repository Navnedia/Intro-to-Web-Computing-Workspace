function calculatShipping() {
    // Get user inputs:
    var weight = parseFloat(document.getElementById("txtWeight").value);
    var weightUnit = document.getElementById("selWeightUnit").value;
    var destination = document.getElementById("selDestination").value;
    var insurance = document.getElementById("selInsurance").value;
    
    var shippingCost;

    // Check for invalid NaN weight inputs:
    if (isNaN(weight)) {
        alert("Please enter a numerical in the weight field");
        return;
    }

    // Calculate the shipping based on the unit of weight:
    if (weightUnit == "grams") {
        // Weight is in grams
        shippingCost = weight * 0.08;
    } else {
        // Weight is in ounces
        shippingCost = weight * 2.268;
    }

    /* I would have choosen to use an if statement with a nested if else statement to do the insurance portion
     * because then I would've only needed to check each variable once, but I decided to do it the way you see
     * below because I figured you probably wanted us to use the AND operator you introduced in this module.
     */

    // Add appropriate insurance fee if they want insurance: 
    if (insurance == "yes" && destination == "US") {
        // Shipping to US (If they want insurance and the destination is the US, then add insurance rate for US).
        shippingCost += shippingCost * 0.1; // Take the current shipping cost and add the 10%.
    } 
    if (insurance == "yes" && destination == "Mexico") {
        // Shipping to Mexico (If they want insurance and the destination is Mexico, then add insurance rate for Mexico).
        shippingCost += shippingCost * 0.2; // Take the current shipping cost and add the 20%.
    }

    shippingCost = shippingCost.toFixed(2); // restrict to 2 decimals because the value is a money amount.

    // Format & output results to div:
    var output = "<p>The cost to ship your package is: $" + shippingCost + "</p>";
    document.getElementById("postageCostOutput").innerHTML = output;
}