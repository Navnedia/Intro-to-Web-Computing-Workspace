function calculatShipping() {
    var weight = parseFloat(document.getElementById("txtWeight").value);
    var weightUnit = document.getElementById("selWeightUnit").value;
    var destination = document.getElementById("selDestination").value;
    var insurance = document.getElementById("selInsurance").value;
    var shippingCost;

    if (weightUnit == "grams") { // Weight is in grams:
        shippingCost = weight * 0.08;
    } else { // Weight is in ounces:
        shippingCost = weight * 2.268;
    }

    // if (insurance == "yes") {
    //     if (destination == "US") { // Shipping to US:
    //         shippingCost += shippingCost * 0.1;
    //     } else { // Shipping to Mexico:
    //         shippingCost += shippingCost * 0.2;
    //     }
    // }

    if (insurance == "yes" && destination == "US") {
        // Shipping to US
        shippingCost += shippingCost * 0.1;
    } 
    if (insurance == "yes" && destination == "Mexico") {
        // Shipping to Mexico
        shippingCost += shippingCost * 0.2;
    }

    shippingCost = shippingCost.toFixed(2);
    var output = "<p>The cost to ship your package is: $" + shippingCost + "</p>";
    document.getElementById("postageCostOutput").innerHTML = output;
}