function getTaxInfo() {
    var income = parseFloat(document.getElementById("txtIncome").value);
    var taxesOwed;

    if(isNaN(income)) {
        alert("Please enter a valid numrical value for your income");
        return;
    }
    
    // Check income range radio buttons and calulate tax bases on selected bracket:
    if (document.getElementById("radLevel1").checked) {
        // Choose income of less than $30K:
        taxesOwed = 0;
    } else if (document.getElementById("radLevel2").checked) {
        // Choose income of between $30K and below $50K:
        taxesOwed = income * 0.25;
    } else if (document.getElementById("radLevel3").checked) {
        // Choose income of between $50 and below $100K:
        taxesOwed = income * 0.35;
    } else if (document.getElementById("radLevel4").checked) {
        // Choose income of $100K plus:
        taxesOwed = income * 0.40;
    } else {
        // None selected:
        alert("Please select an income range");
        return;
    }
    taxesOwed = taxesOwed.toFixed(0);

    document.getElementById("taxInfo").innerHTML = "<p>For an income of $" + income 
                                                 + ", you must pay $" + taxesOwed 
                                                 + " in taxes.</p>"
}