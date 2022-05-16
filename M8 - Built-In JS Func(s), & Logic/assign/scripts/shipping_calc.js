function calculateShipping() {
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


    /* Personally I would've done this insurance section below a little diffrently to avoid checking conditions
        multiple times, but I decided to do it this way because I figured you probably wanted us to use the AND 
        operator you introduced in this module.*/

    // Add appropriate insurance fee if they want insurance: 
    if (insurance == "yes" && destination == "US") {
        // Shipping to US (If they want insurance and the destination is the US, then add insurance rate for US).
        shippingCost += shippingCost * 0.1; // Take the current shipping cost and add the 10%.
    } else if (insurance == "yes" && destination == "Mexico") {
        // Shipping to Mexico (If they want insurance and the destination is Mexico, then add insurance rate for Mexico).
        shippingCost += shippingCost * 0.2; // Take the current shipping cost and add the 20%.
    }

    shippingCost = shippingCost.toFixed(2); // restrict to 2 decimals because the value is a money amount.

    // Format & output results to div:
    var output = "<p>The cost to ship your package is: $" + shippingCost + "</p>";
    document.getElementById("postageCostOutput").innerHTML = output;
}