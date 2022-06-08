function calcEntry() {
    // Should I use some values in the form for practice?

    
    var price;
    var today = new Date();
    var dateStr = (today.getMonth() + 1) + "/" + (today.getDate());
    
    // Note to self, this could also be done in one line using (__) ? 10 : 15.
    // Set the base price based on the selected exhibit type:
    if (document.getElementById("radReg").checked) {
        price = 10; // $10 for regular exhibit.
    } else {
        price = 15; // $15 for special exhibit.
    }

    // Senior discount check:
    if (document.getElementById("chkSenior").checked) {
        price -= 5; // Subtract $5 from the price.
    } // Else do nothing (no senior discount).

    // Member discount check:
    if (document.getElementById("radIsMember").checked) {
        price -= price * 0.1; // Subtract 10% from the price.
    } // Else do nothing (no member discount).

    price = price.toFixed(2); // Round to 2 decimals for dollar amount.

    var output = "<p>Thank you for your order on " + dateStr 
               + ". Your entry fee is $" + price 
               + ". Thanks for your support!</p>";
    document.getElementById("admissionFeeResult").innerHTML = output;
}