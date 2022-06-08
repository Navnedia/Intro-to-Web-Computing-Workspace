function calcEntry() {
    // Should I use some values in the form for practice?
    console.log("hello?");

    var fee;
    var today = new Date();
    var dateStr = (today.getMonth() + 1) + "/" + (today.getDate());
    
    if (document.getElementById("radReg").checked) {
        fee = 10;
    } else {
        fee = 15;
    }

    if (document.getElementById("chkSenior").checked) {
        fee -= 5; // Subtract $5 from fee.
    } // Else do nothing (no senior discount).

    if (document.getElementById("radIsMember").checked) {
        fee -= fee * 0.1; // Subtract 10% from fee.
    } // Else do nothing (no member discount).

    fee = fee.toFixed(2); // Round to 2 decimals for dollar amount.

    var output = "<p>Thank you for your order on " + dateStr 
               + ". Your entry fee is $" + fee 
               + ". Thanks for your support!</p>";
    document.getElementById("admissionFeeResult").innerHTML = output;
}