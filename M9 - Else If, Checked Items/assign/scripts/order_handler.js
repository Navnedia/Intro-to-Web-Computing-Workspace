function processOrder() {
    var sandwichType = document.getElementById("selSandwichType").value;
    var cost;

    // Add cost of sandwich choice:
    if (sandwichType == "vegetarian") {
        cost = 7;
    } else if (sandwichType == "roast beef") {
        cost = 8;
    } else {
        cost = 9;
    }

    /**
     * For the options and discount fields I choose to pull the values from the 
     * HTML elements, but in a real world scenario I would never do this. Here,
     * pulling the values from the HTML introduces massive vulnerabilities that
     * can easily be explotied by modifying the HTML. The only reason I choose to 
     * pull the HTML values here is to demonstrat the skill we discussed in the
     * course module.
     */

    // Add cost for additional options:
    if (document.getElementById("chkAvocado").checked) {
        // Wants Avocado
        // Get additional cost from HTML element.
        cost += parseFloat(document.getElementById("chkAvocado").value);
    }
    if (document.getElementById("chkArtisanalBun").checked) {
        // Wants Artisanal Bun
        // Get additional cost from HTML element.
        cost += parseFloat(document.getElementById("chkArtisanalBun").value);
    }

    // Apply a selected discount if applicable:
    if (document.getElementById("radStudent").checked) {
        // Subtract student discount of (% off) from cost.
        // Get % from HTML element.
        cost -= cost * parseFloat(document.getElementById("radStudent").value);
    } else if (document.getElementById("radStaff").checked || 
               document.getElementById("radFaculty").checked) {
        // Subtract staff OR faculty discount of (% off) from cost.
        // Get % from HTML element.
        cost -= cost * parseFloat(document.getElementById("radStaff").value);
    }

    // Round off to two decimals because it's a dollar amount:
    cost = cost.toFixed(2);

    // Format and display output:
    var output = "<p>You ordered a " + sandwichType 
                + " sandwich. Your total cost is: $" + cost + "</p>";
    document.getElementById("orderSummary").innerHTML = output;
}