function getIRAContribution() {
    // Get inputs:
    var income = parseFloat(document.getElementById("txtIncome").value);
    var investPercent = parseFloat(document.getElementById("txtInvestPercent").value);

    // Calculate contribution:
    var contribution = income * (investPercent / 100); // P.S I know the parentheses aren't needed here, I just include them for clarity.
    contribution = contribution.toFixed(0); // Chop off decimals because we want the contibution to be a whole number.

    var output;
    if (income < 140000) { // Eligible (income below $140,000):
        output = "<p>For an income of $" + income + " and an investment percentage of "
               + investPercent +"%, you would invest $" + contribution + ".</p><p>Good Luck!</p>";
    } else { // Not Eligible (income at or above $140,000):
        output = "<p>I'm sorry, but since your income exceeds $140,000 you do not qualify to purchase a Roth IRA.</p>";
    }

    document.getElementById("outputIRAContribution").innerHTML = output;
}