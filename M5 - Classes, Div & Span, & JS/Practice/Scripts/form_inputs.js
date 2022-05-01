function alertColor() {
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var userFavColor = document.getElementById("selFavColor").value;

    alert("Hi " + firstName + " " + lastName + "! My name is Aiden V.");

    if (userFavColor === "blue") {
        alert("We both love the color blue!");
    } else {
        alert("I see you like the color " + userFavColor + ". My favorite color is blue!");
    }
}

function doMath() {
    var num1 = parseFloat(document.getElementById("txtNum1").value);
    var num2 = parseFloat(document.getElementById("txtNum2").value);
    var operator = document.getElementById("selMathOperation").value;
    var result;

    // Make sure that if the value was left empty that we set the defaults to 0:
    if (isNaN(num1)) {num1 = 0;}
    if (isNaN(num2)) {num2 = 0;}
    
    // conduct operation based on the operator:
    switch (operator) {
        case "+":
            result = num1 + num2;

            break;
        case "-":
            result = num1 - num2;

            break;
        case "*":
            result = num1 * num2;
        
            break;
        case "/":
            result = num1 / num2;

            break;
    }

    alert(num1 + " " + operator + " " + num2 + " = " + result);
}