function rentCar() {
    var age = parseFloat(document.getElementById("txtAgeRental").value);

    if (age >= 18) {
        document.getElementById("rentalOutput").style.color = "#008000"; // Set text Green
        document.getElementById("rentalOutput").innerHTML = "<p>You can rent a car!</p>";
    } else {
        result = "You CAN'T rent a car :(";
        document.getElementById("rentalOutput").style.color = "#cd2701"; // Set text Red
        document.getElementById("rentalOutput").innerHTML = "<p>You CAN'T rent a car :(</p>";
    }
}

function isHardWorker() {
    var hoursWorked = parseFloat(document.getElementById("txtHours").value);
    
    if (hoursWorked > 50) {
        document.getElementById("workOutputBox").innerHTML = "<p>Wow, you're a hard worker!</p>";
    }
}

function eligibleForBenifits() {
    var age = parseFloat(document.getElementById("txtAgeRetire").value);

    if (age >= 65) {
        document.getElementById("retireBenifitsOutput").innerHTML = "<p>You're eligible for retirement benifits!</p>";
    } else {
        document.getElementById("retireBenifitsOutput").innerHTML = "<p>Sorry, no benifits yet!</p>";
    }
}

function calculatePay() {
    // Pull inputs and parse them to floats because user will likely want to enter decimals:
    var hours = parseFloat(document.getElementById("txtHourWorked").value);
    var payRate = parseFloat(document.getElementById("txtPayRate").value);
    var salary = hours * payRate; // Calculate the salary.

    // If they worked more than 40 hours, then add a bonus by increasing the salary by 10%.
    if (hours > 40) {
        salary += salary * 0.1;
    }

    salary = salary.toFixed(2); // Limit to 2 decimal places cause were dealing with a money amount.
    document.getElementById("payOutput").innerHTML = "<p>You have earned $" + salary + " for this period.</p>"; 
}